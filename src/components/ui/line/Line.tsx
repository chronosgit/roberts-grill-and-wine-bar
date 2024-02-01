import { FC } from "react";
import ILineStyles from "../../../interfaces/ILineStyles";

interface Props {
    width: string,
    height: string,
    color: string,
    center?: boolean,
    marginBlock?: string,
    marginBlockEnd?: string,
}

const Line: FC<Props> = ({
    width, 
    height, 
    color, 
    center = false, 
    marginBlock,
    marginBlockEnd,
}) => {

    const styles: ILineStyles = {
        width: width,
        height: height,
        backgroundColor: color,
        marginInline: center ? "auto" : "none",
        marginBlock:  marginBlock, 
        marginBlockEnd: marginBlock ? marginBlock : marginBlockEnd, // dealing with overrides
    }

    return (
        <div style={styles} />
    )
}

export default Line;