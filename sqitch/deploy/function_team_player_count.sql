BEGIN;

CREATE FUNCTION trapparty.team_player_count(event_id INT)
RETURNS TABLE(id INT, player_count BIGINT) AS $$
BEGIN
  RETURN QUERY
    WITH data AS (SELECT player.id AS player_id, team.id AS team_id FROM trapparty.team, trapparty.player WHERE team.id = player.team_id AND team.event_id = $1)
      SELECT data.team_id AS id, SUM(1) AS player_count FROM data GROUP BY data.team_id ORDER BY data.team_id ASC;
END;
$$ LANGUAGE PLPGSQL STABLE STRICT SECURITY DEFINER;

COMMENT ON FUNCTION trapparty.team_player_count(INT) IS E'Retrieves the player count of each team.';

GRANT EXECUTE ON FUNCTION trapparty.team_player_count(INT) TO trapparty_anonymous;

COMMIT;
