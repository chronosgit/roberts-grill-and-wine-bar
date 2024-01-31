import { MouseEventHandler, useState } from "react";

const useHover = (): [boolean, MouseEventHandler<HTMLButtonElement>] => {
    const [isHover, setHover] = useState(false);

    const toggleHover = () => {
        setHover(!isHover);
    }

    return [isHover, toggleHover];
}

export default useHover;