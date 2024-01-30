import styles from "./not-found.module.css";
import image404 from "../../../public/images/404/404.png"

const NotFound = () => {

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h2 className={styles.message}>Such page doesn't exist...</h2>

                <img src={image404} alt="Alcohol bottle with 404 on it" className={styles.img} />
            </div>
        </div>
    )
}

export default NotFound;