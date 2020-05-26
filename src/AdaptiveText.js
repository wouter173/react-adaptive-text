import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { useResize } from './useResize.js';

const AdaptiveText = ({
  color,
  fontFamily,
  fontSizeMax,
  fontSizeMin,
  fontStyle,
  fontWeight,
  text,
  textDecoration,
  width = '100%',
}) => {
  const wrapperEl = useRef();
  const textEl = useRef();
  
  const [textStyle, setTextStyle] = useState({
    opacity: 0,
    whiteSpace: 'nowrap',
  });
  const [fontSizeRef, setFontSizeRef] = useState(0);
  const [textWidthRef, setTextWidthRef] = useState(0);
  
  const wrapperStyle = {
    display: 'block',
    textAlign: 'center',
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
  
  useEffect(() => {
    const fontSizeRefPx = window.getComputedStyle(textEl.current).getPropertyValue('font-size');
    const fontSizeRef = parseFloat(fontSizeRefPx);
    const textWidthRef = textEl.current.offsetWidth === 0 ? 1 : textEl.current.offsetWidth;
    setFontSizeRef(fontSizeRef);
    setTextWidthRef(textWidthRef);
    setTextStyle({
      fontSize: getFontSize(fontSizeRef, textWidthRef, fontSizeMax, fontSizeMin),
    });
  },
  [fontSizeMax, fontSizeMin, text, width]);

  useResize(() => setTextStyle({
    fontSize: getFontSize(fontSizeRef, textWidthRef, fontSizeMax, fontSizeMin),
  }));

  const getFontSize = (fontSizeRef, textWidthRef, fontSizeMax, fontSizeMin) => {
    const wrapperWidth = wrapperEl.current.offsetWidth;
    const fontSize = Math.floor(Math.floor(fontSizeRef) * Math.floor(wrapperWidth)) / Math.ceil(textWidthRef);
    if (fontSize > fontSizeMax) {
      return fontSizeMax;
    }
    if (fontSize < fontSizeMin) {
      return fontSizeMin;
    }
    return fontSize;
  };

  return (
    <span ref={wrapperEl} style={wrapperStyle}>
      <span ref={textEl} style={textStyle}>{text}</span>
    </span>
  );
};

AdaptiveText.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSizeMax: PropTypes.number,
  fontSizeMin: PropTypes.number,
  fontStyle: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  text: (props, propName, componentName) => {
    if (typeof props[propName] !== 'string') {
      return new Error(`Property '${propName}' supplied to ${componentName} is required and must be type of 'string'.`);
    }
    if (props[propName].length <= 0) {
      return new Error(`Property '${propName}' supplied to ${componentName} cannot be empty.`);
    }
  },
  textDecoration: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default AdaptiveText;