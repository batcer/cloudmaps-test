/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: A policy to allow only activated user accounts (by confirming email)
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  if (req.session.user && req.session.user.active) {
    return next();
  }

  // User is not allowed
  // show link to resend activation email
  return res.view('user/not_activated');
};
