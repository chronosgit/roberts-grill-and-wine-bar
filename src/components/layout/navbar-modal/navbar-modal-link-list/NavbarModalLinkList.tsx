import { FC } from "react";
import NavbarLink from "../../navbar-link/NavbarLink";
import INavbarLink from "../../../../interfaces/INavbarLink";
import styles from "./navbar-modal-link-list.module.css";

interface Props {
    links: INavbarLink[],
    mobile?: boolean,
}

const NavbarModalLinkList: FC<Props> = ({links}) => {

    return (
        <ul className={styles.list}>
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

export default NavbarModalLinkList;