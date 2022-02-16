import { User } from '@firebase/auth-types';
import { createContext, useState, useEffect, useContext } from 'react';

import firebase /*,{ auth }*/ from './firebase';

type AuthContextType = {
  currentUser: User | null;
  login?: () => Promise<void>;
  logout?: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({ currentUser: null });

export const useAuth = () => {
  return useContext(AuthContext);
};

type Props = {
  children?: JSX.Element;
};

// const AuthProvider = ({ children }: Props) => {
//   const [currentUser, setCurrentUser] = useState<User | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   const login = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     return auth.signInWithRedirect(provider);
//   };

//   const logout = () => {
//     return auth.signOut();
//   };

//   useEffect(() => {
//     return auth.onAuthStateChanged((user: User | null) => {
//       setCurrentUser(user);
//       setIsLoading(false);
//     });
//   }, []);
//   const value: AuthContextType = {
//     currentUser,
//     login,
//     logout,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {isLoading ? <p>Loading...</p> : children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
