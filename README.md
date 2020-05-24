# Adaptive text React component

Simple UI component that allows the font size of a text to adapt automatically to fill the width of an element.

## Prerequisites

- react >= 16.8.0

## Install

`npm install --save react-adaptive-text`

## Usage example

```
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
}
```

## Options

||||
|-|:-:|-|
|**color** *(Optional)*|CSS property|Overrides `color` inheritance|
|**fontFamily** *(Optional)*|CSS property|Overrides `font-family` inheritance|
|**fontSizeMax** *(Optional)*|integer|Maximum font size (in pixels)|
|**fontSizeMin** *(Optional)*|integer|Minimum font size (in pixels)|
|**fontStyle** *(Optional)*|CSS property|Overrides `font-style` inheritance|
|**fontWeight** *(Optional)*|CSS property|Overrides `font-weight` inheritance|
|**text**|string|Text to display|
|**textDecoration** *(Optional)*|CSS property|Overrides `text-decoration` inheritance|
|**width** *(Optional)*|CSS property|Overrides `width` inheritance *(default: `100%`)*|

