-- select u.userid, p.petid, p.species, p.breed, p.petname, p.gender, p.size, p.color, p.age, p.goodwith, p.photourl
-- FROM users u
-- JOIN pets p ON u.userid = p.userid
-- WHERE userid = $1

SELECT * FROM pets WHERE userid = $1;