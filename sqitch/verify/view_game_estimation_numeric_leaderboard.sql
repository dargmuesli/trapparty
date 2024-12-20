BEGIN;

SELECT
  player_name,
  total_points
FROM trapparty.game_estimation_numeric_leaderboard_view WHERE FALSE;

ROLLBACK;
