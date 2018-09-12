SELECT user_name FROM auth_user WHERE authid = $1;


-- SELECT a.authid
-- FROM auth_user a
-- LEFT JOIN users u ON u.userID = a.userID


-- SELECT a.authid u.