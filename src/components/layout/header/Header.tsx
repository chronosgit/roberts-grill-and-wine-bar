import Logo from "../../ui/logo/Logo";
import getActiveHeaderLink from "../../../utils/getActiveHeaderLink";
import styles from "./header.module.css";

const Header = () => {

    const additionalLinkStyle = {
        color: "var(--clr-beige-700",
    }

    const isLinkActive = (link: string): boolean => {
        const activeUrlLink: string = getActiveHeaderLink();

        if(link === activeUrlLink || link === "home" && activeUrlLink === "") {
            return true;
        }

        return false;
    }

    const getAdditionalStyles = (link: string): object => {
        // console.log(isLinkActive(link), link, getActiveHeaderLink());

        if(isLinkActive(link)) {
            return additionalLinkStyle;
        }

        return {};
    }

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.links}>
                    <li className={styles.link} style={getAdditionalStyles("home")}>
                        <a href="/">Home</a>
                    </li>
                    <li className={styles.link} style={getAdditionalStyles("history")}>
                        <a href="/history">History</a>
                    </li>
                    <li className={styles.link} style={getAdditionalStyles("grills")}>
                        <a href="/grills">Grills</a>
                    </li>
                </ul>

                <Logo />

                <ul className={styles.links}>
                    <li className={styles.link} style={getAdditionalStyles("wines")}>
                        <a href="/wines">Wines</a>
                    </li>
                    <li className={styles.link} style={getAdditionalStyles("events")}>
                        <a href="/events">Events</a>
                    </li>
                    <li className={styles.link} style={getAdditionalStyles("contact")}>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;