import { FC, ReactNode } from "react";
import styles from "./container.module.css";

interface Props {
    children?: ReactNode,
    maxWidth?: string, 
}

const Container: FC<Props> = ({ children, maxWidth = "10rem" }) => {

    const propsStyles = {
        maxWidth: maxWidth,
    } 

    return (
        <div className={styles.container} style={propsStyles}>
            {children}
        </div>
    )
}

export default Container;