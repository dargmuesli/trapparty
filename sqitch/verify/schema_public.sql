BEGIN;

DO $$
BEGIN
  ASSERT (SELECT pg_catalog.has_schema_privilege('trapparty_anonymous', 'trapparty', 'USAGE'));
END $$;

ROLLBACK;
