import { FC } from "react";
import useHover from "../../../hooks/useHover";
import styles from "./button.module.css";

interface Props {
    text: string,
    backgroundColor?: string,
    textColor?: string,
    hoverBgColor?: string,
    hoverTextColor?: string,
}

const Button: FC<Props> = ({
    text, 
    textColor = "var(--clr-black)",
    backgroundColor = "var(--clr-white)",
    hoverBgColor = "var(--clr-white)",
    hoverTextColor = "var(--clr-black)"
}) => {

    const [isHover, toggleHover] = useHover();

    const additionalStyles: object = {
        color: isHover ? hoverTextColor : textColor,
        backgroundColor: isHover ? hoverBgColor : backgroundColor,
    }

    return (
        <button 
            className={styles.button} 
            style={additionalStyles}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
        >
            {text}
        </button>
    )
}

export default Button;