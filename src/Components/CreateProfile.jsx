import React, { lazy, Suspense, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DialogContentText, Grid, Stack, styled, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Controller, useForm } from 'react-hook-form';

const MdDeleteIcon = lazy(() => import('react-icons/md').then(module => ({ default: module.MdDelete })));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function CreateProfile() {
    const items = [
        {
            id: '1',
            content: "Application 1",
        },
        {
            id: '2',
            content: "Application 2",
        }, {
            id: '3',
            content: "Application 3",
        },
        {
            id: '4',
            content: "Application 4",
        },
        {
            id: '5',
            content: "Application 5",
        },
        {
            id: '6',
            content: "Application 6",
        }
    ]
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [Dopen, setDopen] = useState(false);

    const handleClickDopen = () => {
        console.log('hiii');

        setDopen(true);
    };

    const handleDclose = () => {
        setDopen(false);
    };

    return (
        <div className='overflow-x-hidden w-full' >
            <Stack direction={'row'} justifyContent={'end'} mb={3}  >
                <React.Fragment>
                    <Button variant="outlined" className='!bg-orange-500 !text-white' onClick={handleClickOpen}>
                        CreateApp
                    </Button>
                </React.Fragment>
            </Stack>
            <Grid container spacing={3} p={4}>
                {items.map((item) => (
                    <Grid item xs={12} sm={3} md={4} key={item.id}>
                        <Card sx={{ maxWidth: 300 }}>
                            <Stack direction={'row'} justifyContent={'end'} alignItems={'center'}>
                                <CardActions>
                                    <Button onClick={handleClickOpen}>
                                        edit
                                    </Button>
                                    {/* <Button size="small"><MdDelete size={25} /></Button> */}
                                    <React.Fragment>
                                        <Suspense>
                                            <Button size='small' onClick={handleClickDopen}>
                                                <MdDeleteIcon size={25} />
                                            </Button>
                                        </Suspense>
                                    </React.Fragment>

                                </CardActions>
                            </Stack>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.content}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {/* Add any additional text here if needed */}
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                ))}
            </Grid>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Modal title
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <ModelContent />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions>
            </BootstrapDialog>

            <Dialog
                open={Dopen}
                onClose={handleDclose} >

                <IconButton
                    aria-label="close"
                    onClick={handleDclose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogTitle >Delete</DialogTitle >
                <DialogContent>
                    <DialogContentText>
                        <DeleteContent />
                    </DialogContentText>
                </DialogContent>
            </Dialog>

        </div>
    )
}
const ModelContent = () => {
    const { handleSubmit, control, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
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
                                    error={!!errors.currentPassword}
                                    helperText={errors.currentPassword ? 'Current Password is required' : ''}
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

                                    error={!!errors.newPassword}
                                    helperText={errors.newPassword ? 'New Password is required' : ''}
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
                                    error={!!errors.confirmPassword}
                                    helperText={errors.confirmPassword ? 'Confirm Password is required' : ''}
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
        </div>
    )
}

const DeleteContent = () => {
    return (
        <div className='m-2 p-4'>
            <Typography variant='body1' mb={2} > Are sure you want to delete</Typography>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-around'}>
                <Button size='small' variant='outlined' className='!text-white hover:!bg-red-600'>
                    Yes
                </Button>
                <Button size="small" variant='outlined' className='!text-white hover:!bg-green-600'>No</Button>
            </Stack>
        </div>
    )
}