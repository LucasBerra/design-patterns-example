import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { MD_MIN_MEDIA_QUERY } from '../../styles/theme';

interface TooltipProps {
  position: 'top' | 'bottom' | 'left' | 'right';
  outline: boolean;
}

const StyledTooltipContainer = styled.div<{
  disabled?: boolean;
  isHoverable: boolean;
  position: 'top' | 'bottom' | 'left' | 'right';
}>`
  position: relative;

  // summary is the element that is shown when the tooltip is not expanded
  & > summary {
    display: none;
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
  }
  ${MD_MIN_MEDIA_QUERY} {
    &:hover {
      & > summary {
        display: block;
      }
    }
  }

  ${({ disabled }) => disabled && '& > summary { display: none !important }'}

  ${({ isHoverable, position }) =>
    isHoverable &&
    css`
      & > summary {
        pointer-events: initial;
        user-select: initial;
      }
      &:hover {
        & > summary {
          display: block;
        }
      }
      .tooltip-summary {
        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: -1;
          opacity: 0;
          ${() => {
            switch (position) {
              case 'top':
                return `
                top: 18px;
                left: 0px;
                `;
              case 'bottom':
                return `
                bottom: 18px;
                left: 0px;`;
              case 'left':
                return `
                left: 18px;
                top: 0px;
                `;
              case 'right':
                return `
                right: 18px;
                top: 0px;`;
              default:
                return '';
            }
          }}
        }
      }
    `}
`;

const StyledTooltip = styled.summary<TooltipProps>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.sand};
  color: transparent;
  padding: 4px 8px;
  z-index: 1;
  ${({ outline }) => outline && 'border: 1px solid black;'}

  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.colors.sand};
    transform: rotate(45deg);
  }

  ${({ position, outline }) => {
    switch (position) {
      case 'top':
        return `
          bottom: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          &::before {
            top: calc(100% - 4px);
            left: 50%;
            margin-left: -4.5px;
            ${
              outline &&
              css`
                border-right: 1px solid black;
                border-bottom: 1px solid black;
                margin-left: -5px;
              `
            }
          }
        `;
      case 'bottom':
        return `
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          &::before {
            bottom: calc(100% - 4px);
            left: 50%;
            margin-left: -4px;
            ${
              outline &&
              css`
                border-left: 1px solid black;
                border-top: 1px solid black;
                margin-left: -4.5px;
              `
            }
          }
        `;
      case 'left':
        return `
          right: calc(100% + 8px);
          top: 50%;
          transform: translateY(-50%);
          &::before {
            left: calc(100% - 4px);
            top: 50%;
            margin-top: -4px;
            ${
              outline &&
              css`
                border-right: 1px solid black;
                border-top: 1px solid black;
                margin-top: -4.5px;
              `
            }
          }
        `;
      case 'right':
        return `
          left: calc(100% + 8px);
          top: 50%;
          transform: translateY(-50%);
          &::before {
            right: calc(100% - 4px);
            top: 50%;
            margin-top: -4px;
            ${
              outline &&
              css`
                border-left: 1px solid black;
                border-bottom: 1px solid black;
                margin-top: -4.5px;
              `
            }
          }
        `;
      default:
        return '';
    }
  }}
`;

const tooltipTextCss = css`
  font-size: 12px;
  line-height: 120%;
  font-weight: 600;
  font-style: normal;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  white-space: nowrap;
`;

const StyledTooltipTitle = styled.p`
  ${tooltipTextCss}
  font-weight: 600;
`;

const StyledTooltipText = styled.p`
  ${tooltipTextCss}
  font-weight: 400;

  a {
    color: ${({ theme }) => theme.colors.white};
    font-family: Inter, sans-serif;
    text-decoration: underline;
  }
`;

interface Props {
  title?: string;
  label: string;
  children: ReactNode;
  outline?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right';
  hidden?: boolean;
  className?: string;
  button?: ReactNode;
  isHoverable?: boolean;
}

const Tooltip: React.FC<Props> = ({
  position = 'top',
  outline,
  children,
  title,
  label,
  hidden,
  button,
  className,
  isHoverable,
}: Props) => {
  return (
    <StyledTooltipContainer
      disabled={hidden}
      isHoverable={!!isHoverable}
      position={position}
      className={`tooltip-container ${className}`}>
      {children}
      <StyledTooltip position={position} outline={!!outline} className='tooltip-summary'>
        {title && <StyledTooltipTitle className='tooltip-title'>{title}</StyledTooltipTitle>}
        <StyledTooltipText className='tooltip-text' dangerouslySetInnerHTML={{ __html: label as string }} />
        {button}
      </StyledTooltip>
    </StyledTooltipContainer>
  );
};

export default Tooltip;
