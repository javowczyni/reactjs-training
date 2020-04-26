import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Menu extends Component {

    render() {
        return (
            <>
                <div>
                    <Link to={"/"}><button>home</button></Link>
                    <Link to={"/about"}><button>about</button></Link>
                    <Link to={"/contact"}><button>contact us</button></Link>
                </div>
            </>
        );
    }
}

export default Menu;
