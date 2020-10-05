import { useState, useEffect } from 'react';
//import fetch from 'isomorphic-unfetch';
import { fetchUser, User } from '../src/requests/fetchUser'

// Use a global to save the user, so we don't have to fetch it again after page navigations
interface UserState {
  user: User
  loading: boolean
}

let userState: UserState;

// const User = React.createContext({ user: null, loading: false });

// export const fetchUser = async () => {
//   if (userState !== undefined) {
//     return userState;
//   }

//   const res = await fetch('/api/user');
//   userState = res.ok ? await res.json() : null;
//   return userState;
// };

// export const UserProvider = ({ value, children }) => {
//   const { user } = value;

//   // If the user was fetched in SSR add it to userState so we don't fetch it again
//   React.useEffect(() => {
//     if (!userState && user) {
//       userState = user;
//     }
//   }, []);

//   return <User.Provider value={value}>{children}</User.Provider>;
// };

//export const useUser = () => React.useContext(User);

export const useFetchUser = () => {
  const [data, setUser] = useState({
    user: userState || null,
    loading: userState === undefined
  });

  useEffect(() => {
    let isMounted = true

    if (userState !== undefined) {
      return;
    }

    fetchUser().then((user) => {
      // Only set the user if the component is still mounted
      if (isMounted) {
        setUser({ user, loading: false })
      }
    })

    return () => {
      isMounted = false
    }
  }, [userState])

  return data;
};