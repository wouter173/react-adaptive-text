# AdaptiveText React component

Simple UI component that allows the font size of a text to adapt automatically to fill the width of an element in one line.

![AdaptiveText render example](./img1.jpg)


## Prerequisites

- react >= 16.8.0

## Install

`npm install --save react-adaptive-text`

## Usage example

```js
import React from 'react';
import AdaptiveText from 'react-adaptive-text';

function BasicExample = () => {
  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: 500,
  };

  return (
    <div style={wrapperStyle}>
      <AdaptiveText
        width="80%"
        text="This text fills 80% width of its container!"
      />
    </div>
  );
};
```

## Options

|Property|Type|Description|
|-|:-:|-|
|**color** *(Optional)*|CSS value|Overrides `color` inheritance|
|**fontFamily** *(Optional)*|CSS value|Overrides `font-family` inheritance|
|**fontSizeMax** *(Optional)*|integer|Maximum font size (in pixels)|
|**fontSizeMin** *(Optional)*|integer|Minimum font size (in pixels)|
|**fontStyle** *(Optional)*|CSS value|Overrides `font-style` inheritance|
|**fontWeight** *(Optional)*|CSS value|Overrides `font-weight` inheritance|
|**text**|string|Text to display|
|**textDecoration** *(Optional)*|CSS value|Overrides `text-decoration` inheritance|
|**width** *(Optional)*|CSS value|Overrides `width` inheritance *(default: `100%`)*|