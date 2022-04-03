# @devteks/cursor

> Hide, show and toggle terminal cursor


## how to use

```
$ npm install @devteks/cursor --save
```

# Usage:

import:
```javascript
const { showCursor, hideCursor, toggleCursor } = require('@devteks/cursor');
// OR
import { showCursor, hideCursor, toggleCursor } from '@devteks/cursor';
```
    
```javascript
async function main() {
    hideCursor();
    // process some thing
}

main();
// when the process exits the cursor will be shown again
```
