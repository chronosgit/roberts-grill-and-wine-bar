import { FC, MouseEventHandler } from "react";
import styles from "./burger.module.css";
import burger from "../../../../public/icons/burger.svg";

interface Props {
    onClick: MouseEventHandler<HTMLButtonElement>
}

const Burger: FC<Props> = ({onClick}) => {
    return (
        <button className={styles.burger} onClick={onClick}>
            <img src={burger} alt="burger menu icon" />
        </button>
    )
}

export default Burger;