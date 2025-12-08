import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Snackbar from "@mui/material/Snackbar";

function App() {
  const [form, setForm] = useState({
    fullname: "",
    lastname: "",
    email: "",
    checkfield: ""
  });
  const [open, setOpen] = useState(false)

  const [errors, setErrors] = useState({});

  // 🎯 Step 1: Define custom rules PER FIELD
  const validationRules = {
    fullname: {
      required: true,
      min: 3,
      max: 10,
      requiredMsg: "Full Name is required",
      minMsg: "Full Name must be at least 3 characters",
      maxMsg: "Full Name cannot exceed 10 characters"
    },
    lastname: {
      required: true,
      min: 3,
      max: 15,
      requiredMsg: "Last Name is required",
      minMsg: "Last Name must be at least 3 characters",
      maxMsg: "Last Name cannot exceed 15 characters"
    },
    email: {
      required: false, // you said email is optional
      min: 5,
      requiredMsg: "",
      minMsg: "Email must have at least 5 characters"
    },
    checkfield: {
      required: true,
      min: 3,
      requiredMsg: "This field is required",
      minMsg: "Enter minimum 3 characters"
    }
  };

  // 🎯 Step 2: Run validation for a single field
  const validateField = (name, value) => {
    const rule = validationRules[name];
    let msg = "";

    if (rule.required && !value.trim()) {
      msg = rule.requiredMsg;
    } else if (value.trim().length < rule.min) {
      msg = rule.minMsg;
    } else if (rule.max && value.trim().length > rule.max) {
      msg = rule.maxMsg;
    }

    setErrors((prev) => ({ ...prev, [name]: msg }));
  };

  // 🎯 Step 3: Update values and validate while typing
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });

    validateField(name, value);
    setOpen(false);
  };


  // 🎯 Step 4: Validate ALL fields on submit
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    Object.keys(form).forEach((key) => {
      const rule = validationRules[key];
      const value = form[key].trim();

      if (rule.required && !value) {
        newErrors[key] = rule.requiredMsg;
      } else if (value.length < rule.min) {
        newErrors[key] = rule.minMsg;
      } else if (rule.max && value.length > rule.max) {
        newErrors[key] = rule.maxMsg;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // alert("Form Submitted Successfully!");
      setOpen(true);  
      console.log("Form Data:", form);
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit} style={{ padding: 20 }}>
        <TextField
          label="Full Name"
          name="fullname"
          value={form.fullname}
          onChange={handleChange}
          error={Boolean(errors.fullname)}
          helperText={errors.fullname}
          fullWidth
          margin="dense"
        />

        <TextField
          label="Last Name"
          name="lastname"
          value={form.lastname}
          onChange={handleChange}
          error={Boolean(errors.lastname)}
          helperText={errors.lastname}
          fullWidth
          margin="dense"
        />

        <TextField
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          fullWidth
          margin="dense"
        />

        <TextField
          label="Check Field"
          name="checkfield"
          value={form.checkfield}
          onChange={handleChange}
          error={Boolean(errors.checkfield)}
          helperText={errors.checkfield}
          fullWidth
          margin="dense"
        />
        <Button type="submit" variant="contained" style={{ marginTop: 20 }}  >
          Submit
 </Button>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={() => setOpen(false)}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={() => setOpen(false)}
              severity="success"
              variant="filled"
              icon={<CheckIcon fontSize="inherit" />}
              sx={{backgroundColor:"GrayText"}}
            >
              Form Submitted Successfully!
            </Alert>
          </Snackbar>
       
      </form>


    </>
  );
}

export default App;
