export const ValidateSignin = (req, res, next) => {
  const { email, password } = req.body;
  if(!email || !password) {
    console.error("incomplete from");
    return res.status(400).json({ error_message: "Please complete the form to sign in" });
  }

  next();
} 