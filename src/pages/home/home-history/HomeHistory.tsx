import Button from "../../../components/ui/button/Button";
import Line from "../../../components/ui/line/Line";
import styles from "./home-history.module.css";

const HomeHistory = () => {

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>History</h2>

                <p className={styles.date}>175 Years Of Service</p>

                <Line
                    width="3.5rem"
                    height="2px"
                    color="var(--clr-white"
                    center
                    marginBlock="2.5rem"
                />

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

                <Button 
                    text="More About Us"
                    textColor="var(--clr-black)" 
                    backgroundColor="var(--clr-white)"
                    hoverTextColor="var(--clr-white)"
                    hoverBgColor="var(--clr-black)"
                />
            </div>
        </section>
    )
}

export default HomeHistory;