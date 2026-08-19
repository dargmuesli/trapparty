BEGIN;

DROP ROLE IF EXISTS trapparty_postgraphile;
\set role_trapparty_postgraphile_password `cat /run/secrets/postgres-role-trapparty-postgraphile-password`
CREATE ROLE trapparty_postgraphile LOGIN PASSWORD :'role_trapparty_postgraphile_password';

COMMIT;
