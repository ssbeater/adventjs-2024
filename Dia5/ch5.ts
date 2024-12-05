export type Shoe = {
    type: "I" | "R";
    size: number;
};

export function organizeShoes(shoes: Shoe[]): number[] {
    const sizeMap: Record<number, { left: number; right: number }> = {};
    const available: number[] = [];

    shoes.forEach((shoe) => {
        const { size, type } = shoe;

        if (!sizeMap[size]) {
            sizeMap[size] = { left: 0, right: 0 };
        }

        if (type === "I") {
            sizeMap[size].left++;
        } else {
            sizeMap[size].right++;
        }
    });

    for (const size in sizeMap) {
        const { left, right } = sizeMap[size];
        const pairs = Math.min(left, right);
        for (let i = 0; i < pairs; i++) {
            available.push(Number(size));
        }
    }

    return available;
}
