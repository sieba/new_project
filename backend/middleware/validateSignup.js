export const validateSignup = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error_message: "Please complete the form to register" });
  }


  // Check password strength
  if (password.length < 8) {
    return res.status(400).json({ error_message: "Password must be at least 6 characters long" });
  }

  next();
}