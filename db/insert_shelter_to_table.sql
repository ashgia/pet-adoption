INSERT INTO shelters(userid, authid, fullname, city, email, phone, photourl, aboutme, address, policy, mission)
-- VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);
SELECT * 
FROM users 
WHERE shelters = 'true';
