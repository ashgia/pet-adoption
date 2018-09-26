select u.userid, p.petid, p.species, p.breed, p.petname, p.gender, p.size, p.color, p.age, p.goodwith
FROM users u
JOIN pets p ON u.userid = p.userid
WHERE shelter = true;