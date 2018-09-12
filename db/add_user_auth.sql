
INSERT INTO users(authID)
VALUES ($1);
SELECT * FROM users WHERE authID = $1;