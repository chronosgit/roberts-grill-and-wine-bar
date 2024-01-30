const getWidthFromPrefix = (prefix: string): string => {
    let width = "auto";

    switch(prefix) {
        case "sm":
            width = "33.75rem";
            break;
        case "md":
            width = "45rem";
            break;
        case "lg":
            width = "60rem";
            break;
        case "xl":
            width = "71.25rem";
            break;
        default:
            break;
    }

    return width;
}

export default getWidthFromPrefix;