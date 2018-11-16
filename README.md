# WIP

This library is currently work in progress and marked as an aplha release.


# How to use

Comming soon...


# Contributing

New components can be added through if they fulfill the following requirements:

- [ ] A similar component does not already exist in the library.
- [ ] The component is generic and can be used in most applications.
- [ ] The component is not dependent upon any other UI library.


## Guidelines

* Component names should be generic.
* No colors should be defined within a component, instead default props for themeing should be used.
* Colors should be named with a keyword, the keyword should not be based on color (with exception for white and black) neither should they be named based on appearance. Colors in a different tint or shade should be named with the keyword first follow by a number representing the percentage difference in lightness in the HSL space, example black30 or primary80.

## Development

We use React Storybook for development and documentation.

Start React Storybook: `npm run storybook`

Storybook is availaible at http://localhost:9001

Build: `npm run build`