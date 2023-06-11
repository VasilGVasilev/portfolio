### TODOs:
There is a flickering on desktop mode refresh of page due to useMediaQuery hook deciding on the layout
set all fonts to be optmised for next js

### Improvements for Ixora:
- mx-auto centers the contained div within the container div based on the x axis
- Better navbar, especially, the change of color on window.scrollY !== 0
- see https://grandhotelmillenniumsofia.bg/bg/nachalo/ how the navbar is actually below the initial video
- make description text be squared from both sides and maybe have a glance
- timeline circles need to be implementing the whileInView pop-up, namely, https://codesandbox.io/s/framer-motion-value-specific-transitions-yf5siw?from-embed, also see hidden/visible year and relative to that year text

### Others: 

- motion div explained at https://youtu.be/JSJ8ftr92Vw?t=4187

for more info on this one see Scroll section of official docs

```sh 
<motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={{
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    }}
></motion.div>
```

    initial -> the initial state
    whileInView -> the state when the element enters/leaves viewport
    viewport -> defines how the viewport is detected, once half of div is visible

    variatns -> sets of predefined targets - makes it possible to have a whole set of animations by naming them with one overreaching name, ex. hidden, visible

- basis (flex-basis) is a better alternative than width to use for determining the initial size of flex items. Rule of thumb -> if you have a flex item, this div's children's size (width) should be set via basis.

- Why do we need JSX?
    JSX is a superset of Javascript (JS + XML). It was developed by Meta for string interpolation /combining logic and markup/. It can be used in React, but also plain Javascript will do the same. Some schools of thaught advocate the use of JSX for components and that be separate from the JS files that deal with hooks, contexts and other logical structures.

- JIT:
    If you are using the Next.js App Router, you do not need to set the JIT mode of Tailwind CSS as it is automatically enabled by Next.js. This is because Next.js uses the new Just-in-Time (JIT) engine by default, which allows for faster and more optimized CSS loading.

- Relative div and absolute pseudo ::before ::after:

```sh const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;```

The before pseudo-element is absolute relative to the div in whose className it is declared.

- Tailwind filters:
    PHIND: In summary, while it is not necessary to state "filter" in Tailwind code to have access to filters, you can use the filter utility to enable filters and customize them further. 
