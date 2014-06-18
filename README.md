# shortcuts

Adds custom keyboard shortcuts as directives using [yields/k]

```js
var ripple = require('ripple');
var keys = require('shortcuts');

var View = ripple('<input on-send="{{this.submit}}" on-cancel="{{this.cancel}}" />')
  .use(keys('send', 'shift + enter'))
  .use(keys('cancel', 'escape'))
```

## Install

```
component install ripplejs/shortcuts
```

## Usage

### keys(name, combo)

Add a new event called `name` that will add a directive called `on-NAME` when the keys in `combo` are pressed. See [yields/k] for more information.

### keys(name)

Same as above, but defaults the keys to be the name. So instead of doing:

```js
keys('enter', 'enter')
```

To create an `on-enter` directive, just do:

```js
keys('enter')
```