export type Shoe = {
    type: "I" | "R";
    size: number;
};

export function organizeShoes(shoes: Shoe[]): number[] {
    const sizes = Array.from(new Set(shoes.map((i) => i.size)));

    const availableSizes = sizes.reduce<number[]>((available, size) => {
        const right = shoes.filter((i) => i.size === size && i.type === "R");
        const left = shoes.filter((i) => i.size === size && i.type === "I");

        const availableTimes = Math.min(right.length, left.length);

        for (let index = 0; index < availableTimes; index++) {
            available.push(size);
        }

        return available;
    }, []);

    return availableSizes;
}
