BEGIN;

DROP ROLE IF EXISTS trapparty_anonymous;
CREATE ROLE trapparty_anonymous;

GRANT trapparty_anonymous to trapparty_postgraphile;

COMMIT;
