import React from 'react'
import {Link} from "react-router-dom";


function Navigation() {
    
    return (
        <div className='nav d-flex'>            
       
                    <Link to="/login">Login</Link>
                    <Link to="/registerUser">Create User</Link>
                    <Link to="/createOrder">Create Order</Link>

        </div>
        );
    };
    


export default Navigation