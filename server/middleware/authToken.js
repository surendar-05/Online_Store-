// const jwt = require('jsonwebtoken');

// const authToken = async (req, res, next) => {
//   try {
//     let decoded; // Declare decoded outside the callback

//     // Obtain token from cookies or headers
//     const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);

//     // Check if token is provided
//     if (!token) {
//       return res.json({
//         message: "User not Login",
//         error: true,
//         success: false
//       });
//     }

//     // Verify token
//     jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, result) {
//       if (err) {
//         console.error(err);
//         throw new Error('Failed to authenticate token');
//       }

//       // Token is valid, result contains the decoded payload of the JWT
//       decoded = result;
//       console.log('decoded', decoded);
//     });

//     req.user = decoded ? { id: decoded._id } : null; // Set req.user if decoded is defined

//     // Call next() to pass control to the next middleware
//     next();
//   } catch (err) {
//     console.error(err);
//     res.status(401).json({
//       message: err.message || 'Unauthorized',
//       error: true,
//       success: false
//     });
//   }
// };

// module.exports = authToken;

const jwt = require('jsonwebtoken');

const authToken = async (req, res, next) => {
  try {
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);

    if (!token) {
      console.error('No token found');
      return res.status(401).json({
        message: "Please Login...!",
        error: true,
        success: false
      });
    }

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, result) => {
      if (err) {
        console.error('Token verification error:', err);
        return res.status(401).json({
          message: 'Failed to authenticate token',
          error: true,
          success: false
        });
      }

      if (!result) {
        console.error('No result from token verification');
        return res.status(401).json({
          message: 'Failed to authenticate token',
          error: true,
          success: false
        });
      }

      console.log('Token verified:', result);
      req.user = { id: result._id, role: result.role };
      next();
    });
  } catch (err) {
    console.error('Error in authToken middleware:', err.message);
    res.status(401).json({
      message: err.message || 'Unauthorized',
      error: true,
      success: false
    });
  }
};

module.exports = authToken;
