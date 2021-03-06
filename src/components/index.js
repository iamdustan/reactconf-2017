import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const blink = keyframes`
  0 {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  50.1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;


export const FullScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.background};
`;

export const Title = styled.div`
  font-size: 144px;
  font-weight: bold;
`;

Title.Centered = styled.div`
  font-size: 144px;
  font-weight: bold;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

Title.Small = styled.div`
  font-size: 72px;
  font-weight: bold;
`;

export const Centered = styled.div`
  position: fixed;
  text-align: center;
  top: 50%;
  transform: translate(0, -50%);
  width: 100%;
`;

export const Fade = styled.div`
  opacity: 0;
  animation-fill-mode: forwards;
  animation-duration: ${props => typeof props.duration === 'number' ? props.duration : 5}s;
  animation-name: ${fadeIn};
  animation-timing-function: ease;
  animation-delay: ${props => typeof props.delay === 'number' ? props.delay : 0}s;
`;

export const BlendedImage = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: ${props => props.backgroundSize};
  background-position: 100% 100%;
  background-blend-mode: color-burn;
  background-color: ${props => props.backgroundColor || 'inherit'}
`;

export const Blink = styled.div`
  display: inline;
  opacity: 0;
  animation-fill-mode: forwards;
  animation-duration: ${props => typeof props.duration === 'number' ? props.duration : 1}s;
  animation-name: ${blink};
  animation-iteration-count: infinite;
`;

