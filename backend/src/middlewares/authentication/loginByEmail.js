const {User} = require('../../models');
const {BadRequestError} = require('../../utils/errors');
const bcrypt = require('bcrypt');




module.exports = async (req, res, next) => {

  try {
    const {body: {email, password}} = req;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (user) {
              if (await  bcrypt.compare(password , user.password)){
                req.user =user;
                return next();
              }
    }
    next(new BadRequestError('email or password is incorrect'))
  } catch (e) {
      next(e);
  }
};