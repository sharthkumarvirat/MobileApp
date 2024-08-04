import React, { useState, Suspense } from 'react';
import { Box, Container, InputAdornment, Link, Stack, Typography, Grid, IconButton, Button, Slider } from '@mui/material';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdOutlineLock } from "react-icons/md";
import { TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { FaRegEyeSlash } from "react-icons/fa";
import { PiNotePencilDuotone } from 'react-icons/pi';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

// Lazy load the LuImagePlus icon
const LuImagePlus = React.lazy(() => import('react-icons/lu').then(module => ({ default: module.LuImagePlus })));

export default function MyProfile() {
    const { handleSubmit, control, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Container className='mt-3'>
            {/* slick-carousel */}
            <Grid container spacing={6}>
                <Grid item xs={12} md={8}>
                    <Stack spacing={3}>
                        <div className='border border-black rounded py-5'>
                            {/* Assuming you have your slider component here */}
                            <Slider>
                            {/* Your slider items */}
                            {/* <div>Slide 1</div> */}
                            {/* <div>Slide 2</div> */}
                            {/* <div>Slide 3</div> */}
                            </Slider>
                        </div>
                        <Grid container>
                            <Grid item xs={12} md={4}>
                                <Suspense fallback={<div>Loading...</div>}>
                                    <LuImagePlus size={200} />
                                </Suspense>
                            </Grid>

                            <Grid item xs={12} md={8}>
                                <TextField
                                    required
                                    label="Residence Name"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                                <Box position="relative" width="100%">
                                    <TextField
                                        label="Address"
                                        multiline
                                        required
                                        rows={4}
                                        variant="outlined"
                                        margin="normal"
                                        style={{ width: "100%" }}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end" style={{ marginTop: -90, marginRight: -8 }}>
                                                    <PiNotePencilDuotone size={20} />
                                                    <Link href="#" variant="body1" underline="none" style={{ marginLeft: 4 }}>Edit</Link>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box
                        height='auto'
                        width='2/3'
                        sx={{ border: '2px solid grey', borderRadius: 2, padding: 2 }}
                        // textAlign='center'
                    >
                        <div className='flex flex-col gap-2 items-center justify-center mb-4' >
                            <MdOutlineLock size={150} />
                            <Typography variant="h6"  className='!text-blue-400'>CHANGE PASSWORD</Typography>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Controller
                                        name="currentPassword"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                label="Current Password"
                                                variant="outlined"
                                                fullWidth
                                                type={showPassword ? "text" : "password"}
                                                error={!!errors.currentPassword}
                                                helperText={errors.currentPassword ? 'Current Password is required' : ''}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={() => setShowPassword(!showPassword)}
                                                                onMouseDown={(e) => e.preventDefault()}
                                                            >
                                                                {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        )}
                                        rules={{ required: true }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Controller
                                        name="newPassword"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                label="New Password"
                                                variant="outlined"
                                                fullWidth
                                                type={showPassword ? "text" : "password"}
                                                error={!!errors.newPassword}
                                                helperText={errors.newPassword ? 'New Password is required' : ''}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={() => setShowPassword(!showPassword)}
                                                                onMouseDown={(e) => e.preventDefault()}
                                                            >
                                                                {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        )}
                                        rules={{ required: true }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Controller
                                        name="confirmPassword"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                label="Confirm Password"
                                                variant="outlined"
                                                fullWidth
                                                type={showPassword ? "text" : "password"}
                                                error={!!errors.confirmPassword}
                                                helperText={errors.confirmPassword ? 'Confirm Password is required' : ''}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={() => setShowPassword(!showPassword)}
                                                                onMouseDown={(e) => e.preventDefault()}
                                                            >
                                                                {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        )}
                                        rules={{ required: true }}
                                    />
                                </Grid>
                                <Grid item xs={12} display="flex" justifyContent="flex-end">
                                    <Button variant="outlined" color="primary" type="submit" size='large' className='rounded-pill shadow-none'>
                                        Confirm
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Container >
    );
}
