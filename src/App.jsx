import React, { lazy, Suspense, useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import LoadingComponent from './SharedComponents/LoadingComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Lazy load components
const LoginComponent = lazy(() => import('./Components/LoginComponent'));
const RegisterComponent = lazy(() => import('./Components/RegisterComponent'));
const JobPortal = lazy(() => import('./Components/JobPortal'));
const MyProfile = lazy(() => import('./Components/MyProfile'));
const DashbordComponent = lazy(() => import('./Components/DashbordComponent'));
const CreateProfile = lazy(() => import('./Components/CreateProfile'));
const SideBar = lazy(() => import('./SharedComponents/SideBar'));


function App() {
  const [toggleTheme, setToggleTheme] = useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#1A1423',
      },
      primary: {
        main: '#00D2A4',
        contrastText: '#ffffff',
      },
      error: {
        main: '#E36732',
      },
    },
    components: {
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundColor: '#1A1423',
            borderRadius: '12px',
          },
        },
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#f1f5f9',
      },
      primary: {
        main: '#00D2A4',
        contrastText: '#ffffff',
      },
      error: {
        main: '#E36732',
      },
    },
    components: {
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundColor: '#f3f4f6',
            borderRadius: '12px',
          },
        },
      },
    },
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      setIsMobile(/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      
      <ThemeProvider theme={toggleTheme ? darkTheme : lightTheme}>
        <div style={{
          backgroundColor: toggleTheme ? darkTheme.palette.background.default : lightTheme.palette.background.default,
          minHeight: '100vh'
        }}>
          <BrowserRouter basename='/MobileApp'>
            <Suspense fallback={<LoadingComponent />}>
              <Routes>
                <Route path='/login' element={<LoginComponent toggleTheme={toggleTheme} setToggleTheme={setToggleTheme} />} />
                <Route path='/register' element={<RegisterComponent toggleTheme={toggleTheme} setToggleTheme={setToggleTheme} />} />
                <Route element={<SideBar isMobile={isMobile} setIsMobile={setIsMobile} toggleTheme={toggleTheme} setToggleTheme={setToggleTheme} />}>
                 <Route path='/products' element={<JobPortal/>} />
                 <Route path='/profile' element={<MyProfile/>} />
                 <Route path='/dashboard' element={<DashbordComponent toggleTheme={toggleTheme}  isMobile={isMobile} />} />
                 <Route path='/create' element={<CreateProfile/>} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
