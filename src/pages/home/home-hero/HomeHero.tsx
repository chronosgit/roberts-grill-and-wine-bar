import Button from "../../../components/ui/button/Button";
import styles from "./home-hero.module.css";

const HomeHero = () => {

    return (
        <section className={styles.hero} >
            <div className={styles.container}>
                <p className={styles.date}>Est. 1845</p>

                <h2 className={styles.title}>Oldest Bar In London</h2>

                <div className={styles.line} />

                <Button 
                    text="Book a table"
                    textColor="var(--clr-black)" 
                    backgroundColor="var(--clr-white)"
                    hoverTextColor="var(--clr-white)"
                    hoverBgColor="var(--clr-beige-700)"
                />
            </div>
        </section>
    )
}

export default HomeHero;