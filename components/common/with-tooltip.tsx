import Tooltip from './tooltip';
import styled from 'styled-components';

const StyledTooltip = styled(Tooltip)`
  width: 100%;
  height: 100%;

  &:hover {
    & > summary {
      display: block;
      padding: 8px 12px;
      width: max-content;
      max-width: calc(100vw - 48px);
      white-space: pre-wrap;
    }
  }
  .tooltip-text {
    white-space: pre-wrap;
    word-break: break-all;
    * {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

const withTooltip = (Element: JSX.Element, label: string) => {
  return (
    <StyledTooltip position='bottom' label={label} isHoverable>
      {Element}
    </StyledTooltip>
  );
};

export default withTooltip;
