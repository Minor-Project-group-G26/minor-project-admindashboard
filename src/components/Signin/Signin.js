import { TextField, Button, Checkbox, FormControlLabel, withStyles, makeStyles, FormHelperText, FormControl } from '@material-ui/core'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Signin.css'
import { grey } from '@material-ui/core/colors';
import Axios from 'axios';
import { signStyle } from './Style';
// material ui stylesheet


// custom stylesheet for check-box
const GreyCheckbox = withStyles({
    root: {
        color: grey[400],
        '&$checked': {
            color: grey[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);


//............Sign Up Form Handler


//....................................main Function
function Signin() {
    //............... state/variable initialization 
    const classes = signStyle()
    // check-box state
    const [state, setState] = useState({

        TC: false,
    });
    // New user state
    const [newUser, setNewUser] = useState({
        email: '',
        password: '',
        
    })
    const [error, setError] = useState("")

    //........ ....... StateHandle
    // check-box handler
    const handleChange = (event) => {
        setState({ TC: event.target.checked });
    };
    // new user form input handler
    const SignupInputHandler = (e) => {
        switch (e.target.id) {
            case "email":
                setNewUser({
                    ...newUser,
                    email: e.target.value
                })
                break;
            case "pass":
                setNewUser({
                    ...newUser,
                    password: e.target.value
                })
                break;
            default:
                break;
        }
    }

    // useEffect(() => {
    //     // document.getElementById;
    //     console.log(newUser);
    //     console.log(error);
    // }, [newUser])

    const SignInFormHandler = (e) =>{
        e.preventDefault()
        console.log(newUser)
        const formdata = new FormData()
        formdata.append("email", newUser.email)
        formdata.append("password", newUser.password)
        Axios.post("http://localhost/demo/signin.php", formdata)
        .then(res => (res.data))
        .then(data => {
            console.log(data);
            const {errors, success} = data;

            if(errors){
                let emailtext = "";
               
                const {email} = errors;
                if(email)
                emailtext = email;
    
                setError(emailtext)
                return false;
            }
            localStorage.setItem('USER_TOKEN', success.token);
            localStorage.setItem('USER_EMAIL', success.email);
            return window.location.href = "http://localhost:3000/";
        })
    }

    return (
        <main>

            <div className={classes.mainForm}>
                <form onSubmit={SignInFormHandler}>
                    <div className={classes.formHeader}>
                        <h1>Sign In</h1>
                    </div>
                    <div className={classes.formMain}>
                        <div className={classes.formInput}>
                        <FormControl fullWidth error={error.length > 0 ? true: false}>
                            <TextField id="email" fullWidth
                                autoComplete='off'
                                required
                                error = {error.length > 0 ? true: false}
                                onChange={SignupInputHandler}
                                InputProps={{ style: { backgroundColor: '#333', color: '#fff' } }}
                                InputLabelProps={{ style: { color: '#8c8c8c' } }}
                                aria-describedby="email-error-text"
                                label="Email" variant="filled" />
                                
                                <FormHelperText id="emai-error-text"> { error } </FormHelperText>
                        </FormControl>
                        </div>
                        <div className={classes.formInput}>
                            <TextField id="pass" fullWidth
                                type="password"
                                required
                                onChange={SignupInputHandler}
                                autoComplete='off'
                                InputProps={{ style: { backgroundColor: '#333', color: '#fff' } }}
                                InputLabelProps={{ style: { color: '#8c8c8c' } }}
                                label="Password" variant="filled" />
                        </div>
                        
                    </div>
                    <div className="form__submit">
                        <div className="option">
                            <FormControlLabel
                                control={<GreyCheckbox checked={ state.TC } onChange={handleChange} name="TC" />}
                                label="Remember me"
                            />
                        </div>
                        <Button variant="contained" fullWidth type='submit'
                            style={{ padding: '0.7rem 0' }} color="secondary" >
                            Sign in
                        </Button>
                    </div>
                </form>
                <div className={classes.login}>
                    <p className={classes.login}>New User! <Link to='/user/signup' className='link' >Sign up</Link></p>
                </div>
            </div>
        </main>
    )
}

export default Signin
