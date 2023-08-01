"use client"

import {MENU_CONST} from "../constants"

export function MyMenu({ onClick = () => {} }){
    let rootMenu;

    const clickHandler = (e) => {
        console.log(e.type)
    };
    
    rootMenu = (
        <ul className="navbar-nav navbar-center justify-content-center w-50">
            {MENU_CONST.map((menuElem) => (
                <li key={menuElem.id}>
                    <a 
                        className="nav-hover nav-item nav-link w-100 h-100"
                        href={menuElem.url}
                        title={menuElem.name}
                        onClick={clickHandler}
                    >
                        {menuElem.name}
                    </a>
                </li>
            ))}
        </ul>
    );

    return rootMenu;
}