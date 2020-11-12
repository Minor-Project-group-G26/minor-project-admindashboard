import React,{ useRef, useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import { Grid, makeStyles, TextField, Button } from "@material-ui/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

const useStyle = makeStyles((theme) => ({
  
  root: {
    flexGrow: 1,
  },
  search: {
    marginTop: "-1rem",
    
    minWidth: "80%"
  },
  mobileGrid : {
    Width: "90%",
    margin: " 0 auto",
    // ["@media (max-width: 780px)"]:{
    //   margin: "1rem 0"
    // }
  },
  header:{
    position: 'fixed',
    top:'0',
    left: '0',
    width: '100%',
    padding: '1.5rem 1rem',
    backgroundColor: 'rgb(24, 23, 23)',
    color: 'rgba(100, 98, 98, 0.884)',
    borderTop: '4px solid #f50057',
    zIndex: 1000
  },
  logo:{
    textAlign: 'center',
    color: '#e5e5e5',
    fontWeight: 700,
    fontStyle: 'oblique',
    fontSize: '1.5rem',
    letterSpacing: '1.5px',
    fontFamily: "Roboto",
    border: '1px solid #ffffff73',
    padding: '0.2rem',
    borderRadius: '40px',
    cursor: 'default'
  },
  navList:{
    ["@media(max-width: 780px)"]:{
      flexDirection: "column",
      justifyContent: 'center'
    },
    display: 'flex',
    flexFirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    
  },
  navOption: {
    textAlign: 'center',
    textDecoration: 'none',
    listStyle: 'none',
    margin: '0 0.75rem',
    fontSize: '20px',
    fontWeight: 700,
    letterSpacing: '1.2px',
    transition: 'color 650ms ease',
    cursor: 'pointer',
    color: 'grey',
    "&:hover":{
      color: '#b40c47 !important',
    },
  },
  navSearch:{
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBox:{
    width:'100%',
    // "&:first-child":{
      // width: '80%',
      // margin: '0 auto',
    // },
  },
  searchInput:{
    marginTop: '- 1rem',
    "&::after":{
      content: "",
      padding: '1rem',
      border: '2px solid #333',
    }
  },
  mobOption:{
    display:'none',
    // ['@media (min-width:780px)']: {
    //   display: 'none'
    // },
    ['@media (max-width:780px)']: {
      display: 'block',
    }
  },
  nav:{
    // eslint-disable-line no-useless-computed-key
    display: 'block',

    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
      display: 'none',
    }
  },
  box:{
    width:'100%',
    ['@media (max-width:515px)']: { // eslint-disable-line no-useless-computed-key
      margin: '0.25rem auto',
    },
  },
  logoBox:{
    ['@media (max-width:515px)']: { // eslint-disable-line no-useless-computed-key
      marginTop: '4rem',
    }   
  },
  

}))

function Navbar() {
  const search = useRef(null)
  const [LoginUser, setLoginUser] = useState(false);
  
  const classes = useStyle();
  
  const mobileMenuHandler = e =>{
    if(document.querySelector('nav').style.display === "none"){
      document.querySelector('nav').style.display = "block";
      // document.getElementById('mob-logo').style.display = "none";
      
    }else{
      document.querySelector('nav').style.display = "none";
      // document.getElementById('mob-logo').style.display = "block";
      
    }
  }

  const searchHandler = () =>{
    console.log(search.current.value)
  }
  
  const LoginlinkHandler = () =>{
    if(LoginUser)
    return(<NavLink exact to='/user/profile' className={classes.navOption} activeClassName = 'active'>Profile</NavLink>)
    return(<NavLink exact to='/user/signup' className={classes.navOption} activeClassName = 'active'>Signup</NavLink>)
  }
  useEffect(() => {
    const token = localStorage.getItem('USER_TOKEN');
    const email = localStorage.getItem('USER_EMAIL');
    console.log(LoginUser);
    if(token && email){
      setLoginUser(true);
    }
    return ()=> {setLoginUser(false);}
  },[LoginUser])

    return (
      <header className={classes.header}>
      <div className={classes.mobOption}>
        <Grid container className={classes.root} justify="space-between" spacing={2}>
          <Grid item lg={6}>
            
          </Grid>
          <Grid item lg={6}>
            <Button onClick={mobileMenuHandler} variant="contained" color="secondary"><FontAwesomeIcon icon={faBars} size={"lg"} /></Button>
          </Grid>
        </Grid>
      </div>
      <nav>
        <Grid container className={classes.root} spacing={2}  >
          <Grid className={classes.box} item lg={2} md={2} sm={12}>
            <h1 className={classes.logo}>Humpty Dumpty</h1>
          </Grid>

          <Grid className={(classes.box, classes.navBox)} item lg={6} md={6} sm={12}>
            <div className="nav__menu">
              <ul className={classes.navList}>
                <li>
                  <NavLink exact to='/' className={classes.navOption} activeClassName = 'active'>Home</NavLink>
                </li>
                <li>
                  <NavLink exact to='/category' className={classes.navOption} activeClassName = 'active'>Category</NavLink>
                </li>
                <li>
                  <NavLink exact to='/plan' className={classes.navOption} activeClassName = 'active'>Plan</NavLink>
                </li>
                <li>
                  {LoginlinkHandler()}
                </li>
                
              </ul>
            </div>
          </Grid>

          <Grid item lg={4} className={classes.mobileGrid} md={4} sm={12}>
            <Grid container className={classes.navSearch}>
              <Grid item sm={9} xs={10} className={classes.box}>
                <TextField variant="filled"

                  InputLabelProps={{ style: { color: '#ffffff73', width: "80%" },  }}
                  InputProps={{ style: { color: "#eee" }} }
                  fullWidth={true}
                  className={classes.search}
                  inputRef = {search}
                  label="Movie Name..." />
              </Grid>
              <Grid item sm={3} xs={2} className={classes.box}>
                <Button onClick={searchHandler} variant="contained" color="secondary"><FontAwesomeIcon icon={faSearch} size={"lg"} /></Button>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </nav>
      
    </header>
    )
}

export default Navbar
