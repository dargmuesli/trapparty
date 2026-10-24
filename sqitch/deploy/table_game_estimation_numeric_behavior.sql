BEGIN;

COMMENT ON COLUMN trapparty.game_estimation_numeric_round.id IS E'@behavior -insert\nThe round''s internal id.';
COMMENT ON COLUMN trapparty.game_estimation_numeric_vote.id IS E'@behavior -insert\nThe vote''s internal id.';

COMMIT;
