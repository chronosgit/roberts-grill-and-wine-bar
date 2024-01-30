import ButtonWhite from "../../../components/ui/button-white/ButtonWhite";
import styles from "./home-hero.module.css";

const HomeHero = () => {

    return (
        <section className={styles.hero} >
            <div className={styles.container}>
                <p className={styles.date}>Est. 1845</p>

                <h2 className={styles.title}>Oldest Bar In London</h2>

                <div className={styles.line} />

                <ButtonWhite text="Book a table" />
            </div>
        </section>
    )
}

export default HomeHero;