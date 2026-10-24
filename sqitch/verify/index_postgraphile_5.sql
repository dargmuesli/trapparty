BEGIN;

DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_catalog.pg_indexes WHERE schemaname = 'trapparty' AND indexname = 'team_event_id_idx') THEN
    RAISE EXCEPTION 'trapparty.team is missing the team_event_id_idx index';
  END IF;

  IF NOT EXISTS (SELECT FROM pg_catalog.pg_indexes WHERE schemaname = 'trapparty' AND indexname = 'event_start_idx') THEN
    RAISE EXCEPTION 'trapparty.event is missing the event_start_idx index';
  END IF;

  IF NOT EXISTS (SELECT FROM pg_catalog.pg_indexes WHERE schemaname = 'trapparty' AND indexname = 'game_type_idx') THEN
    RAISE EXCEPTION 'trapparty.game is missing the game_type_idx index';
  END IF;

  IF NOT EXISTS (SELECT FROM pg_catalog.pg_indexes WHERE schemaname = 'trapparty' AND indexname = 'game_team_score_game_id_idx') THEN
    RAISE EXCEPTION 'trapparty.game_team_score is missing the game_team_score_game_id_idx index';
  END IF;

  IF NOT EXISTS (SELECT FROM pg_catalog.pg_indexes WHERE schemaname = 'trapparty' AND indexname = 'game_team_score_team_id_idx') THEN
    RAISE EXCEPTION 'trapparty.game_team_score is missing the game_team_score_team_id_idx index';
  END IF;

  IF NOT EXISTS (SELECT FROM pg_catalog.pg_indexes WHERE schemaname = 'trapparty' AND indexname = 'game_estimation_numeric_round_game_id_idx') THEN
    RAISE EXCEPTION 'trapparty.game_estimation_numeric_round is missing the game_estimation_numeric_round_game_id_idx index';
  END IF;

  IF NOT EXISTS (SELECT FROM pg_catalog.pg_indexes WHERE schemaname = 'trapparty' AND indexname = 'game_random_facts_round_game_id_idx') THEN
    RAISE EXCEPTION 'trapparty.game_random_facts_round is missing the game_random_facts_round_game_id_idx index';
  END IF;
END $$;

ROLLBACK;
