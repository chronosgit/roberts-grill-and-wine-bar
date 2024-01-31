import IBtnOptions from "./IBtnOptions";

interface IHomeMenu {
    id: number,
    title: string,
    descr: string,
    btnText: string,
    bgUrl: string,
    btnOptions: IBtnOptions,
}

export default IHomeMenu;