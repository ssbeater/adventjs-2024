export type Shoe = {
    type: "I" | "R";
    size: number;
};

export function organizeShoes(shoes: Shoe[]): number[] {
    const sizeMap: Record<number, { left: number; right: number }> = {};
    const available: number[] = [];

    for (const shoe of shoes) {
        if (!sizeMap[shoe.size]) {
            sizeMap[shoe.size] = { left: 0, right: 0 };
        }

        shoe.type === "I"
            ? sizeMap[shoe.size].left++
            : sizeMap[shoe.size].right++;
    }

    for (const size in sizeMap) {
        const { left, right } = sizeMap[size];
        const pairs = Math.min(left, right);
        for (let i = 0; i < pairs; i++) {
            available.push(Number(size));
        }
    }

    return available;
}
