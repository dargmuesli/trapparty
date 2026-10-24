BEGIN;

CREATE INDEX team_event_id_idx ON trapparty.team USING btree (event_id);
CREATE INDEX event_start_idx ON trapparty.event USING btree (start);
CREATE INDEX game_type_idx ON trapparty.game USING btree (type);
CREATE INDEX game_team_score_game_id_idx ON trapparty.game_team_score USING btree (game_id);
CREATE INDEX game_team_score_team_id_idx ON trapparty.game_team_score USING btree (team_id);
CREATE INDEX game_estimation_numeric_round_game_id_idx ON trapparty.game_estimation_numeric_round USING btree (game_id);
CREATE INDEX game_random_facts_round_game_id_idx ON trapparty.game_random_facts_round USING btree (game_id);

COMMIT;
