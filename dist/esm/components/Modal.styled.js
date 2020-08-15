import styled, { css, keyframes } from "styled-components";
const fadeIn = {
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
};
const fadeOut = {
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  }
};

const scale3d = (a, b, c) => `scale3d(${a}, ${b}, ${c})`;

const zoomIn = {
  from: {
    opacity: 0,
    transform: scale3d(0.3, 0.3, 0.3)
  },
  "50%": {
    opacity: 1
  }
};
const zoomOut = {
  from: {
    opacity: 1
  },
  "50%": {
    opacity: 0,
    transform: scale3d(0.3, 0.3, 0.3)
  },
  to: {
    opacity: 0
  }
};
const fadeInAnimation = keyframes`${fadeIn}`;
const fadeOutAnimation = keyframes`${fadeOut}`;
const zoomInAnimation = keyframes`${zoomIn}`;
const zoomOutAnimation = keyframes`${zoomOut}`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  max-width: 100%;
  max-height: 100%;
  z-index: ${props => props.zIndex};
  box-sizing: border-box;

  ${props => !props.isOverlay && css`
      // top: 50%;
      // left: 50%;
      // transform: translate(-50%, -50%);
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      overflow: auto;
    `}

  ${props => props.isOverlay && css`
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
    `}
`;
export const Overlay = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: ${props => props.padding};
  overflow: auto;
  background: ${props => props.background};
  box-sizing: border-box;
  // opacity: 0;


  ${props => props.isVisible && css``}
    ${props => props.isOpening && css`
        animation: ${props => props.openingDuration}ms
          ${fadeInAnimation};
        animation-fill-mode: both;
      `}
      ${props => props.isClosing && css`
          animation: ${props => props.closingDuration}ms
            ${fadeOutAnimation};
          animation-fill-mode: both;
        `};
`;
export const Panel = styled.div`
  position: relative;
  display: block;
  margin: auto;
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  border-radius: ${props => props.borderRadius};
  border: ${props => props.border};
  background: ${props => props.background};
  box-shadow: ${props => props.boxShadow};
  box-sizing: border-box;
  // opacity: 0;

  ${props => props.isVisible && css``}

  ${props => props.isOpening && css`
      animation: ${props => props.openingDuration}ms
        ${zoomInAnimation};
      animation-fill-mode: both;
    `}
      ${props => props.isClosing && css`
          animation: ${props => props.closingDuration}ms
            ${zoomOutAnimation};
          animation-fill-mode: both;
        `};

  ${props => props.isRestrictedSize && css`
      max-width: ${props => props.restrictedWidth};
      max-height: ${props => props.restrictedHeight};
      overflow: auto;
    `}
`;
export const Close = styled.div`
  position: absolute;
  top: 0;
  left: initial;
  right: 0;
  bottom: initial;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  cursor: pointer;
`;
export const CloseIcon = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;
//# sourceMappingURL=Modal.styled.js.map