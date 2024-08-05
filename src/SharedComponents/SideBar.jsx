import React, { useEffect, useState, Suspense, lazy } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Stack, Tooltip } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { MdCreateNewFolder, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { FaWikipediaW } from 'react-icons/fa';

// Dynamically import the icons
const FaArrowLeft = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaArrowLeft })));
// const FaArrowRight = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaArrowRight })));
const FaHome = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaHome })));
const FaInfoCircle = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaInfoCircle })));
const FaEnvelope = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaEnvelope })));
const FaCog = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaCog })));
const FaQuestionCircle = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaQuestionCircle })));
const CgProfile = lazy(() => import('react-icons/cg').then(module => ({ default: module.CgProfile })));
const FiLogOut = lazy(() => import('react-icons/fi').then(module => ({ default: module.FiLogOut })));
const IoMdMenu = lazy(() => import('react-icons/io').then(module => ({ default: module.IoMdMenu })));

export default function SideBar({ isMobile, setIsMobile, toggleTheme, setToggleTheme }) {
    const [open, setOpen] = useState(true);


    const handleThemeChange = (checked) => {
        setToggleTheme(checked);
    };

    useEffect(() => {
        setOpen(!isMobile);
    }, [isMobile]);

    return (
        <div className="h-screen flex p-2 overflow-hidden">
            <Drawer
                open={open}
                PaperProps={{
                    className: `!z-40 ${open && !isMobile ? '!w-1/6' : open && isMobile ? '!w-4/6' : ''} ${!isMobile ? '!py-2 ps-2 pe-1 !rounded-xl' : ''} !bg-transparent !border-none`
                }}
                className={`${open && !isMobile ? '!w-1/6' : open && isMobile ? '!w-4/6' : ''}`}
                variant={isMobile ? "temporary" : "persistent"}
                anchor="left"
                ModalProps={{ keepMounted: true }}
                onClose={() => setOpen(false)}
            >
                <Stack className={`h-full !w-full bg-[#31c896] ${!isMobile ? 'rounded-xl' : ''}`} justifyContent={"space-between"}>
                    <Stack>
                        {!isMobile && (
                            <Stack className="p-2" direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={4}>
                                <Typography variant="h5" className="text-white !font-bold">
                                    Demo
                                </Typography>
                                <Divider className="!border-white" />
                            </Stack>
                        )}
                        {isMobile && (
                            <Box className='!flex !justify-end'>
                                <Tooltip title="close-menu">
                                    <IconButton onClick={() => { setOpen(!open) }}>
                                        <Suspense >
                                            <FaArrowLeft size={22} />
                                        </Suspense>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        )}
                        <List className='nav' disablePadding>
                            <Stack>
                                <Link to='/dashboard'>
                                    <ListItem>
                                        <ListItemButton className='focus:!bg-[#3d9f80] border-none'>
                                            <ListItemIcon>
                                                <Suspense >
                                                    <FaHome size={25} />
                                                </Suspense>
                                            </ListItemIcon>
                                            <ListItemText primary="Home" />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            </Stack>
                            <Stack>
                                <Link to='/wiki'>
                                    <ListItem>
                                        <ListItemButton className='focus:!bg-[#3d9f80] border-none'>
                                            <ListItemIcon>
                                                <Suspense>
                                                <FaWikipediaW size={25} />
                                                </Suspense>
                                            </ListItemIcon>
                                            <ListItemText primary="Wikipedia" />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            </Stack>
                            <Stack>
                                <Link to='/products'>
                                    <ListItem>
                                        <ListItemButton className='focus:!bg-[#3d9f80] border-none'>
                                            <ListItemIcon>
                                                <Suspense >
                                                    <MdOutlineProductionQuantityLimits size={25} />
                                                </Suspense>
                                            </ListItemIcon>
                                            <ListItemText primary="Products" />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            </Stack>
                            <Stack>
                                <Link to='/profile'>
                                    <ListItem >
                                        <ListItemButton className='focus:!bg-[#3d9f80] !border-0'>
                                            <ListItemIcon>
                                                <Suspense >
                                                    <CgProfile size={25} />
                                                </Suspense>
                                            </ListItemIcon>
                                            <ListItemText primary="Profile" />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            </Stack>
                            <Stack>
                                <Link to='/create'>
                                    <ListItem>
                                        <ListItemButton className='focus:!bg-[#3d9f80] border-none' >
                                            <ListItemIcon>
                                                <Suspense>
                                                    {/* <FaEnvelope size={22} /> */}
                                                    <MdCreateNewFolder size={25} />
                                                </Suspense>
                                            </ListItemIcon>
                                            <ListItemText primary="Create" />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            </Stack>

                            <Stack>
                                <ListItem>
                                    <ListItemButton className='focus:!bg-[#3d9f80] border-none' >
                                        <ListItemIcon>
                                            <Suspense >
                                                <FaQuestionCircle size={25} />
                                            </Suspense>
                                        </ListItemIcon>
                                        <ListItemText primary="Help" />
                                    </ListItemButton>
                                </ListItem>
                            </Stack>
                        </List>
                    </Stack>
                    {!isMobile && (
                        <Stack direction={'row'} justifyContent={'space-around'} alignItems={'center'}>
                            <DarkModeSwitch
                                checked={toggleTheme}
                                onChange={handleThemeChange}
                                size={35}
                                sunColor="#fff"
                            />
                            <Tooltip title="profile">
                                <IconButton>
                                    <Suspense>
                                        <CgProfile size={28} />
                                    </Suspense>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="logout">
                                <Link to='/'>
                                    <IconButton>
                                        <Suspense >
                                            <FiLogOut size={28} />
                                        </Suspense>
                                    </IconButton>
                                </Link>
                            </Tooltip>
                        </Stack>
                    )}
                </Stack>
            </Drawer>
            <Stack className="w-full h-full !overflow-y-auto">
                <AppBar position={open && isMobile ? "static" : "sticky"} className={`${toggleTheme ? '!bg-[#31c896]' : '!bg-[#42c896]'} !rounded-xl ${isMobile ? '!block' : '!hidden'}`}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => { setOpen(!open) }}
                        >
                            <Suspense >
                                <IoMdMenu />
                            </Suspense>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                          Demo
                        </Typography>
                        <Stack direction={'row'} justifyContent={'space-around'} alignItems={'center'} spacing={2}>
                            <DarkModeSwitch
                                checked={toggleTheme}
                                onChange={handleThemeChange}
                                size={35}
                                sunColor="#fff"
                            />
                            <Tooltip title="profile">
                                <IconButton className='!text-white'>
                                    <Suspense >
                                        <CgProfile />
                                    </Suspense>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="logout">
                                <Link to='/'>
                                    <IconButton>
                                        <Suspense >
                                            <FiLogOut size={28} />
                                        </Suspense>
                                    </IconButton>
                                </Link>
                            </Tooltip>
                        </Stack>
                    </Toolbar>
                </AppBar>

                <div className="border-2 rounded-xl  border-red-500 h-full w-full relative overflow-hidden mt-2 md:mt-0 p-2">
                    <div className="h-full overflow-auto !z-40">
                        <Outlet />
                    </div>
                </div>
            </Stack>
        </div>
    );
}
