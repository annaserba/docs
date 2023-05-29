---
title: RLE-сжатие
description: Реализовать RLE-сжатие AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
---

Реализовать **RLE-сжатие**: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4

```tsx
/**
 * 
 * @param  {string} value
 * @return {string}
 */
function rle(value) {
  let buffer = value.toLowerCase().split("");
  let counter = 0;
  let current = 0;
  let result = "";

  buffer.forEach((item, index, data) => {
    if (item === data[current]) {
      counter++;
    } else {
      current = index;
      counter = 1;
    }
    result += data[current] + counter;
    // console.log(result)
    // data.splice(current, index, result )
    //   console.log(index, item, current, counter);
  });

  console.log(result);
}

rle("AAAABBCCCCC");
```