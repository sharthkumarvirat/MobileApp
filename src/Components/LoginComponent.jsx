import React, { Fragment, Suspense, useState } from 'react';
import { Button, IconButton, InputAdornment, TextField, Typography, Divider, Stack } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loginlogo from "../assets/loginLogo.jpg";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

// Lazy-loaded icons
const IoEyeOutline = React.lazy(() => import('react-icons/io5').then(module => ({ default: module.IoEyeOutline })));
const IoEyeOffOutline = React.lazy(() => import('react-icons/io5').then(module => ({ default: module.IoEyeOffOutline })));
const FiArrowRight = React.lazy(() => import('react-icons/fi').then(module => ({ default: module.FiArrowRight })));

export default function LoginComponent({ toggleTheme, setToggleTheme }) {
  const { handleSubmit, control, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const notify = () => toast("Login successful!");

  const onSubmit = (data) => {
    console.log(data);
    setTimeout(() => {
      notify();
      navigate('/dashboard');
    }, 200);
  };

  const handleThemeChange = (checked) => {
    setToggleTheme(checked);
  };

  return (
    <div>
      <div className="relative h-dvh">
        <DarkModeSwitch
          checked={toggleTheme}
          onChange={handleThemeChange}
          size={35}
          sunColor="#00D2A4"
          className="absolute top-4 right-4"
        />
        <div className='container flex justify-center items-center h-full'>
          <div className='border-2 rounded-md border-blue-500 p-4 w-auto max-portrait-tab:w-4/6 md:w-4/6 xl:w-3/6 2xl:w-3/6 grid grid-cols-1 lg:grid-cols-2 max-portrait-tab:grid-cols-1'>
            <img src={Loginlogo} alt="Login Logo" className=' p-4 !rounded-3xl' style={{ filter: 'grayscale(0%) brightness(90%)' }} />
            <Stack component={'form'} onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
              <Typography variant="h4" className='text-green-700 !font-semibold'>
                Login
              </Typography>
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
                rules={{ required: "Password is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : null}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Suspense fallback={<div>Loading...</div>}>
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => setShowPassword(!showPassword)}
                              onMouseDown={(e) => e.preventDefault()}
                            >
                              {showPassword ? <IoEyeOutline className='text-green-300' /> : <IoEyeOffOutline className='text-green-300' />}
                            </IconButton>
                          </Suspense>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              <div className='flex justify-center'>
                <Button type='submit' size='small' variant="outlined" className='!rounded-md !border-none !bg-green-900 !text-white hover:!bg-orange-950' endIcon={<Suspense fallback={<div>Loading...</div>}><FiArrowRight /></Suspense>}>
                  Login
                </Button>
              </div>
              <Divider sx={{ marginTop: '10px' }} />
              <Typography variant="body2" align="center" className={`${toggleTheme ? 'text-white' : 'text-black'}`}>
                Don't have an account? <Link to='/register'><Button endIcon={<Suspense fallback={<div>Loading...</div>}><FiArrowRight /></Suspense>} className='!text-sm'>Register here</Button></Link>
              </Typography>
            </Stack>
          </div>
        </div>
      </div>
        <ToastContainer />
    </div>
  );
}
