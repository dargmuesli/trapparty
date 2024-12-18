BEGIN;

CREATE SCHEMA trapparty;

COMMENT ON SCHEMA trapparty IS 'Is used by PostGraphile.';

GRANT USAGE ON SCHEMA trapparty TO trapparty_anonymous;

COMMIT;
