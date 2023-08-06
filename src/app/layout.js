import 'bootstrap/dist/css/bootstrap.css'
import styles from "../scss/main.module.scss"
import './globals.css'
import { Inter } from 'next/font/google'
import {MyMetadata, MyHeader} from 'src/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {...MyMetadata}

export default function RootLayout({ children, Component, pageProps }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <MyHeader {...pageProps} />
                {children}
            </body>
        </html>
    )
}
