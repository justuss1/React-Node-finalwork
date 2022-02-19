import React from 'react'
import {Link} from "react-router-dom";


function Navigation() {
    
    return (
        <div className='nav d-flex'>            
       
                    <Link to="/login">Login</Link>
                    <Link to="/createuser">Create User</Link>
                    <Link to="/createorderpage">Create Order</Link>

        </div>
        );
    };
    


export default Navigation