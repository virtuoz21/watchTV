import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const PrivateRoute = ({ children }) => {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [user, setUser] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      setCheckingAuth(false);
    });
    return () => unsubscribe();
  }, []);
  if (checkingAuth) {
    return <div>Loading...</div>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/auth/register" />;
  }
};

export default PrivateRoute;
