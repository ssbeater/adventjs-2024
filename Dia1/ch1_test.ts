import { assertEquals } from "@std/assert";
import { prepareGifts } from "./ch1.ts";

Deno.test(function addTest() {
    const gifts = [3, 1, 2, 3, 4, 2, 5];
    const result = prepareGifts(gifts);
    const expected = [1, 2, 3, 4, 5];

    assertEquals(result, expected);
});
