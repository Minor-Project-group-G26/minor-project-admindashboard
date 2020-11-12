import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import  Delete  from './Delete';
import React from 'react';
import AddMovie from './AddMovie';
import Edit from './Edit';
import AdNavbar from "./AdNavbar";
import { useEffect } from "react";


function Dashboard() {

    useEffect(() => {
        document.getElementById('bg').style.display='none';
        document.querySelector('footer').style.display='none';
    })
    return (
    <>    
        <Router>
      <AdNavbar/>
        <Switch>
                <Route path='/admin/dashboard/delete' exact component={Delete} />
                <Route path='/admin/dashboard/add' exact component={AddMovie} />
                <Route path='/admin/dashboard/edit' exact component={Edit} />
            </Switch>
        </Router>
    </>     
    )
}

export default Dashboard
