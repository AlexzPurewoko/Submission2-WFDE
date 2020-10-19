export const Util = {
    computeHeight: (elm: Element) => {
        return parseFloat(getComputedStyle(elm, null).height.replace("px", ""))
    }
}