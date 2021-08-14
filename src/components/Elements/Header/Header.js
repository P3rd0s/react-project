import {Link} from "react-router-dom";
import React from "react";
import './Header-style.scss';

function Header({backPath, title}) {
    return (
        <div className="header">
            {backPath &&
            <Link to={backPath}>
                <button className="header__btn">
                    <div className="arrow"/>
                </button>
            </Link>
            }
            <h2 className="header__title">{title}</h2>
        </div>
    );

}

export default Header;