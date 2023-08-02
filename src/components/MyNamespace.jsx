"use client"

import Link from 'next/link';
import {NAMESPACE_CONST} from "../constants"

export function MyNamespace(){
    return (
        <ul className="navbar-nav navbar-left justify-content-left w-25">
                <li key={NAMESPACE_CONST.id}>
                    <Link href="/" aria-label="Go to home page" role="link">
                        {NAMESPACE_CONST.name}
                    </Link>
                </li>
        </ul>
    )
}