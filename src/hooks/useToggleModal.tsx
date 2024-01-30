import { MouseEventHandler, useState } from "react";

const useToggleModal = (): [boolean, MouseEventHandler<HTMLButtonElement>] => {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    }

    return [isModalOpen, toggleModal];
}

export default useToggleModal;