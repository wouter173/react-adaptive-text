import React, { useEffect, useRef, useState } from 'react';

const AdaptiveText = ({
  color,
  fontFamily,
  fontSizeMax,
  fontSizeMin,
  fontStyle,
  fontWeight,
  text,
  textDecoration,
  width = '100%'
}) => {
  const wrapperEl = useRef();
  const textEl = useRef();
  const [textStyle, setTextStyle] = useState({
    opacity: 0,
    whiteSpace: 'nowrap'
  });
  const wrapperStyle = {
    display: 'block',
    textAlign: 'center'
  };

  const addStyle = (styleProp, propName) => {
    if (styleProp && typeof styleProp !== 'undefined') {
      wrapperStyle[propName] = styleProp;
    }
  };

  addStyle(color, 'color');
  addStyle(fontFamily, 'fontFamily');
  addStyle(fontStyle, 'fontStyle');
  addStyle(fontWeight, 'fontWeight');
  addStyle(textDecoration, 'textDecoration');
  addStyle(width, 'width');
  useEffect(() => setTextStyle({
    fontSize: getFontSize(fontSizeMax, fontSizeMin)
  }), [fontSizeMax, fontSizeMin, text, width]);

  const getFontSize = (fontSizeMax, fontSizeMin) => {
    const wrapperWidth = wrapperEl.current.offsetWidth;
    const textWidth = textEl.current.offsetWidth;
    const fontSizeRefPx = window.getComputedStyle(textEl.current).getPropertyValue('font-size');
    const fontSizeRef = parseFloat(fontSizeRefPx);
    const fontSize = Math.floor(Math.floor(fontSizeRef) * Math.floor(wrapperWidth)) / Math.ceil(textWidth);

    if (fontSize > fontSizeMax) {
      return fontSizeMax;
    }

    if (fontSize < fontSizeMin) {
      return fontSizeMin;
    }

    return fontSize;
  };

  return /*#__PURE__*/React.createElement("span", {
    ref: wrapperEl,
    style: wrapperStyle
  }, /*#__PURE__*/React.createElement("span", {
    ref: textEl,
    style: textStyle
  }, text));
};

export default AdaptiveText;
