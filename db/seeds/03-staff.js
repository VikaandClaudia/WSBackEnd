
exports.seed = function(knex, Promise) {
  return knex('staff').del()
    .then(function () {
      return knex('staff').insert([
        {id: 1, shops_id: 1, role_id: 1, first_name: 'Vikanda', last_name: 'Gonzales', email: 'test@test', password: '$2a$10$vj6rshiShRql5E0A5DxKWOW6Qso/8C/U4ycefHIp5I5Ua3GW1HESS', photo: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12222652/Yorkshire-Terrier-MP.jpg'},
        {id: 2, shops_id: 2, role_id: 1, first_name: 'Roger', last_name: 'Schmidt', email: 'roger@test', password: '$2a$10$vj6rshiShRql5E0A5DxKWOW6Qso/8C/U4ycefHIp5I5Ua3GW1HESS', photo: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12222652/Yorkshire-Terrier-MP.jpg'},
        {id: 3, shops_id: 1, role_id: 2, first_name: 'Claudia', last_name: 'Ligidakis', email: 'claudia@test', password: '$2a$10$vj6rshiShRql5E0A5DxKWOW6Qso/8C/U4ycefHIp5I5Ua3GW1HESS', photo: 'https://static-cdn.jtvnw.net/jtv_user_pictures/hsdogdog-profile_image-5550ade194780dfc-300x300.jpeg'},
        {id: 4, shops_id: 1, role_id: 3, first_name: 'Roger', last_name: 'S', email: 'roger@test', password: '$2a$10$vj6rshiShRql5E0A5DxKWOW6Qso/8C/U4ycefHIp5I5Ua3GW1HESS', photo: 'https://www.healthypawspetinsurance.com/Images/V3/DogAndPuppyInsurance/Dog_CTA_Desktop_HeroImage.jpg'},
        {id: 5, shops_id: 1, role_id: 3, first_name: 'Wes', last_name: 'R', email: 'wes@test', password: '$2a$10$vj6rshiShRql5E0A5DxKWOW6Qso/8C/U4ycefHIp5I5Ua3GW1HESS', photo: 'https://www.what-dog.net/Images/faces2/scroll000.jpg'}

      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('staff_id_seq', (SELECT MAX(id) FROM staff));"
      );
    });
};
