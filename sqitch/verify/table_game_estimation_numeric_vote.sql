BEGIN;

SELECT id,
       answer,
       player_id,
       round_id
FROM trapparty.game_estimation_numeric_vote WHERE FALSE;

DO $$
BEGIN
  ASSERT (SELECT pg_catalog.has_table_privilege('trapparty_anonymous', 'trapparty.game_estimation_numeric_vote', 'SELECT'));
  ASSERT (SELECT pg_catalog.has_table_privilege('trapparty_anonymous', 'trapparty.game_estimation_numeric_vote', 'INSERT'));
  ASSERT NOT (SELECT pg_catalog.has_table_privilege('trapparty_anonymous', 'trapparty.game_estimation_numeric_vote', 'UPDATE'));
  ASSERT NOT (SELECT pg_catalog.has_table_privilege('trapparty_anonymous', 'trapparty.game_estimation_numeric_vote', 'DELETE'));
END $$;

ROLLBACK;
