import { FC } from "react";
import NavbarLink from "../../navbar-link/NavbarLink";
import INavbarLink from "../../../../interfaces/INavbarLink";
import styles from "./navbar-link-list.module.css";

interface Props {
    links: INavbarLink[],
    mobile?: boolean,
}

const NavbarLinkList: FC<Props> = ({links, mobile}) => {
    
    const mobileStyles = {
        flexDirection: "column",
    };

    const getMobileStylesIfNeeded = () => {
        if(mobile) {
            return mobileStyles;
        }

        return {};
    }

    return (
        <ul className={styles.list} style={getMobileStylesIfNeeded()}>
            {
                links.map((link, i) => {
                    return (
                        <li key={i}>
                            <NavbarLink link={link} />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default NavbarLinkList;