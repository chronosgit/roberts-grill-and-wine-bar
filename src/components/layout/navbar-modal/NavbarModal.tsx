import { FC, MouseEventHandler } from "react";
import NavbarModalLinkList from "./navbar-modal-link-list/NavbarModalLinkList";
import INavbarLink from "../../../interfaces/INavbarLink";
import styles from "./navbar-modal.module.css";
import close from "../../../../public/icons/close.png";

interface Props {
    links: INavbarLink[],
    toggleModal: MouseEventHandler<HTMLButtonElement>
}

const NavbarModal: FC<Props> = ({links, toggleModal}) => {

    return (
        <div className={styles.modal}>
            <button className={styles.closeBtn} onClick={toggleModal}>
                <img src={close} alt="cross icon" />
            </button>

            <NavbarModalLinkList links={links}  />
        </div>
    )
}

export default NavbarModal;