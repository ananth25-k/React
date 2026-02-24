import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  FormLabel,
  Checkbox,
  Link,
  Alert,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signupUser } from "../Servies/Login";
function Signup() {
  const initialForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  type MessageType = "success" | "error";
  type FormValues = typeof initialForm;
  type FormErrors = Partial<FormValues>;

  const [val, setValue] = useState<FormValues>(initialForm);
  // const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [message, setMessage] = useState<{
    type: MessageType;
    text: string;
  } | null>(null);
  const navigate = useNavigate();
  const textChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));

    // error clear when typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!val.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!val.lastName.trim() || val.lastName.length < 5) {
      newErrors.lastName = "Last name must be at least 5 characters";
    }

    if (!val.email.trim()) {
      //val.email="" => empty =>!false >trigers the Erros
      newErrors.email = "Email is required";
    }
    if (!val.password.trim() || val.password.length < 3) {
      newErrors.password = "password Required must be atleast 3 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handelsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      // setSubmitted(false);
      return;
    }
    try {
      // setSubmitted(true);
      setMessage(null);
      const res = await signupUser(val);
      if (res?.email !== null) {
        setMessage({
          type: "success",
          text: " user saved successful!",
        });
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        setMessage({
          type: "error",
          text: "fill vallid details",
        });
        // setValue(initialForm);
        setErrors({});
      }
    } catch (error) {
      console.error("signup failed:", error);
    }

    console.log("Submitted value:", val);
  };
  return (
    <>
      {/* <Box
        sx={{
          // minHeight: "100vh",
          // backgroundImage: `url("https://images.pexels.com/photos/6575877/pexels-photo-6575877.jpeg")`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          background: "linear-gradient(135deg, #e3f2fd, #fce4ec)",
        }}
      > */}
        <Box
          sx={{
            minHeight: "100vh", // 🔹 takes full screen height
            display: "flex", // 🔹 enables flexbox
            justifyContent: "center", // 🔹 horizontal center
            alignItems: "center",
            
          background: "linear-gradient(135deg, #e3f2fd, #fce4ec)",
          }}
        >
          <div style={{ marginTop: 100 }}>
            <Paper
              elevation={3}
              sx={{
                maxWidth: 450,
                width: "100%",
                p: 4,
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h3"
                color=" "
                sx={{ display: "flex", justifyContent: "center" }}
              >
                Signup
              </Typography>
              <form action="" onSubmit={handelsubmit}>
                <TextField
                  id=""
                  label="firstname"
                  name="firstName"
                  value={val.firstName}
                  onChange={textChange}
                  fullWidth
                  margin="normal"
                  error={Boolean(errors.firstName)}
                  helperText={errors.firstName}
                />
                <TextField
                  id=""
                  label="Lastname"
                  name="lastName"
                  value={val.lastName}
                  onChange={textChange}
                  fullWidth
                  margin="normal"
                  error={Boolean(errors.lastName)}
                  helperText={errors.lastName}
                />
                <TextField
                  id=""
                  label="email"
                  name="email"
                  type="email"
                  value={val.email}
                  onChange={textChange}
                  fullWidth
                  margin="normal"
                  error={Boolean(errors.email)}
                  //!!error={!!errors.email} --  alternative Double Negotiation
                  helperText={errors.email}
                />
                <TextField
                  id=""
                  label="Password"
                  name="password"
                  type="password"
                  value={val.password}
                  onChange={textChange}
                  fullWidth
                  margin="normal"
                  error={Boolean(errors.password)}
                  //!!error={!!errors.email} --  alternative Double Negotiation
                  helperText={errors.password}
                />
                <span>
                  <Typography variant="h6" sx={{ font: "icon" }}>
                    Already have a Account
                  </Typography>
                  <NavLink to="/login">Login </NavLink>
                </span>

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
          </div>
        </Box>
      {/* </Box> */}
    </>
  );
}

export default Signup;
