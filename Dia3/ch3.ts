type Inventory = Array<
    { name: string; quantity: number; category: string }
>;

export function organizeInventory(inventory: Inventory) {
    if (!inventory.length) {
        return {};
    }

    const categories: { [key: string]: { [key: string]: number } } = {};

    for (const item of inventory) {
        const { name, quantity, category } = item;

        categories[category] ??= {};
        categories[category][name] = (categories[category][name] || 0) +
            quantity;
    }

    return categories;
}
