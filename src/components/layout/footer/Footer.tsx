import styles from "./footer.module.css";
import facebook from "/icons/facebook.svg";
import instagram from "/icons/instagram.svg";
import twitter from "/icons/twitter.svg";

const Footer = () => {

    const currentYear: number = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <section className={styles.contact}>
                <p className={styles.contact_text}>Contact Us:</p>

                <p className={styles.contact_text}>+1 234 657 890</p>

                <div className={styles.links}>
                    <a href="https://www.instagram.com/" className={styles.link}>
                        <img src={instagram} alt="instagram logo" />
                    </a>

                    <a href="https://www.facebook.com/" className={styles.link}>
                        <img src={facebook} alt="facebook logo" />
                    </a>

                    <a href="https://twitter.com/" className={styles.link}>
                        <img src={twitter} alt="twitter logo" />
                    </a>
                </div>
            </section>

            <p className={styles.copyright}>Copyright © {currentYear} Wine Bar and Restaurant</p>
        </footer>
    )
}

export default Footer;