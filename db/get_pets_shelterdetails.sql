-- SELECT * FROM pets p
-- LEFT JOIN users u ON u.userid = p.userid
-- WHERE u.userid = $1;

SELECT * FROM pets WHERE userid = $1;

