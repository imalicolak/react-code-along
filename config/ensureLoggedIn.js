/** @format */

module.exports = function (req, res, next) {
	// Status Code of 401 is UNAUTH
	if (!req.user) return res.status(401).json('Unauthorized');
	// A Okay
	next();
};
