import { assertEquals } from "@std/assert";
import { createFrame } from "./ch2.ts";

Deno.test(function addTest() {
    const result = createFrame(['midu', 'madeval', 'educalvolpz'])
    const expected = `***************
* midu        *
* madeval     *
* educalvolpz *
***************`

    assertEquals(result, expected);
});
