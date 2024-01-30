import { FC } from "react";
import getWidthFromPrefix from "../../../utils/getWidthFromPrefix";
import styles from "./home-hero.module.css";


interface Props {
    maxWidth?: string,
    center?: boolean,
}

const HomeHero: FC<Props> = ({maxWidth = "", center = false}) => {

    const additionalStyles: object = {
        maxWidth: getWidthFromPrefix(maxWidth),
        marginInline: center && "auto",
    }

    return (
        <div className={styles.hero} style={additionalStyles}>
            <p className={styles.date}>Est. 1845</p>

            <h2 className={styles.title}>Oldest Bar In London</h2>

            <div className={styles.line} />

            <button className={styles.button}>Book a table</button>
        </div>
    )
}

export default HomeHero;