import Line from "../../ui/line/Line";
import styles from "./order.module.css";

const Order = () => {

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Line 
                    width="3rem"
                    height="1px"
                    color="var(--clr-beige-400)"
                    center
                    marginBlockEnd="2.5rem"
                />

                <h2 className={styles.header}>Discover <br />Special Wines</h2>
            </div>
        </section>
    )
}

export default Order;