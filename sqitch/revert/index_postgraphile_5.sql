BEGIN;

DROP INDEX trapparty.team_event_id_idx;
DROP INDEX trapparty.event_start_idx;
DROP INDEX trapparty.game_type_idx;
DROP INDEX trapparty.game_team_score_game_id_idx;
DROP INDEX trapparty.game_team_score_team_id_idx;
DROP INDEX trapparty.game_estimation_numeric_round_game_id_idx;
DROP INDEX trapparty.game_random_facts_round_game_id_idx;

COMMIT;
