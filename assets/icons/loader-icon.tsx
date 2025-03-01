import styled, { keyframes } from 'styled-components';

const spinningAnim = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSvg = styled.svg`
  animation: ${spinningAnim} 1s linear infinite;
`;

type Props = {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
};

const LoaderIcon = ({ width = 20, height = 20, color = '#383838', className }: Props) => {
  return (
    <StyledSvg
      width={width}
      height={height}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.44317 2.9193C7.587 3.23309 7.44921 3.60406 7.13543 3.74788C5.70939 4.4015 4.54976 5.52315 3.84904 6.92664C3.14831 8.33013 2.94863 9.93106 3.28313 11.4637C3.61764 12.9963 4.46621 14.3684 5.688 15.3523C6.90979 16.3362 8.43131 16.8727 10 16.8727C11.5687 16.8727 13.0902 16.3362 14.312 15.3523C15.5338 14.3684 16.3824 12.9963 16.7169 11.4637C17.0514 9.93106 16.8517 8.33013 16.151 6.92664C15.9968 6.61782 16.1222 6.24247 16.431 6.08828C16.7398 5.93409 17.1152 6.05945 17.2693 6.36827C18.0975 8.02695 18.3335 9.91895 17.9381 11.7302C17.5428 13.5415 16.54 15.1631 15.096 16.3259C13.6521 17.4887 11.8539 18.1227 10 18.1227C8.1461 18.1227 6.34793 17.4887 4.904 16.3259C3.46007 15.1631 2.45721 13.5415 2.06188 11.7302C1.66656 9.91895 1.90255 8.02695 2.73068 6.36827C3.55881 4.7096 4.92928 3.38402 6.61459 2.61156C6.92838 2.46773 7.29935 2.60551 7.44317 2.9193Z'
        fill={color}
      />
    </StyledSvg>
  );
};

export default LoaderIcon;
