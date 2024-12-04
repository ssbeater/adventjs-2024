export function createXmasTree(height: number, ornament: string): string {
    const maxWidth = (height - 1) * 2 + 1;

    let tree = new Array(height).fill(0).map((_, i) => {
        const numOrnaments = (i * 2) + 1;
        const spaces = "_".repeat((maxWidth - numOrnaments) / 2);
        return `${spaces}${ornament.repeat(numOrnaments)}${spaces}\n`;
    }).join("");

    const trunkSpaces = "_".repeat((maxWidth - 1) / 2);
    tree += `${trunkSpaces}#${trunkSpaces}\n`;
    tree += `${trunkSpaces}#${trunkSpaces}`;

    // console.log(tree);
    return tree;
}
