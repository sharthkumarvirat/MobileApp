import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

export default function LoadingComponent() {
    const [open, setOpen] = React.useState(false);
    // const handleClose = () => {
    //     setOpen(false);
    // };
    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleOpen}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
