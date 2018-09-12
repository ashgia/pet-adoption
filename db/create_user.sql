UPDATE users SET fullname = $2, city = $3, email = $4, phone = $5, photoURL = $6, living = $7, aboutme = $8, species = $9,
      breed = $10,
      gender = $11,
      color = $12,
      size = $13,
      age = $14,
      goodWith = $15
WHERE authid = $1;




