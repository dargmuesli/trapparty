BEGIN;

DO $$
BEGIN
  ASSERT (SELECT pg_catalog.has_function_privilege('trapparty_anonymous', 'trapparty.team_player_count(INT)', 'EXECUTE'));
END $$;

ROLLBACK;
