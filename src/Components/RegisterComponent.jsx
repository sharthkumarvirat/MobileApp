import React, { Fragment, useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Container, Typography, InputAdornment, IconButton, Box, Divider } from "@mui/material";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function RegisterComponent({ toggleTheme, setToggleTheme }) {
    const [showPassword, setShowPassword] = useState(false);
    const {
        control,
        handleSubmit,
        // reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    const handleThemeChange = (checked) => {
        setToggleTheme(checked);
    };
    return (
        <Fragment>
            <div className="relative h-dvh">
                <DarkModeSwitch
                    checked={toggleTheme}
                    onChange={handleThemeChange}
                    size={35}
                    sunColor="#00D2A4"
                    className="absolute top-4 right-4"
                />
                <div className='container flex justify-center items-center h-full'>
                    <div className='border-2 rounded-md border-blue-500 p-5 w-auto max-portrait-tab:w-4/6 md:w-4/6 xl:w-3/6 2xl:w-2/6  max-portrait-tab:grid-cols-1'>
                        <Typography variant="h4" align="center" gutterBottom className='!text-green-500'>
                            Registration Form
                        </Typography>
                        {/* <Container maxWidth="md"> */}
                        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
                            <Controller
                                name="firstName"
                                control={control}
                                defaultValue=""
                                rules={{ required: "First Name is required" }}
                                required
                                render={({ field }) => (
                                    <TextField
                                        required
                                        {...field}
                                        label="First Name"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        error={!!errors.firstName}
                                        helperText={errors.firstName ? errors.firstName.message : null}
                                    />
                                )}
                            />
                            <Controller
                                name="lastName"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Last Name is required" }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        required
                                        label="Last Name"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        error={!!errors.lastName}
                                        helperText={errors.lastName ? errors.lastName.message : null}
                                    />
                                )}
                            />

                            <Controller
                                name="phoneNumber"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^[0-9]{10}$/, // Example: 10 digits only
                                        message: "Invalid phone number format",
                                    },
                                }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        required
                                        label="Phone Number"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        error={!!errors.phoneNumber}
                                        helperText={
                                            errors.phoneNumber ? errors.phoneNumber.message : null
                                        }
                                    />
                                )}
                            />

                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Invalid email address",
                                    },
                                }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        required
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        error={!!errors.email}
                                        helperText={errors.email ? errors.email.message : null}
                                    />
                                )}
                            />
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                rules={{ required: "password is required" }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        required
                                        label="password"
                                        type="password"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        error={!!errors.password}
                                        helperText={errors.password ? errors.password.message : null}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        onMouseDown={(e) => e.preventDefault()}
                                                    >
                                                        {showPassword ? <IoEyeOutline className='text-green-300' /> : <IoEyeOffOutline className='text-green-300' />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />

                                )}
                            />
                            <Button type="submit" variant="contained" color="primary">
                                Submit
                            </Button>
                        </form>
                        <Box mt={3}>
                            <Divider variant="middle" className='!border-blue-600' />
                        </Box>
                        <Box mt={2}>
                            <Typography className={`${toggleTheme ? 'text-white' : 'text-black'}`}>
                                Already have an account? <Link to='/' ><Button endIcon={<FiArrowRight />} className='!text-sm' >Sign-in </Button> </Link>
                            </Typography>
                        </Box>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
