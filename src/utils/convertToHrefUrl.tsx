const convertToHrefUrl = (url: string): string => {
    if(url[0] != "/") {
        url = "/" + url;
    }

    return url;
}

export default convertToHrefUrl;