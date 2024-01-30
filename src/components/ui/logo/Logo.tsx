import styles from "./logo.module.css";
import logo from "../../../../public/images/logo.png";

const Logo = () => {

    return (
        <img src={logo} alt="logo" className={styles.img} />
    )
}

export default Logo;