export function prepareGifts(gifts: number[]) {
    const uniqueGifts = Array.from(new Set(gifts));
    return uniqueGifts.sort((a, b) => a - b);
}
