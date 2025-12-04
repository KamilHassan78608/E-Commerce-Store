const adminAuth = (req, res, next) => {
  const token = req.headers.token;

  console.log("Received token:", req.headers.token);


  if (!token) {
    return res.json({ success: false, message: 'No token provided' });
  }

  // token format: "email,password"
  const [email, password] = token.split(',');

  // Hard-coded admin credentials
  const ADMIN_EMAIL = "kamil@email.com";
  const ADMIN_PASSWORD = "qwerty12345";

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    return next();
  }

  return res.json({ success: false, message: 'Unauthorized' });
};

export default adminAuth;
