import { FC } from "react";

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
    marginBlock = "0",
    marginBlockEnd = "0",
}) => {

    const styles: object = {
        width: width,
        height: height,
        backgroundColor: color,
        marginInline: center && "auto",
        marginBlockEnd: marginBlockEnd, 
        marginBlock: marginBlock, 
    }

    return (
        <div style={styles} />
    )
}

export default Line;