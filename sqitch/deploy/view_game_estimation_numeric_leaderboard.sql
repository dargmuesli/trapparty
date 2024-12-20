BEGIN;

CREATE OR REPLACE VIEW trapparty.game_estimation_numeric_leaderboard_view AS
WITH ranked_estimations AS (
  SELECT
    ger.game_id,
    gev.round_id,
    gev.player_id,
    gev.answer,
    ABS(gev.answer - ger.answer_correct) AS estimation_diff,
    RANK() OVER (PARTITION BY gev.round_id ORDER BY ABS(gev.answer - ger.answer_correct) ASC) AS rank
  FROM
    trapparty.game_estimation_numeric_vote gev
  JOIN
    trapparty.game_estimation_numeric_round ger
  ON
    gev.round_id = ger.id
),
points_assignment AS (
  SELECT
    game_id,
    round_id,
    player_id,
    RANK() OVER (PARTITION BY round_id ORDER BY rank DESC) AS points
  FROM
    ranked_estimations
),
leaderboard AS (
  SELECT
    pa.game_id,
    p.name,
    SUM(pa.points)::INT AS total_points
  FROM
    points_assignment pa
  JOIN
    trapparty.player p
  ON
    pa.player_id = p.id
  GROUP BY
    pa.game_id, p.id, p.name
)
SELECT
  game_id,
  name AS player_name,
  leaderboard.total_points
FROM
  leaderboard
ORDER BY
  leaderboard.total_points DESC;

COMMENT ON VIEW trapparty.game_estimation_numeric_leaderboard_view IS 'Retrieves the leaderboard for a numeric estimation game.';

GRANT SELECT ON trapparty.game_estimation_numeric_leaderboard_view TO trapparty_anonymous;

COMMIT;
