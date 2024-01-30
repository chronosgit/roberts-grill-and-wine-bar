import { FC } from "react";
import styles from "./button-white.module.css";
import getMergedClassname from "../../../utils/mergeStyleClasses";

interface Props {
    text: string,
    hoverBlackBg?: boolean,
}

const ButtonWhite: FC<Props> = ({text, hoverBlackBg}) => {

    const {button, button_hover_black} = styles;

    let buttonClass = button;

    if(hoverBlackBg) {
        buttonClass = getMergedClassname(button, button_hover_black)
    }

    return (
        <button className={buttonClass}>
            {text}
        </button>
    )
}

export default ButtonWhite;