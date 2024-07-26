"use client"

import {CONTACT_CONST} from "../../constants"
import styles from "../../scss/main.module.scss"

export function MyContact(){
    return (
        <div className={styles.ul_r}>
        <ul style={{float:"right"}} className="navbar-nav">
            {CONTACT_CONST.map((elem) => (
                <li key={elem.id}>
                    <a 
                        className="nav-hover nav-item nav-link w-100 h-100"
                        href={elem.url}
                        title={elem.name}
                        target="blank"
                    >
                        {elem.icon}
                    </a>
                </li>
            ))}
            <li>
                
            </li>
        </ul>
        </div>
    )
}