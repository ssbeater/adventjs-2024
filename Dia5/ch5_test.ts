import { organizeShoes, Shoe } from "./ch5.ts";
import { assertEquals } from "@std/assert";

Deno.test(function twoAvailable() {
    const shoes: Shoe[] = [
        { type: "I", size: 38 },
        { type: "R", size: 38 },
        { type: "R", size: 42 },
        { type: "I", size: 41 },
        { type: "I", size: 42 },
    ];

    const result = organizeShoes(shoes);
    const expected = [38, 42];

    assertEquals(result, expected);
});

Deno.test(function twoAvailableSameSize() {
    const shoes: Shoe[] = [
        { type: "I", size: 38 },
        { type: "R", size: 38 },
        { type: "I", size: 38 },
        { type: "I", size: 38 },
        { type: "R", size: 38 },
    ];

    const result = organizeShoes(shoes);
    const expected = [38, 38];

    assertEquals(result, expected);
});

Deno.test(function anyAvailable() {
    const shoes: Shoe[] = [
        { type: "I", size: 38 },
        { type: "R", size: 36 },
        { type: "R", size: 42 },
        { type: "I", size: 41 },
        { type: "I", size: 42 },
    ];

    const result = organizeShoes(shoes);

    assertEquals(result, [42]);
});
