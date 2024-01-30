import { FC, MouseEventHandler } from "react";
import NavbarLinkList from "./navbar-link-list/NavbarLinkList";
import navLinks from "../../../db/navLinks";
import styles from "./navbar.module.css";
import Logo from "../../ui/logo/Logo";
import Burger from "../../ui/burger/Burger";

interface Props {
    isModalOpen: boolean,
    toggleModal: MouseEventHandler<HTMLButtonElement>,
}

const Navbar: FC<Props> = ({isModalOpen, toggleModal}) => {

    const linksFirstHalf = navLinks.slice(0, Math.floor(navLinks.length / 2));
    const linksSecondHalf = navLinks.slice(Math.floor(navLinks.length / 2));

    return (
        <nav className={styles.nav}>
            <NavbarLinkList links={linksFirstHalf} />

            <Logo />

            <NavbarLinkList links={linksSecondHalf} />
            
            {
                !isModalOpen &&
                    <Burger onClick={toggleModal} />
            }
        </nav>
    )
}

export default Navbar;