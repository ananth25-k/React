import React, { JSX, useState } from "react";
import {
  Box,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  Paper,
  Alert,
  Card,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Servies/Login";
import { Link as RouterLink } from "react-router-dom";

type Form = {
  email: string;
  password: string;
  terms: boolean;
};

type FormErrors = {
  email?: string;
  password?: string;
  terms?: string;
};

export default function Login(): JSX.Element {
  const [form, setForm] = useState<Form>({
    email: "",
    password: "",
    terms: false,
  });
  type MessageType = "success" | "error";

  const [errors, setErrors] = useState<FormErrors>({});
  // const [submitted, setSubmitted] = useState(false);

  const [loginError, setLoginError] = useState<string | null>(null);

  const [message, setMessage] = useState<{
    type: MessageType;
    text: string;
  } | null>(null);

  const navigate = useNavigate();

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // name will be "email" or "password"
    setForm((prev) => ({ ...prev, [name]: value })); //[name ] = dynamic Key  what type of input need to change

    // → ["email"]: "anant@gmail.com"
    setErrors((prev) => ({ ...prev, [name]: undefined })); //Raises Vallidation
  };

  // Handler for checkbox: terms
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target; // name will be "terms"
    setForm((prev) => ({ ...prev, [name]: checked }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  // Basic validation
  const validate = (): FormErrors => {
    const next: FormErrors = {};
    const emailPattern = /^\S+@\S+\.\S+$/;

    if (!form.email.trim()) next.email = "Email is required";
    //f email is empty or " " → result is empty string "".
    //!"" becomes true
    else if (!emailPattern.test(form.email)) next.email = "Enter a valid email";

    if (!form.password.trim()) next.password = "Password is required";
    else if (form.password.length < 3)
      next.password = "Password must be at least 3 characters";

    if (!form.terms) next.terms = "You must accept terms and conditions";

    return next;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = validate();
    setErrors(validation);

    if (Object.keys(validation).length !== 0) {
      // No validation errors — proceed
      // setSubmitted(false);
      return;
    }
    try {
      // setSubmitted(true);
      setMessage(null);
      const res = await loginUser(form);
      if (res?.email !== null) {
        // console.log("Login success:", res);
        setMessage({
          type: "success",
          text: "Login successful!",
        });
        setTimeout(() => {
          navigate("/nav");
        }, 1000);
      } else {
        setMessage({
          type: "error",
          text: "Invalid email or password",
        });
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <Box
           
        sx={{
           minHeight:"100vh",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          background: "linear-gradient(135deg, #e3f2fd, #fce4ec)", // 🔹 soft background
        }}
      >
        <Box
          sx={{ maxWidth: 450, width: "100%", p: 4, borderRadius: 3 }}
          className="firstdiv"
        >
          <Paper elevation={3} sx={{ p: 5 }}>
            <Typography
              variant="h4"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              Login Page
            </Typography>
            <form onSubmit={handleSubmit} noValidate>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleTextChange}
                error={Boolean(errors.email)}
                helperText={errors.email ?? ""}
                // nullish email is >> null,undefine >> String can takes
                fullWidth
                margin="normal"
              />

              <TextField
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleTextChange}
                error={Boolean(errors.password)}
                helperText={errors.password ?? ""}
                fullWidth
                margin="normal"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    name="terms"
                    checked={form.terms}
                    onChange={handleCheckboxChange}
                    color="primary"
                  />
                }
                label="I accept Terms and Conditions"
              />
              {errors.terms && (
                <Typography
                  variant="caption"
                  color="error"
                  display="block"
                  sx={{ mb: 1 }}
                >
                  {errors.terms}
                </Typography>
              )}

              <Typography align="center" sx={{ mt: 2 }}>
                {/* <Link
                  component="button"
                  variant="body1"
                  onClick={() => navigate("/")}
                  sx={{ textDecoration: "none", color: "text.primary" }}
                >
                  forgotpassword
                </Link> */}

                <RouterLink
                  to="/forgotPassword"
                  style={{
                    textDecoration: "underline",
                    color: "#1976d2",
                    cursor: "pointer",
                    paddingRight: 10,
                  }}
                >
                  Forgot password
                </RouterLink>

                <RouterLink
                  to="/signup"
                  style={{
                    textDecoration: "underline",
                    color: "#1976d2",
                    cursor: "pointer",
                  }}
                >
                  New Account Signup
                </RouterLink>
              </Typography>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 1 }}
              >
                Submit
              </Button>
            </form>

            {message && (
              <Alert severity={message.type} sx={{ mt: 2 }}>
                {message.text}
              </Alert>
            )}
          </Paper>
        </Box>
      </Box>
    </>
  );
}
