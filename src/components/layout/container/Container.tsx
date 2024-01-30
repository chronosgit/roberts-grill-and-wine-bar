import { FC, ReactNode } from "react";
import getWidthFromPrefix from "../../../utils/getWidthFromPrefix";
import styles from "./container.module.css";

interface Props {
    children?: ReactNode,
    maxWidth?: string, 
    position?: string,
}

const Container: FC<Props> = ({ children, maxWidth = "", position = "static"}) => {

    const propsStyles: object = {
        position: position,
        maxWidth: getWidthFromPrefix(maxWidth),
    } 

    return (
        <div className={styles.container} style={propsStyles}>
            {children}
        </div>
    )
}

export default Container;