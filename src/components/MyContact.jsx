"use client"

import {CONTACT_CONST} from "../constants"

export function MyContact(){
    return (
        <ul style={{float:"right"}} className="navbar-nav float-end">
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
        </ul>
    )
}