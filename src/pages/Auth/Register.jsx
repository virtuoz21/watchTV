import React, { useEffect, useState } from "react";
import { Button, Paper, TextField } from "@mui/material";
import Icon from '../../images/logo.png';
import { useDispatch, useSelector } from "react-redux";
import { handleRegistration } from "../../store/AuthSlice";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loading = useSelector((state) => state.auth.loading);
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();

    useEffect(() => {
        if(token) {
            navigate("/home");
        }
    }, [token, navigate])
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const data = {
            fullName,
            email,
            password,
        };
        
        dispatch(handleRegistration(data))
    }
    return(
      <Paper sx={{padding:'50px', backgroundColor:'black', width:'15%'}}>
        <form style={{display:'flex', flexDirection:'column', gap:'10px'}} onSubmit={handleFormSubmit}>
            <img src={Icon} alt="watchit" style={{width:'100%'}}/>
            <h1 style={{color:'white', textAlign:'center'}}>Registration</h1>
            <TextField 
            type="text"
            placeholder="Name" 
            onChange={(e) => setFullName(e.target.value)}
            name="fullName" 
            sx={{backgroundColor:'#313131', '& input': { color: 'white' }}} 
            helperText={fullName.length < 5 ? 'Too short' : ""}
            />
            <TextField 
            type="email"
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)}
            name="email" 
            sx={{backgroundColor:'#313131', '& input': { color: 'white' }}} 
            />
            <TextField 
            type="password"
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}
            name="password" 
            sx={{backgroundColor:'#313131', '& input': { color: 'white' }}} 
            />
            <Button 
            type="submit" 
            sx={{color:'red'}}
            disabled = {loading}
            >
                Register
            </Button>
        </form>
      </Paper>
    );
};

export default Register;