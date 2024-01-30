import getCurrentUrl from "./getCurrentUrl";

const getActiveNavbarLink = (): string => {
    const urlRegex: RegExp = /^https?:\/\/[^/]+(\/[^?]*)?/;
    const currentUrl: string = getCurrentUrl();

    const matchResult = currentUrl.match(urlRegex);
    const activeHeaderLinkName = matchResult?.[1];

    if(activeHeaderLinkName === undefined) {
        return "";
    }

    return activeHeaderLinkName.slice(1); // without slash in the beginning
}

export default getActiveNavbarLink;