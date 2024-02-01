import IWineItem from "../interfaces/IWineItem";

const wines: IWineItem[] = [
    {
        id: "1",
        title: 
            `Fortnum's South Island
            Sauvignon Blanc, James Thompson, 75cl`,
        price: "$29",
        imageUrl: "../../public/images/wines/bottle-1.png",
        special: true,
    },
    {
        id: "2",
        title: 
            `Fortnum's North Island
            Sauvignon Blanc, James Thompson, 75cl`,
        price: "$29",
        imageUrl: "../../public/images/wines/bottle-2.png",
        special: true,
    },
    {
        id: "3",
        title: 
            `Fortnum's West Island
            Sauvignon Blanc, James Thompson, 75cl`,
        price: "$29",
        imageUrl: "../../public/images/wines/bottle-3.png",
        special: true,
    },
    {
        id: "4",
        title: 
            `Fortnum's East Island
            Sauvignon Blanc, James Thompson, 75cl`,
        price: "$29",
        imageUrl: "../../public/images/wines/bottle-4.png",
        special: true,
    },
];

export default wines;