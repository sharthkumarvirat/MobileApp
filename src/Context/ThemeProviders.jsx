// import { ThemeProvider } from '@emotion/react';
// import { createTheme, CssBaseline } from '@mui/material';
// import React, { createContext, useState } from 'react'

// const ThemeContext = createContext();

// const darkTheme = createTheme({
//     palette: {
//         mode: 'dark',
//         background: {
//             default: '#1A1423'
//         },
//         primary: {
//             main: '#00D2A4',
//             contrastText: '#ffffff'
//         },
//         error: {
//             main: '#E36732'
//         }
//     },
//     components: {
//         MuiDialog: {
//             styleOverrides: {
//                 paper: {
//                     backgroundColor: '#1A1423',
//                     borderRadius: '12px'
//                 }
//             }
//         }
//     }
// });

// const lightTheme = createTheme({
//     palette: {
//         mode: 'light',
//         background: {
//             default: '#f3f4f6'
//         },
//         primary: {
//             main: '#00D2A4',
//             contrastText: '#ffffff'
//         },
//         error: {
//             main: '#E36732'
//         }
//     },
//     components: {
//         MuiDialog: {
//             styleOverrides: {
//                 paper: {
//                     backgroundColor: '#f3f4f6',
//                     borderRadius: '12px'
//                 }
//             }
//         }
//     }
// });
// export default function ThemeProviders({ children }) {

//     const [isDarkTheme, setIsDarkTheme] = useState(false);

//     // Toggle theme function
//     const toggleTheme = () => {
//         setIsDarkTheme((prev) => !prev);
//     };

//     // Use useMemo to avoid unnecessary re-renders
//     const theme = useMemo(() => (isDarkTheme ? darkTheme : lightTheme), [isDarkTheme])

//     return (
//         <ThemeProvider>
//             <CssBaseline />
//             <ThemeContext.Provider value={{ toggleTheme, isDarkTheme }}>
//                 {children}
//             </ThemeContext.Provider>
//         </ThemeProvider>
//     )
// }
