export function createFrame(names: string[]): string {
    const maxLength = Math.max(...names.map((name) => name.length));
    const frameWidth = maxLength + 2 + 2;

    const border = "*".repeat(frameWidth);

    return `${border}\n${
        names.map((name) => `* ${name.padEnd(maxLength)} *\n`).join("")
    }${border}`;
}
