import OrderItem from "../order-item/OrderItem";
import IOrderItem from "../../../../interfaces/IOrderItem";
import styles from "./order-items.module.css";

type Props = {
    items: IOrderItem[],
}

const OrderItems = ({items}: Props) => {

    return (
        <div className={styles.items}>
            {
                items.map((item, i) => {
                    return (
                        <div key={i} className={styles.item}>
                            <OrderItem item={item} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default OrderItems;