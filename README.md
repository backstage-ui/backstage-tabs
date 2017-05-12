# backstage-tabs

Backstage React tabs component

## Installing

```bash
$ npm install backstage-tabs --save
```

### Required Props

* `tabs`: Array of objects to set all tab items of Tabs component:
    * `label`: label displayed on the tab,
    * `value`: the identifier of the tab.
* `activeTab`: current active tab;

### Props
* `onClickTab`: callback called when the user clicks any tab;
* `className`: custom CSS class to the component;
* `large`: shows the component in a large size;
* `small`: shows the component in a small size;

## Example

```js
import React from 'react';
import { render } from 'react-dom';
import Dropdown from 'backstage-tabs';


const TABS = [
  {value: "grape", label: "Grape"},
  {value: "apple", label: "Apple"},
  {value: "mango", label: "Mango"},
  {value: "tangerine", label: "Tangerine"},
];

render(<Tabs options={TABS} activeTab='grape' />, document.getElementById('container'));
```
