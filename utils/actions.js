import { useEffect, useState } from "react";
import { app } from "./firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(app);

//registrar usuario

export const registerUser = async (email, password) => {
  if (email && password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("obtuviste un error", error.message);
    }
  }
};
//fin registrar usuario

//Iniciar sesion

export const loginUser = async (email, password) => {
  if (email && password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("obtuviste un error: ", error.message)
    }
  }
};

//fin Iniciar sesion

// observador de estado de autenticación y obténer datos del usuario si esta logueado
export const isUserLoggedAuthChaged = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.log("usuario: ", user);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsub;
  }, []);
  return { user };
};
//fin observador de estado de autenticación y obténer datos del usuario si esta logueado

//cerrar sesion
export const closeSession = () => {
  getAuth().signOut(auth);
};
//fin cerrar sesion
