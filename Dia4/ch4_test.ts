import { assertEquals } from "@std/assert";
import { createXmasTree } from "./ch4.ts";

Deno.test(function addTest() {
    const result = createXmasTree(5, '*')
    const expected = `____*____
___***___
__*****__
_*******_
*********
____#____
____#____`

    assertEquals(result, expected);
});
