"use client"

import Link from 'next/link';
import {NAMESPACE_CONST} from "../constants"
// import {} from ""
// import '../scss/header.module.scss'

export function MyNamespace(){
    return (
        <ul className="navbar-nav navbar-left justify-content-left w-25">
                <li key={NAMESPACE_CONST.id}>
                    <Link href="/">
                        <span class="rounded-circle d-inline-block border-2 border-black">
                            <img src={NAMESPACE_CONST.url} width="30" height="30" className="rounded-circle d-inline-block align-center" alt="Logo" />
                        </span>
                        &nbsp;
                        {NAMESPACE_CONST.name}
                    </Link>
                </li>
        </ul>
    )
}