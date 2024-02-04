import { Link } from "react-router-dom";
import IOrderItem from "../../../../interfaces/IOrderItems";
import styles from "./order-item.module.css";

type Props = {
    item: IOrderItem,
}

const OrderItem = ({item}: Props) => {
    
    return (
        <div className={styles.item}>
            <img src={item.imageUrl} alt="Alcohol image" className={styles.img} />

            <div className={styles.content}>
                <div className={styles.first_row}>
                    <Link to={item.linkUrl} className={styles.title}>{item.title}</Link>

                    <p className={styles.price}>{item.price}</p>
                </div>

                <p className={styles.descr}>{item.descr}</p>

                <Link to={item.linkUrl} className={styles.link}>{item.linkText}</Link>
            </div>
        </div>
    )
}

export default OrderItem;