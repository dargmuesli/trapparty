BEGIN;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT
    FROM pg_catalog.pg_attribute
    WHERE attrelid = 'trapparty.game_estimation_numeric_round'::regclass
      AND attname = 'id'
      AND col_description(attrelid, attnum) LIKE '%@behavior -insert%'
  ) THEN
    RAISE EXCEPTION 'trapparty.game_estimation_numeric_round.id is missing the @behavior -insert tag';
  END IF;

  IF NOT EXISTS (
    SELECT
    FROM pg_catalog.pg_attribute
    WHERE attrelid = 'trapparty.game_estimation_numeric_vote'::regclass
      AND attname = 'id'
      AND col_description(attrelid, attnum) LIKE '%@behavior -insert%'
  ) THEN
    RAISE EXCEPTION 'trapparty.game_estimation_numeric_vote.id is missing the @behavior -insert tag';
  END IF;
END $$;

ROLLBACK;
