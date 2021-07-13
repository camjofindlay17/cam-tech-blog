const { User } = require('../models')

const userData = [
  {
    user_name: "camjofindlay",
    email: "camjofindlay@email.com",
    password: "user123"
  },
  {
    user_name: "remi0628",
    email: "remi@email.com",
    password: "pet123"
  },
  {
    user_name: "gof0404",
    email: "glo@email.com",
    password: "password1"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;