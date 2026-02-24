import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  TextField,
  Box,
  Typography,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { resetPassword } from "../Servies/Login";

function Resetpassword() {
  // 🔹 Types
  type FormValues = {
    newPassword: string;
    confirmPassword: string;
  };

  // 🔹 Initial form
  const initialForm: FormValues = {
    newPassword: "",
    confirmPassword: "",
  };

  // 🔹 States
  const [form, setForm] = useState<FormValues>(initialForm);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 🔹 Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Validation
  const validate = (): boolean => {
    const newErrors: Partial<FormValues> = {};

    if (!form.newPassword) {
      newErrors.newPassword = "New password is required";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (form.newPassword !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const email = sessionStorage.getItem("resetEmail");
  const data = {
    email,
    newpassword: form.newPassword,
    confirmpassword: form.confirmPassword,
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) return;
    console.log("Password reset success:", form);
    
    try {
      const res = await resetPassword(data);
      console.log("Password reset success", res);

      sessionStorage.removeItem("resetEmail"); // cleanup
      // navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box maxWidth={400} mx="auto" mt={6}>
      <Typography variant="h6" textAlign="center" mb={2}>
        Reset Password
      </Typography>

      <form onSubmit={handleSubmit} noValidate>
        <TextField
          label="New Password"
          name="newPassword"
          type={showPassword ? "text" : "password"}
          value={form.newPassword}
          onChange={handleChange}
          error={Boolean(errors.newPassword)}
          helperText={errors.newPassword ?? ""}
          fullWidth
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          value={form.confirmPassword}
          onChange={handleChange}
          error={Boolean(errors.confirmPassword)}
          helperText={errors.confirmPassword ?? ""}
          fullWidth
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* 🔘 Submit Button */}
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Change Password
        </Button>
      </form>
    </Box>
  );
}

export default Resetpassword;
