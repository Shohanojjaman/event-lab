import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../../../.firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  /**
   * This function use to register a with firebase.
   * @param {string} email - User's email
   * @param {*} password - User's password
   * @returns A new user
   */
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result))
      .catch((err) => console.error(err));
  };

  /**
   * This function use to login a already registered user.
   * @param {string} email - Email field value
   * @param {*} password - Password field value
   * @returns Log in user
   */
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };
  const githubLogIn = () => {
    return signInWithPopup(auth, githubProvider)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  /**
   * This function use to update user's profile.
   * @param {string} displayName - Name field value
   * @param {string} photoURL - Photo URL field value
   * @returns Update user's profile
   */
  const updateUser = (displayName, photoURL) => {
    return updateProfile(user, {
      displayName: displayName,
      photoURL: photoURL,
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  /**
   * This function use to Logout user for this app.
   * @returns LogOut a user
   */
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const authInfo = {
    user,
    createUser,
    logIn,
    logOut,
    updateUser,
    googleLogIn,
    githubLogIn,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContextProvider;
