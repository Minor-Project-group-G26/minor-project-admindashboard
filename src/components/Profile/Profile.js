import React,{ useEffect, useState } from 'react'
import './Profile.css';
import { Grid, Avatar,TextField, Button,  FormHelperText, FormControl, makeStyles} from '@material-ui/core'
import { Save,Edit } from '@material-ui/icons'
const useStyle = makeStyles((theme) =>({
    '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
        span:{
            color:'#fff'
        }
    },
    inputField:{
        width: '80%'
    },
    button: {
        margin: theme.spacing(1),
    },
    root:{
        padding: '3rem 2rem',
        marginTop: '5rem',
        minHeight: '100vh',
        color:'#eee',
    }, 
    left:{
        backgroundColor: '#333',
        padding:'2rem',
        borderRadius: '20px',
    },
    leftImg:{
        margin: '1rem 2rem',
    },
    leftInput:{
        opacity: '0',
        position: 'absolute',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        outline: 'none',
    },
    Avatar:{
        pointerEvents: 'none',
        width: theme.spacing(12),
        height: theme.spacing(12),
        // pointerEvents: 'none'
    },
    plan:{
        color: '#fff',
        textAlign: 'center',
    },
    planType:{
        margin: '2rem auto',
        '@global': {
        span:{
            color:'#fff'
        }
    },
    },
    planHeader:{
        
        fontSize:  '24px',
        fontWeight: 600,
        fontFamily: "Roboto",
        fontStyle: 'italic',
        color : '#eb5a06',
        
        
    },
    planDate:{
        margin: '1rem 0',
        fontFamily: 'monospace',
    },
    planDateText:{
        '&:nth-child(2)':{
            fontWeight: 400,
            color: '#eb5a06',
        }
    },
    detail:{
        backgroundColor: 'rgba(11, 11, 12, 0.692)',
        padding: '2rem',
        borderRadius: '20px',
    },
    detailDate:{
        margin: '3rem auto'
    },
    header:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    }
}))

function Profile() {
    const classes = useStyle();
    const [save, setSave] = useState(true); 
    // const [User, setUser] = useState({
    //     name: "",
    //     password:"",
    //     email:"",
    //     phone:"",
    //     startDate:"",
    //     expireDate: "",
    //     plan:""
    // });
    const LogInCheck = () =>{
        if(localStorage.getItem("USER_TOKEN") && localStorage.getItem("USER_EMAIL"))
        return true;
        return false;
    }
    const LogoutHandler = () =>{
        localStorage.clear();
        window.location.reload();
      }

    useEffect(() => {
        // if(!LogInCheck())
        // return window.location.replace("http://localhost:3000/user/signin");
    }, [save])

    const CheckEdit = ()=>{
        if(save)
        return (<Button
            variant="contained"
            color="primary"
            size="small"
            onClick={()=> setSave(false)}
            className={classes.button}
            startIcon={<Edit />}
        >
            Edit
        </Button>)
        return (<Button
            variant="contained"
            color="primary"
            size="small"
            onClick={()=> setSave(true)}
            className={classes.button}
            startIcon={<Save />}
        >
            Save
        </Button>)
    }
    return (
        <main className={classes.root}>
            <Grid container justify='space-around' className="profile__container">
                <Grid item className={classes.left}>
                    <div className="profie__image">
                        <h2 style={{textAlign: 'center'}}>Profile</h2>
                        <div className={classes.leftImg}>
                            <input type="file" className={classes.leftInput} value="" name="" id=""/>
                            <Avatar className={classes.Avatar}>A</Avatar>
                        </div>
                       
                    </div>
                    <div className={classes.plan}>
                        <div className={classes.plan}>
                            <h2>Plan</h2>
                            <h2>129&#8377;/Month</h2>
                        </div>
                        <div className={classes.planDate}>
                            <h2 className={classes.planHeader}>Start Date</h2>
                            <h2>01/01/2021</h2>
                        </div>
                        <div className={classes.planDate}>
                            <h2 className={classes.planHeader}>Expire Date</h2>
                            <h2>31/01/2021</h2>
                        </div>
                    </div>
                </Grid>
                <Grid item>
                    <div className={classes.header}>
                        <h2>User: Ankur@gmail.com</h2>
                        <div>
                        {CheckEdit()}
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={LogoutHandler}
                            className={classes.button}
                        >
                            Logout
                        </Button>
                        </div>
                    </div>
                    <Grid container className={classes.detail}>
                        <Grid sm={6} xs={12} className={classes.detailDate}>
                            <FormControl className={classes.inputField} >
                                <TextField id="name" fullWidth
                                type='text'
                                required
                                
                                // error = {(NewUserError.phone).length > 0? true: false}
                                disabled={save}
                                // onChange={SignupInputHandler}
                                InputProps={{ style: { backgroundColor: '#333', color: '#fff' }}}
                                InputLabelProps={{ style: { color: '#8c8c8c' } }}
                                aria-describedby="name-error-text"
                                label="Name" variant="filled" />
                                <FormHelperText id='name-error-text'>  </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid sm={6} xs={12} className={classes.detailDate}>
                            <FormControl className={classes.inputField} >
                                <TextField id="email" fullWidth
                                type='text'
                                disabled
                                required
                                // error = {(NewUserError.phone).length > 0? true: false}

                                // onChange={SignupInputHandler}
                                InputProps={{ style: { backgroundColor: '#333', color: '#fff' } }}
                                InputLabelProps={{ style: { color: '#8c8c8c' } }}
                                aria-describedby="email-error-text"
                                label="Email" variant="filled" />
                                <FormHelperText id='email-error-text'>  </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid sm={6} xs={12} className={classes.detailDate}>
                            <FormControl className={classes.inputField} >
                                <TextField id="phone" fullWidth
                                type='text'
                                disabled={save}
                                required
                                // error = {(NewUserError.phone).length > 0? true: false}
                                // onChange={SignupInputHandler}
                                InputProps={{ style: { backgroundColor: '#333', color: '#fff' } }}
                                InputLabelProps={{ style: { color: '#8c8c8c' } }}
                                aria-describedby="phone-error-text"
                                label="Phone" variant="filled" />
                                <FormHelperText id='phone-error-text'>  </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid sm={6} xs={12} className={classes.detailDate}>
                            <FormControl className={classes.inputField} >
                                <TextField id="password" fullWidth
                                type={save? "password": "text"}
                                value="sadas"

                                required
                                // error = {(NewUserError.phone).length > 0? true: false}
                                disabled={save}
                                // onChange={SignupInputHandler}
                                InputProps={{ style: { backgroundColor: '#333', color: '#fff' } }}
                                InputLabelProps={{ style: { color: '#8c8c8c' } }}
                                aria-describedby="password-error-text"
                                label="Password" variant="filled" />
                                <FormHelperText id='password-error-text'>  </FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </main>
    )
}

export default Profile
