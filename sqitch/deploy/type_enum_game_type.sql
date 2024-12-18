BEGIN;

CREATE TYPE trapparty.game_type AS ENUM (
  'estimation_numeric',
  'random_facts',
  'team_score'
);

COMMENT ON TYPE trapparty.game_type IS 'Available game types: estimation_numeric, random_facts, team_score.';

COMMIT;
