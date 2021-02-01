import React from 'react';
import { 
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
 } from 'reactstrap';
 import {Link} from 'react-router-dom';

function NavBar()
{
    return(
        <div>
            <Navbar color = "light" light expand = "md">      
                <Link to="/"><NavbarBrand className="nav-brand" href = "#">Stock Prediction MW11-1</NavbarBrand></Link>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" href = "https://github.com/Codubee/StockPredictionMW11-1">GitHub</NavLink>
                    </NavItem>
                </Nav>
                <Nav navbar>
                    <NavItem>
                        <Link to="/userinput"><NavLink  className="nav-link">User Input</NavLink></Link>
                    </NavItem>
                </Nav>
                <Nav navbar>
                    <NavItem>
                        <Link to="/"><NavLink className="nav-link">Home Page</NavLink></Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar;