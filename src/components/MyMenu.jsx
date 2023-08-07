"use client"

import {MENU_CONST} from "../constants"
import styles from "../scss/main.module.scss"

export function MyMenu({ onClick = () => {} }){
    let rootMenu;

    const clickHandler = (e) => {
        console.log(e.type)
    };
    
    rootMenu = (
        <div className={styles.ul_c}>
            <ul className="navbar-nav navbar-center justify-content-center">
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
        </div>
    );

    return rootMenu;
}