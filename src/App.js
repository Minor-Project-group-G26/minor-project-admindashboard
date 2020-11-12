import React, { } from 'react'
import Dashboard from './components/Admin/Dashboard'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Signup from './components/Signin/Signup'
import Homepage from './components/Homepage/Homepage'
import BgPoster from './login_bg.jpg'
import Signin from './components/Signin/Signin'
import Category from './components/Homepage/Category'
// import { LinearProgress } from '@material-ui/core'
import Plan from './components/Plan/Plan'
import Profile from './components/Profile/Profile'
import Admin from './components/Admin/Admin'
import Login from './components/Admin/Login'
import { makeStyles } from '@material-ui/core'
import AddMovie from './components/Admin/AddMovie'



const useStyles = makeStyles(theme=>({
  '@global': {
    html: {
      WebkitFontSmoothing: 'auto',
    },
    span:{
        color:'#fff'
    }
  }
}))

function App() {

  // const [spacing, setSpacing] = useState(2);
  const classes = useStyles()
  return (
    <Router>
      <div id='bg'>
        <img className="background" src={BgPoster} alt="background" />
      </div>
      {/* <LinearProgress className='progress__bar' color="secondary" /> */}
        {/* <Login /> */}

        <Switch>
          <Route path='/' exact >
            <Navbar />
            <Homepage />
          </Route>
          <Route path='/category' exact >
            <Navbar />
            <Category />
          </Route>
          <Route path='/plan' exact >
            <Navbar />
            <Plan />
          </Route>
          <Route path='/user/signup'  >
            <Navbar />
            <Signup />
          </Route>
          <Route path='/user/signin' >
            <Navbar />
            <Signin />
          </Route>
          <Route path='/user/profile' >
            <Navbar />
            <Profile />
          </Route>
          <Route exact path='/admin' >
            <Admin />
          </Route>
          <Route path='/admin/dashboard' >
            <Dashboard />
          </Route>
          <Route path='/add' >
            <AddMovie />
          </Route>
        </Switch>
      
      <Footer />
      
    </Router>
  );
}

export default App;
