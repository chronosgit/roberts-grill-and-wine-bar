import { FC, KeyboardEventHandler } from "react";
import Line from "../../ui/line/Line";
import IWineItem from "../../../interfaces/IWineItem";
import styles from "./wine-item.module.css";

interface Props {
    wineItem: IWineItem,
}

const WineItem: FC<Props> = ({wineItem}) => {

    const redirectToWinePage = () => {
        alert("Redirect is working fine, the page just doesn't exist");
        window.location.href=`/wines/${wineItem.id}`;
    }

    const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (e): void => {
        if(e.code === "Enter") {
            redirectToWinePage();
        }
    }

    const {title, price, imageUrl} = wineItem;

    return (
        <div 
            className={styles.item} 
            tabIndex={0} 
            onClick={redirectToWinePage}
            onKeyDown={onKeyDown}
        >
            <img src={imageUrl} alt="alcohol" className={styles.image} />

            <p className={styles.title}>{title}</p>

            <Line
                width="100%"
                height="1px"
                color="var(--clr-beige-400)"
                marginBlock="1rem" 
            />

            <p className={styles.price}>{price}</p>
        </div>
    )
}

export default WineItem;