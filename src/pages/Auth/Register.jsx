// import React, { useEffect, useState } from "react";
// import { Button, Paper, TextField } from "@mui/material";
// import Icon from '../../images/logo.png';
// import { useDispatch, useSelector } from "react-redux";
// import { handleRegistration } from "../../store/AuthSlice";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//     const [fullName, setFullName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const loading = useSelector((state) => state.auth.loading);
//     const dispatch = useDispatch();
//     const token = useSelector((state) => state.auth.token);
//     const navigate = useNavigate();

//     useEffect(() => {
//         if(token) {
//             navigate("/home");
//         }
//     }, [token, navigate])

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         const data = {
//             fullName,
//             email,
//             password,
//         };

//         dispatch(handleRegistration(data))
//     }
//     return(
//       <Paper sx={{padding:'50px', backgroundColor:'black', width:'15%'}}>
//         <form style={{display:'flex', flexDirection:'column', gap:'10px'}} onSubmit={handleFormSubmit}>
//             <img src={Icon} alt="watchit" style={{width:'100%'}}/>
//             <h1 style={{color:'white', textAlign:'center'}}>Registration</h1>
//             <TextField
//             type="text"
//             placeholder="Name"
//             onChange={(e) => setFullName(e.target.value)}
//             name="fullName"
//             sx={{backgroundColor:'#313131', '& input': { color: 'white' }}}
//             helperText={fullName.length < 5 ? 'Too short' : ""}
//             />
//             <TextField
//             type="email"
//             placeholder="Email"
//             onChange={(e) => setEmail(e.target.value)}
//             name="email"
//             sx={{backgroundColor:'#313131', '& input': { color: 'white' }}}
//             />
//             <TextField
//             type="password"
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//             name="password"
//             sx={{backgroundColor:'#313131', '& input': { color: 'white' }}}
//             />
//             <Button
//             type="submit"
//             sx={{color:'red'}}
//             disabled = {loading}
//             >
//                 Register
//             </Button>
//         </form>
//       </Paper>
//     );
// };

// export default Register;

import React, { useState } from "react";
import "./register.css";
import Icon from "../../images/logo.png";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../../firebase";

const AuthForm = () => {
  const auth = getAuth(app);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("sign-up");

  const switchTab = (tab) => {
    setActiveTab(tab);
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSignUp = async (e) => {
    if (e) {
      e.preventDefault();
    }

    if (password !== confirmPassword) {
      window.alert("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: fullName,
      });

      console.log(fullName);
      navigate("/home");
    } catch (error) {
      const errorMessage = error.message;
      window.alert(errorMessage);
    }
  };

  const handleSignIn = (e) => {
    if (e) {
      e.preventDefault();
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
      })
      .catch((error) => {
        const errorMessage = error.message;
        window.alert(errorMessage);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === "sign-up") {
      handleSignUp(e);
    } else {
      handleSignIn(e);
    }
  };

  return (
    <div className="cont_principal">
      <div
        className={`cont_centrar ${
          activeTab === "sign-up" ? "cent_active" : ""
        }`}
      >
        <img src={Icon} style={{ textAlign: "center", width: "100%" }} />
        <div className="cont_login">
          <form onSubmit={handleSubmit}>
            <div className="cont_tabs_login">
              <ul className="ul_tabs">
                <li className={activeTab === "sign-in" ? "active" : ""}>
                  <a href="#" onClick={() => switchTab("sign-in")}>
                    SIGN IN
                  </a>
                  <span className="linea_bajo_nom"></span>
                </li>
                <li className={activeTab === "sign-up" ? "active" : ""}>
                  <a href="#" onClick={() => switchTab("sign-up")}>
                    SIGN UP
                  </a>
                  <span className="linea_bajo_nom"></span>
                </li>
              </ul>
            </div>
            <div className="cont_text_inputs">
              <input
                type="text"
                className={`input_form_sign d_block active_inp ${
                  activeTab === "sign-up" ? "with-animation" : ""
                }`}
                placeholder="NAME"
                name={fullName}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              {activeTab === "sign-up" && (
                <>
                  <input
                    type="text"
                    className="input_form_sign d_block active_inp with-animation"
                    placeholder="EMAIL"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    className="input_form_sign d_block active_inp with-animation"
                    placeholder="PASSWORD"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    className="input_form_sign d_block active_inp with-animation"
                    placeholder="CONFIRM PASSWORD"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </>
              )}
              {activeTab === "sign-in" && (
                <>
                  <input
                    type="text"
                    className="input_form_sign d_block active_inp with-animation"
                    placeholder="EMAIL"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    className="input_form_sign d_block active_inp with-animation"
                    placeholder="PASSWORD"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              )}
              <a href="#" className="link_forgot_pass d_block">
                Forgot Password ?
              </a>
            </div>
            <div className="cont_btn">
              <button className="btn_sign" type="submit">
                {activeTab === "sign-in" ? "SIGN IN" : "SIGN UP"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
