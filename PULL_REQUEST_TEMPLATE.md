# Contributing

New components can be added through if they fulfill the following requirements:

- [ ] A similar component does not already exist in the library.
- [ ] The component is generic and can be used in most applications.
- [ ] The component is not dependent upon any other UI library.
- [ ] Component names are generic.
- [ ] No colors is defined within a component, instead default props for themeing should be used.
- [ ] Colors should be named with a keyword, the keyword should not be based on color (with exception for white and black) neither should they be named based on appearance. Colors in a different tint or shade should be named with the keyword first follow by a number representing the percentage difference in lightness in the HSL space, example black30 or primary80.
