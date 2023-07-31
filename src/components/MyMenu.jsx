"use client"

import {MENU_CONST} from "../constants"

export function MyMenu({ onClick = () => {} }){
    let rootMenu;

    const sortAscending = (a, b) => a.id - b.id;
    const clickHandler = (e) => {
        console.log(e.type)
    };
    
    rootMenu = (
        <nav className="navbar navbar-expand">
            <ul className="navbar-nav justify-content-center w-100">
                {MENU_CONST.sort(sortAscending).map((menuElem) => (
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
        </nav>
    );

    return rootMenu;
}