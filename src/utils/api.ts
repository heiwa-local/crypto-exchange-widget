interface RequestParams {
    [key: string]: any,
}

export const createUrl = (
    host: string, 
    path: string, 
    route: string,
    params: RequestParams
) => {
    return `${host}${path}/${route}?${Object.entries(params).map((param) => {
        return `${param[0]}=${String(param[1])}`
    }).join('&')}`
}