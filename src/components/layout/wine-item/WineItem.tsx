import { FC } from "react";
import IWineItem from "../../../interfaces/IWineItem";
import styles from "./wine-item.module.css";
import Line from "../../ui/line/Line";

interface Props {
    wineItem: IWineItem,
}

const WineItem: FC<Props> = ({wineItem}) => {

    const {title, price, imageUrl} = wineItem;

    return (
        <div className={styles.item}>
            <img src={imageUrl} alt="alcohol" className={styles.image} />

            <p className={styles.title}>{title}</p>

            <Line
                width="100%"
                height="2px"
                color="var(--clr-beige-400)" 
            />

            <p className={styles.price}>{price}</p>
        </div>
    )
}

export default WineItem;