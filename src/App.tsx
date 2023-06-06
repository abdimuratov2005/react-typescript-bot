import { FC, useEffect } from 'react'
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { firebase_config, googleAuthProvider } from "../firebase";
import { getAuth, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { IRoute, unregistered, registered } from './router';

const App:FC = () => {
  const auth = getAuth(firebase_config);
  const [user, setUser] = useState(auth.currentUser);
  const signUp = () => {
    signInWithPopup(auth, googleAuthProvider)
        .then((credentials) => setUser(credentials.user))
        .catch(e => console.error(e))
  }
  useEffect(() => {
    const unsub = auth.onAuthStateChanged(maybeUser => {
      if (maybeUser != null){
        return setUser(maybeUser)
      }
    })
    return unsub
  }, [auth]);
  return(
    <>
      <Header/>
        {
          user != null
            ?
            <Routes>
              {unregistered.map((route: IRoute) =>
                <Route
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                />
              )}
            </Routes>
            :
            <Routes>
              {registered.map((route: IRoute) =>
                <Route
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                />
              )}
            </Routes>
        }
    </>
  )
}

export default App;