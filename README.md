# postcss-pr

PostCSS plugin that defines a `pr` unit that transforms a value in px to output its equivalent in rem.

**Write this:**

```css
:root {
  font: 16px / 1.5 "Helvetica", "Arial", sans-serif;
}

section {
  margin-bottom: 24pr;
  padding-top: 32pr;
}
```

**And get this:**

```css
:root {
  font: 16px / 1.5 "Helvetica", "Arial", sans-serif;
}

section {
  margin-bottom: 1.5rem;
  padding-top: 2rem;
}
```

## Installation

`$ npm install postcss-pr`

## Usage

```JS
postcss([ require('postcss-pr') ])
```

See [PostCSS](https://github.com/postcss/postcss) docs for examples for your environment.

## Options

### `rootSelector`

- Type: `string`
- Default: `:root`

The selector where the font-size is set.

### `unit`

- Type: `string`
- Default: `pr`

The unit to be used in your CSS.

### `fontSize`

- Type: `number`
- Default: `16`

The default root font size. Used **only** when a font size definition in the root element is not found.

## License

MIT - James Kolce
