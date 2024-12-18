BEGIN;

CREATE TYPE trapparty.game_type AS ENUM (
  'random_facts',
  'team_score'
);

COMMENT ON TYPE trapparty.game_type IS 'Available game types: random_facts, team_score.';

COMMIT;
