BEGIN;

CREATE EXTENSION "uuid-ossp" WITH SCHEMA trapparty;

COMMENT ON EXTENSION "uuid-ossp" IS 'Provides functions to generate universally unique ID.';

COMMIT;
