const getCurrentUrl = (): string => {
    const windowHref = window.location.href;
    
    return windowHref;
}

export default getCurrentUrl;