import { ThemeProvider } from '@emotion/react';
import { CssBaseline, PaletteMode } from '@mui/material'; //used to provide mui color theme to all components
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar';
import AuthProvider from '../context/authContext';
import { useLocalStorageState } from '../hooks/useLocalStorage';
import { getDesignTokens } from '../themes/theme';
import LandingPage from './landing-page/LandingPage';

const Home = lazy(() => import(/* webpackChunkName: "Home" */ './home/Home'));

const MacroCalculatorPage = lazy(
   () =>
      import(
         /* webpackChunkName: "MacroCalculatorPage" */ './home/macro-calculator-page/MacroCalculatorPage'
      )
);

const SearchPage = lazy(
   () =>
      import(
         /* webpackChunkName: "SearchPage" */ './home/search-page/SearchPage'
      )
);

const UserSettingsPage = lazy(
   () =>
      import(
         /* webpackChunkName: "UserSettingsPage" */ './home/user-profile-page/UserProfilePage'
      )
);

const ForgotPasswordPage = lazy(
   () =>
      import(
         /* webpackChunkName: "ForgotPasswordPage" */ './forgot-password-page/ForgotPasswordPage'
      )
);

const ResetPasswordPage = lazy(
   () =>
      import(
         /* webpackChunkName: "ResetPage" */ './reset-password-page/ResetPasswordPage'
      )
);

const LoginPage = lazy(
   () => import(/* webpackChunkName: "LoginPage" */ './login-page/LoginPage')
);

const SampleFeaturesPage = lazy(
   () =>
      import(
         /* webpackChunkName: "SampleFeaturesPage" */ './sample-features-page/SampleFeaturesPage'
      )
);

const SampleRecipePage = lazy(
   () =>
      import(
         /* webpackChunkName: "SampleRecipePage" */ './sample-features-page/sample-search-page/SampleSearchPage'
      )
);

const SampleCalculatorPage = lazy(
   () =>
      import(
         /* webpackChunkName: "SampleCalculatorPage" */ './sample-features-page/sample-app-calculator-page/SampleCalculatorPage'
      )
);

const NoPageFound = lazy(
   () => import(/* webpackChunkName: "NoPageFound" */ './404-page/404')
);

export const ColorModeContext = React.createContext({
   //eslint-disable-next-line
   toggleColorMode: () => {},
});

export const App = () => {
   const [mode, setMode] = useLocalStorageState('mode', 'dark');
   const colorMode = React.useMemo(
      () => ({
         toggleColorMode: () => {
            // The dark mode switch would invoke this method
            localStorage.setItem('mode', mode === 'light' ? 'dark' : 'light');
            setMode((prevMode: PaletteMode) =>
               prevMode === 'light' ? 'dark' : 'light'
            );
         },
      }),
      []
   );

   let theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
   theme = responsiveFontSizes(theme);

   return (
      <>
         <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
               <CssBaseline />

               <AuthProvider>
                  <NavBar />

                  <Suspense fallback={<></>}>
                     <Routes>
                        <Route path='/' element={<LandingPage />} />
                        <Route path='/login' element={<LoginPage />} />
                        <Route
                           path='/account-recovery'
                           element={<ForgotPasswordPage />}
                        />
                        <Route
                           path='/passwordReset'
                           element={<ResetPasswordPage />}
                        />
                        <Route path='/home/*' element={<Home />}>
                           <Route path='search' element={<SearchPage />} />
                           <Route
                              path='macrocalculator'
                              element={<MacroCalculatorPage />}
                           />
                           <Route
                              path='settings'
                              element={<UserSettingsPage />}
                           />
                        </Route>

                        <Route
                           path='/macro-trainer-features/*'
                           element={<SampleFeaturesPage />}
                        >
                           <Route
                              path='search'
                              element={<SampleRecipePage />}
                           />
                           <Route
                              path='calculator'
                              element={<SampleCalculatorPage />}
                           />
                        </Route>

                        <Route path='*' element={<NoPageFound />} />
                     </Routes>
                  </Suspense>
               </AuthProvider>
            </ThemeProvider>
         </ColorModeContext.Provider>
      </>
   );
};
