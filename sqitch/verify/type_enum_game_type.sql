BEGIN;

DO $$
BEGIN
  ASSERT (SELECT pg_catalog.has_type_privilege('trapparty.game_type', 'USAGE'));
END $$;

ROLLBACK;
