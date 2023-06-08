### TODOs:
There is a flickering on desktop mode refresh of page due to useMediaQuery hook deciding on the layout

### Improvements for Ixora:
- mx-auto centers the contained div within the container div based on the x axis
- Better navbar, especially, the change of color on window.scrollY !== 0

### Others:
-Why do we need JSX?
    JSX is a superset of Javascript (JS + XML). It was developed by Meta for string interpolation /combining logic and markup/. It can be used in React, but also plain Javascript will do the same. Some schools of thaught advocate the use of JSX for components and that be separate from the JS files that deal with hooks, contexts and other logical structures.
- JIT:
    If you are using the Next.js App Router, you do not need to set the JIT mode of Tailwind CSS as it is automatically enabled by Next.js. This is because Next.js uses the new Just-in-Time (JIT) engine by default, which allows for faster and more optimized CSS loading.

- Relative div and absolute pseudo ::before ::after:

```sh const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;```

The before pseudo-element is absolute relative to the div in whose className it is declared.

- Tailwind filters:
    PHIND: In summary, while it is not necessary to state "filter" in Tailwind code to have access to filters, you can use the filter utility to enable filters and customize them further. 
