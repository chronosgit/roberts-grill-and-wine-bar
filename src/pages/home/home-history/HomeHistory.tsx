import ButtonWhite from "../../../components/ui/button-white/ButtonWhite";
import styles from "./home-history.module.css";

const HomeHistory = () => {

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>History</h2>

                <p className={styles.date}>175 Years Of Service</p>

                <div className={styles.line} />

                <p className={styles.text_intro}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <p className={styles.text_main}>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.
                </p>

                <ButtonWhite text="More about us" hoverBlackBg />
            </div>
        </section>
    )
}

export default HomeHistory;