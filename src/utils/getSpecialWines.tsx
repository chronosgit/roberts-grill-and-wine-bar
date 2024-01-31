import IWineItem from "../interfaces/IWineItem";
import wines from "../db/wines";

const getSpecialWines = (): IWineItem[] => {
    const specialWines = [];

    for(let i = 0; i < wines.length; i++) {
        if(wines[i].special) specialWines.push(wines[i]);
    }

    return specialWines;
} 

export default getSpecialWines;