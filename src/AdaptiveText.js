import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

const AdaptiveText = ({
  color = 'inherit',
  containerWidth = '100%',
  fontFamily = 'inherit',
  fontSizeMax,
  fontSizeMin,
  fontStyle = 'inherit',
  fontWeight = 'inherit',
  text,
  textDecoration = 'inherit',
}) => {
  const wrapperEl = useRef();
  const textEl = useRef();

  const [textStyle, setTextStyle] = useState({
    opacity: 0,
    whiteSpace: 'nowrap',
  });

  const wrapperStyle = {
    color: color,
    display: 'block',
    fontFamily: fontFamily,
    fontStyle: fontStyle,
    fontWeight: fontWeight,
    textAlign: 'center',
    textDecoration: textDecoration,
    width: containerWidth,
  };

  useEffect(() => setTextStyle({
      fontSize: getFontSize(fontSizeMax, fontSizeMin),
    }),
    [containerWidth, fontSizeMax, fontSizeMin, text],
  );

  const getFontSize = (fontSizeMax, fontSizeMin) => {
    const wrapperWidth = wrapperEl.current.offsetWidth;
    const textWidth = textEl.current.offsetWidth;
    const fontSizeRefPx = window.getComputedStyle(textEl.current).getPropertyValue('font-size');
    const fontSizeRef = parseFloat(fontSizeRefPx);
    const fontSize = Math.floor(fontSizeRef * wrapperWidth) / Math.ceil(textWidth);
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