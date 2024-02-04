import Line from "../../ui/line/Line";
import OrderItems from "./order-items/OrderItems";
import orderWines from "../../../db/orderWines";
import styles from "./order.module.css";

const Order = () => {

    const orderWinesToShow = orderWines.slice(0, 3);

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

                <h2 className={styles.header}>
                    Order Wine At<br/>Your Doorstep
                </h2>

                {
                    orderWinesToShow.length > 0
                    ?
                        <OrderItems items={orderWinesToShow} />
                    :
                        <p className={styles.message}>
                            Oops... Our wine got sold really quick! 
                            Waiting for new supplies...
                        </p>
                }
            </div>
        </section>
    )
}

export default Order;