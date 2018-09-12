-- INSERT INTO auth_user(authID, user_name)
-- VALUES ($1, $2);

INSERT INTO users(authID)
VALUES ($1);
SELECT * FROM users WHERE authID = $1;