# uuid-generator

An UUID v4 generator as a plain web component and an ES module. Made for a web browser.

[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/uuid-generator.svg)](https://www.npmjs.com/package/@advanced-rest-client/uuid-generator)

[![Build Status](https://travis-ci.com/advanced-rest-client/uuid-generator.svg)](https://travis-ci.com/advanced-rest-client/uuid-generator)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/advanced-rest-client/uuid-generator)

## Usage

### Installation

```sh
npm install --save @advanced-rest-client/uuid-generator
```

### As a module

```javascript
  import { v4 } from '@advanced-rest-client/uuid-generator';
  console.log(v4());
```

### In an html file (web component)

```html
<html>
  <head>
    <script type="module">
      import '@advanced-rest-client/uuid-generator';
    </script>
  </head>
  <body>
    <uuid-generator id="uuid"></uuid-generator>
    <script>
    console.log(uuid.generate());
    </script>
  </body>
</html>
```

### In a LitElement

```js
import { LitElement, html } from 'lit-element';
import { v4 } from '@advanced-rest-client/uuid-generator';

class SampleElement extends LitElement {
  render() {
    return html`my component`;
  }

  _someOperation() {
    const uuid = v4();
  }
}
customElements.define('sample-element', SampleElement);
```

### Browser or a web worker

For historic reasons the `index.js` file contains an export for both the `v4` function but also the web component. When using this module in a web worker or in Node this would cause an error.
Instead import the module with the `main.js` file. For compatibility this file is not set as the `module` in the `package.json` file.

```javascript
import { v4 } from '@advanced-rest-client/uuid-generator/main.js';
```

## Development

```sh
git clone https://github.com/advanced-rest-client/uuid-generator
cd uuid-generator
npm install
```

### Running the demo locally

```sh
npm start
```

### Running the tests

```sh
npm test
```
