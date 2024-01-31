import { FC } from "react";
import WineItem from "../wine-item/WineItem";
import IWineItem from "../../../interfaces/IWineItem";
import styles from "./wine-items.module.css";

interface Props {
    wineItems: IWineItem[],
}

const WineItems: FC<Props> = ({wineItems}) => {

    return (
        <div className={styles.items}>
            {
                wineItems.map((item, i) => {
                    return (
                        <div key={i} className={styles.itemWrapper}>
                            <WineItem wineItem={item} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default WineItems;