-- Verify trapparty:table_game_random_facts_round on pg

BEGIN;

SELECT id,
       answer_correct,
       game_id,
       is_active,
       questioner_name
FROM trapparty.game_random_facts_round WHERE FALSE;

DO $$
BEGIN
  ASSERT (SELECT pg_catalog.has_table_privilege('trapparty_anonymous', 'trapparty.game_random_facts_round', 'SELECT'));
  ASSERT NOT (SELECT pg_catalog.has_table_privilege('trapparty_anonymous', 'trapparty.game_random_facts_round', 'INSERT'));
  ASSERT NOT (SELECT pg_catalog.has_table_privilege('trapparty_anonymous', 'trapparty.game_random_facts_round', 'UPDATE'));
  ASSERT NOT (SELECT pg_catalog.has_table_privilege('trapparty_anonymous', 'trapparty.game_random_facts_round', 'DELETE'));
END $$;

ROLLBACK;
