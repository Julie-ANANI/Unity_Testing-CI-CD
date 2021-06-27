-- Deploy unity-tdd:init from pg

BEGIN;

-- XXX Add DDLs here.

CREATE TABLE theme (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT NOT NULL UNIQUE,
    description TEXT NULL,
    position INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    modified_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE mission  (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT NOT NULL UNIQUE,
    advice TEXT NULL,
    position INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    modified_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    theme_id INT NOT NULL REFERENCES theme(id) ON DELETE CASCADE
);

CREATE TABLE "user"  (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    api_user INT NOT NULL,
    admin_status BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    modified_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE interact(
    is_checked BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    modified_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    mission_id INT NOT NULL REFERENCES mission(id) ON DELETE CASCADE,
    "user_id" INT NOT NULL REFERENCES "user"(id),
    PRIMARY KEY (mission_id, "user_id") 
    
);


COMMIT;
