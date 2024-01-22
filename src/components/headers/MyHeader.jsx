"use client"

import styles from "../../scss/main.module.scss"
import {MyMenu, MyContact, MyNamespace} from "../index"

export function MyHeader(){

    let mainHeader;
    mainHeader = (
        <header className="sticky top-0 z-10 bg-inherit shadow-sm">
            <div className="container-md d-flex justify-content-center">
                    <div className={`${styles.avatarHeader} w-100`}>
                        <nav className={`navbar navbar-expand w-100 py-3 ${styles.MyNav}`}>
                            <MyNamespace />
                            <MyMenu />
                            <MyContact />
                        </nav>
                    </div>
            </div>
        </header>
    );
    return mainHeader;
}