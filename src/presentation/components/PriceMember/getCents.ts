export const getCents = (price: number): string => {
    return price.toFixed(2).slice(-2)
}