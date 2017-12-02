# react-resizable-textarea
Automatically resizes your text area to the amount you type.

![Example Gif](https://user-images.githubusercontent.com/15030491/33520883-7c6fa288-d7c3-11e7-90c0-6f0ffef8f5b4.gif)

## Install
`npm install react-resizable-textarea`

### Props
You can pass all custom props that you would normally do to a text area. This component will just pass them to the inner `textarea` as normal apart from the `style` attribute which will do a shallow merge.

### How to use
```js
import ResizableTextArea from 'react-resizable-textarea';

const MyComponent = () => (
  <ResizableTextArea placeholder="Add your text here..." />
);
```
