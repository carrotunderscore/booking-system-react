import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <>
                <div>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/book">BOOK</Link></li>
                        <li><Link to="/register">REGISTER</Link></li>
                        <li><Link to="/admin">ADMIN</Link></li>
                    </ul>


                    I am the header component!
                </div>
            </>
        );
    }
}

export default Header;