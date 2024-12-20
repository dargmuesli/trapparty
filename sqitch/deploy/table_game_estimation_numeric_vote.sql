BEGIN;

CREATE TABLE trapparty.game_estimation_numeric_vote (
  id              SERIAL PRIMARY KEY,

  answer          REAL NOT NULL,
  player_id       INT NOT NULL REFERENCES trapparty.player(id),
  round_id        INT NOT NULL REFERENCES trapparty.game_estimation_numeric_round(id),
  UNIQUE (player_id, round_id)
);

COMMENT ON TABLE trapparty.game_estimation_numeric_vote IS 'A vote of a numeric estimation game round.';
COMMENT ON COLUMN trapparty.game_estimation_numeric_vote.id IS '@omit create\nThe vote''s internal id.';
COMMENT ON COLUMN trapparty.game_estimation_numeric_vote.answer IS 'The vote''s answer.';
COMMENT ON COLUMN trapparty.game_estimation_numeric_vote.player_id IS 'The vote''s internal player id';
COMMENT ON COLUMN trapparty.game_estimation_numeric_vote.round_id IS 'The vote''s internal round id.';

GRANT SELECT, INSERT ON TABLE trapparty.game_estimation_numeric_vote TO trapparty_anonymous;
GRANT USAGE ON SEQUENCE trapparty.game_estimation_numeric_vote_id_seq TO trapparty_anonymous;

CREATE OR REPLACE FUNCTION trapparty.enforce_null_answer_correct()
RETURNS TRIGGER AS $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM trapparty.game_estimation_numeric_round
    WHERE id = NEW.round_id AND answer_correct IS NOT NULL
  ) THEN
    RAISE EXCEPTION 'You cannot vote for a round that''s over.';
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER enforce_null_answer_correct_trigger
BEFORE INSERT ON trapparty.game_estimation_numeric_vote
FOR EACH ROW
EXECUTE FUNCTION trapparty.enforce_null_answer_correct();

COMMIT;
