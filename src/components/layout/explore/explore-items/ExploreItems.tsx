import IExploreItem from "../../../../interfaces/IExploreItem";
import ExploreItem from "../explore-item/ExploreItem";
import styles from "./explore-items.module.css";

type Props = {
    items: IExploreItem[],
}

const ExploreItems = ({items}: Props) => {
    
    return (
        <div className={styles.items}>
            {
                items.map(item => {
                    return (
                        <div key={item.id} className={styles.item}>
                            <ExploreItem item={item} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ExploreItems;