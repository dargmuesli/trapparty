BEGIN;

CREATE TABLE trapparty.game_estimation_numeric_round (
  id              SERIAL PRIMARY KEY,
  answer_correct  INT CHECK (answer_correct >= 0),
  element_name    TEXT NOT NULL CHECK (char_length(element_name) < 100),
  game_id         INT NOT NULL REFERENCES trapparty.game(id)
);

COMMENT ON TABLE trapparty.game_estimation_numeric_round IS 'A round of a numeric estimation game.';
COMMENT ON COLUMN trapparty.game_estimation_numeric_round.id IS 'The round''s internal id.';
COMMENT ON COLUMN trapparty.game_estimation_numeric_round.answer_correct IS 'The round''s correct answer.';
COMMENT ON COLUMN trapparty.game_estimation_numeric_round.element_name IS 'The round''s element name';
COMMENT ON COLUMN trapparty.game_estimation_numeric_round.game_id IS 'The round''s internal game id';

GRANT SELECT, INSERT, UPDATE ON TABLE trapparty.game_estimation_numeric_round TO trapparty_anonymous;
GRANT USAGE ON SEQUENCE trapparty.game_estimation_numeric_round_id_seq TO trapparty_anonymous;

COMMIT;
