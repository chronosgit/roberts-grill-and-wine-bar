import { Link } from "react-router-dom";
import IExploreItem from "../../../../interfaces/IExploreItem";
import styles from "./explore-item.module.css";
import { useState } from "react";

type Props = {
    item: IExploreItem,
}

const ExploreItem = ({item}: Props) => {

    const [isHover, setHover] = useState(false);

    const toggleHover = () => {
        setHover(prev => !prev);
    }

    const backgroundGradient = "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3))";
    const backgroundUrl = `url(${item.imageUrl})`;

    const bgImageStyle = {
        backgroundImage: isHover 
        ? 
            backgroundUrl
        :
            backgroundGradient + "," + backgroundUrl,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }

    return (
        <div 
            className={styles.item} 
            style={bgImageStyle}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
        >
            <div className={styles.content}>
                <p className={styles.title}>{item.name}</p>

                <Link to="#" className={styles.link}>Get Directions</Link>
            </div>
        </div>
    )
}

export default ExploreItem;