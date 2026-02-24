import { TextField, Button, Box, Snackbar, Alert } from "@mui/material";
import React, { useState } from "react";
import { data, useNavigate } from "react-router-dom";
import { forgotPassword } from "../Servies/Login";

type Form = {
  email: string;
};

type Errors = {
  email?: string;
};

function Forgotpassword() {
  const [form, setForm] = useState<Form>({
    email: "",
  });

  const [openSnack, setOpenSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [snacktype, setSnacktype] = useState<
    "success" | "error" | "warning" | "info"
  >("success");
  const [errors, setErrors] = useState<Errors>({});
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors: Errors = {};

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    
    try {
      const data = {
        email: form.email, // MUST MATCH DTO FIELD NAME
      };
      const result = await forgotPassword(data);
      console.log(result);
      if (result?.data?.email !== null) {
        sessionStorage.setItem("resetEmail", form.email);
        setSnacktype("success");
        setSnackMsg("Email is registered");
         setOpenSnack(true);

        setTimeout(() => {
          navigate("/resetpassword");
        }, 1500);
      } else {
        setSnackMsg("Email is not registered");
        setSnacktype("error");
        setOpenSnack(true);
      }
    } catch (error) {}
  };

  return (
    <Box maxWidth={400} mx="auto" mt={5}>
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email ?? ""}
          fullWidth
          margin="normal"
        />

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Send Reset Link
        </Button>
      </form>
      <Snackbar
        open={openSnack}
        autoHideDuration={3000}
        onClose={() => setOpenSnack(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={snacktype} onClose={() => setOpenSnack(false)}>
          {snackMsg}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Forgotpassword;
