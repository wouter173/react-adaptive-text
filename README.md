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
        text="This text fills 80% width of its container!"
        width="80%"
      />
    </div>
  );
}
```

## Options

|Name|Type|Required|Description|
|-|:-:|:-:|-|
|color|CSS property||Overrides `color` inheritance|
|fontFamily|CSS property||Overrides `font-family` inheritance|
|fontSizeMax|integer||Maximum font size (in pixels)|
|fontSizeMin|integer||Minimum font size (in pixels)|
|fontStyle|CSS property||Overrides `font-style` inheritance|
|fontWeight|CSS property||Overrides `font-weight` inheritance|
|text|String|*|Text to display|
|textDecoration|CSS property||Overrides `text-decoration` inheritance|
|width|CSS property||Overrides `width` inheritance *(default: `100%`)*|

