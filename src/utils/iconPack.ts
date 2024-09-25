import { Icon } from "../components/Icon";

const iconPack = {
    arrowDown: Icon.ArrowDown,
    close: Icon.Close,
    swap: Icon.Swap,
}

export const getIconByName = (iconName: string) => {
    const iconInfo = Object.entries(iconPack).find((icon) => icon[0] === iconName)

    if (iconInfo) {
        return iconInfo[1]
    }
    return undefined;
}