import {AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillMail} from 'react-icons/ai'
import { HYPERLINK } from "./href"

export const CONTACT_CONST = [
    {id: "0", name: "Github", icon: <AiFillGithub />, url: HYPERLINK.github},
    {id: "1", name: "Linkedin", icon: <AiFillLinkedin />, url: HYPERLINK.linkedin},
    {id: "2", name: "Instagram", icon: <AiFillInstagram />, url: HYPERLINK.insta},
    {id: "3", name: "Mail", icon: <AiFillMail />, url: HYPERLINK.mail},
]