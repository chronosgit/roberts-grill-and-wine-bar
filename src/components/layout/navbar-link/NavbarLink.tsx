import { FC } from "react";
import getActiveNavbarLink from "../../../utils/getActiveNavbarLink";
import styles from "./navbar-link.module.css";
import INavbarLink from "../../../interfaces/INavbarLink";

interface Props {
    link: INavbarLink,
}

const NavbarLink: FC<Props> = ({link}) => {

    const lowercasedUrl = link.name.toLowerCase();
    const additionalLinkStyle = {
        color: "var(--clr-beige-700)",
    }

    const isLinkActive = (link: string): boolean => {
        const activeUrlLink: string = getActiveNavbarLink();

        if(link === activeUrlLink || link === "home" && activeUrlLink === "") {
            return true;
        }

        return false;
    }

    const getAdditionalStyles = (link: string): object => {
        if(isLinkActive(link)) {
            return additionalLinkStyle;
        }

        return {};
    }

    return (
        <a href={link.url} className={styles.link} style={getAdditionalStyles(lowercasedUrl)}> 
            {link.name}
        </a>
    )
}

export default NavbarLink;