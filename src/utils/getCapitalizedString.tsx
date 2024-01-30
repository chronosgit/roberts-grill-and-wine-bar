const getCapitalizedString = (string: string): string => {
    if(typeof string != "string") {
        throw new Error("Can only capitalize strings");
    }

    let capitalizedString = string.toLowerCase();
    capitalizedString = capitalizedString[0].toUpperCase() + capitalizedString.slice(1);

    return capitalizedString;
}

export default getCapitalizedString;