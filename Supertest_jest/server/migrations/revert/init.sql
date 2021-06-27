-- Revert unity-tdd:init from pg

BEGIN;

-- XXX Add DDLs here.

DROP TABLE interact, "user", mission, theme;

COMMIT;
