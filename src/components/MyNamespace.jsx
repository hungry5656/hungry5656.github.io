"use client"

import Link from 'next/link';
import styles from "../scss/main.module.scss"
import {NAMESPACE_CONST} from "../constants"
// import {} from ""
// import '../scss/header.module.scss'

export function MyNamespace(){
    return (
        <div className={styles.ul_l}>
            <ul className="navbar-nav navbar-left justify-content-left">
                <li key="0">
                    <Link href="/">
                        <div className="rounded-circle d-inline-block border-2 border-black">
                            <img src={NAMESPACE_CONST.url} width="40" height="40" className="rounded-circle d-inline-block align-center" alt="Logo" />
                        </div>
                    </Link>
                </li>
                <li key={NAMESPACE_CONST.id} className={`${styles.box_v_middle} ${styles.NameSpace}`}>
                    &nbsp;
                    @
                    <Link href="/">
                        {NAMESPACE_CONST.name}
                    </Link>
                </li>
            </ul>
        </div>
    )
}