BEGIN;

SELECT id,
       answer_correct,
       element_name,
       game_id
FROM trapparty.game_estimation_numeric_round WHERE FALSE;

DO $$
BEGIN
  ASSERT (SELECT pg_catalog.has_table_privilege('trapparty_anonymous', 'trapparty.game_estimation_numeric_round', 'SELECT'));
  ASSERT (SELECT pg_catalog.has_table_privilege('trapparty_anonymous', 'trapparty.game_estimation_numeric_round', 'INSERT'));
  ASSERT (SELECT pg_catalog.has_table_privilege('trapparty_anonymous', 'trapparty.game_estimation_numeric_round', 'UPDATE'));
  ASSERT NOT (SELECT pg_catalog.has_table_privilege('trapparty_anonymous', 'trapparty.game_estimation_numeric_round', 'DELETE'));
END $$;

ROLLBACK;
