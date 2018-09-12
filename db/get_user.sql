SELECT * FROM users WHERE authid = $1;



-- SELECT a.userid, u.userid, u.fullname, u.city, u.email, u.phone, u.photourl, u.living, u.aboutme, u.species, u.breed, u.gender, u.color, u.size, u.age, u.goodwith
-- FROM auth_user a
-- JOIN users u ON u.userid = a.userid
-- WHERE auth_id = $1;