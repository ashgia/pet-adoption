INSERT INTO pets(species, breed, petname, gender, size, color, age, goodWith, photourl, userid)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);

-- SELECT *
-- FROM users u
-- INNER JOIN pets p ON p.userid = u.userid
-- WHERE u.shelter = 'TRUE';