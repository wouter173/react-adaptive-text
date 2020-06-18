import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
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
    color: color,
    display: 'block',
    fontFamily: fontFamily,
    fontStyle: fontStyle,
    fontWeight: fontWeight,
    textAlign: 'center',
    textDecoration: textDecoration,
    width: width,
  };
  
  useEffect(() => {
    if (!text) {
      console.error('AdaptiveText: Prop \'text\' is required');
    } else {
      const fontSizeRefPx = window.getComputedStyle(textEl.current).getPropertyValue('font-size');
      const fontSizeRef = parseFloat(fontSizeRefPx);
      const textWidthRef = textEl.current.offsetWidth === 0 ? 1 : textEl.current.offsetWidth;
      setFontSizeRef(fontSizeRef);
      setTextWidthRef(textWidthRef);
      textEl.current.style.whiteSpace = null;
      setTextStyle({
        fontSize: getFontSize(text, fontSizeRef, textWidthRef, fontSizeMax, fontSizeMin),
      });
    }
  }, [fontSizeMax, fontSizeMin, text, width]);
  
  useResize(() => setTextStyle({
    fontSize: getFontSize(text, fontSizeRef, textWidthRef, fontSizeMax, fontSizeMin),
  }));
  
  const getFontSize = (text, fontSizeRef, textWidthRef, fontSizeMax, fontSizeMin) => {
    textEl.current.style.display = 'none';
    const wrapperWidth = wrapperEl.current.clientWidth;
    if (!text || text.length <= 0) {
      return 0;
    }
    const fontSize = (fontSizeRef * wrapperWidth / textWidthRef) - 1;
    textEl.current.style.display = null;
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

export default AdaptiveText;