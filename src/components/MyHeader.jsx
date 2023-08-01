"use client"

import {MyMenu, MyContact, MyNamespace} from "./index"

export function MyHeader(){

    let mainHeader;
    mainHeader = (
        <div className="d-flex justify-content-center bg-dark">
            <div className="w-75">
                <nav className="navbar navbar-expand">
                    <MyNamespace />
                    <MyMenu />
                    <MyContact />
                </nav>
            </div>
        </div>
    );
    return mainHeader;
}