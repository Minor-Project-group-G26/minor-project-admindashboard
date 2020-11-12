import React from 'react';
import Tool from './Tab/containers/Tool/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CenterFocusStrong } from '@material-ui/icons';


function Edit() {
    return (
        <div className="container">
            <h1 style={{textAlign:'center'}} className="mb-5" >Users</h1>
            <div className="row" >  
            <div className="col" >
                <Tool />
            </div>    
            </div>

            <h1 style={{textAlign:'center'}} className="mt-5 mb-5">Movie</h1> 
            <div className="row" >    
            <div className="col" >
                <Tool />
            </div>    
            </div> 
        </div>
    )
}

export default Edit
