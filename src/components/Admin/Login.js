import { FormControl, FormHelperText, Grid, makeStyles, TextField } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles((theme) =>({
    inputField:{
        width: '60%',
        maxWidth: "400px",
    },
    
}))

function Login() {
    const classes = useStyle();
    return (
        <>
             <header>
                <Grid container>
                    
                    <Grid item>
                        <div className="logo">Humpty Dumpty</div>
                    </Grid>
                    
                </Grid>
            </header>
            <main >
                <Grid container>
                    <Grid xs={12} style={{textAlign: 'center'}} item>
                        <FormControl  className={classes.inputField}>
                            <TextField id="email" fullWidth
                                autoComplete='off'
                                required
                                // error = {error.length > 0 ? true: false}
                                // onChange={SignupInputHandler}
                                InputProps={{ style: { backgroundColor: '#333', color: '#fff' } }}
                                InputLabelProps={{ style: { color: '#8c8c8c' } }}
                                aria-describedby="email-error-text"
                                label="Email" variant="filled" />
                                    
                                <FormHelperText id="emai-error-text"> { } </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid xs={12} style={{textAlign: 'center'}} item>
                        <FormControl  className={classes.inputField}>
                            <TextField id="email" fullWidth
                                autoComplete='off'
                                required
                                // error = {error.length > 0 ? true: false}
                                // onChange={SignupInputHandler}
                                InputProps={{ style: { backgroundColor: '#333', color: '#fff' } }}
                                InputLabelProps={{ style: { color: '#8c8c8c' } }}
                                aria-describedby="email-error-text"
                                label="Email" variant="filled" />
                                    
                                <FormHelperText id="emai-error-text"> { } </FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
            </main>
        </>
    )
}

export default Login
