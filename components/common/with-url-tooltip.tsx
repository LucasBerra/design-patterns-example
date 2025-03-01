import Image from 'next/image';
import Tooltip from './tooltip';
import styled from 'styled-components';

const StyledTooltip = styled(Tooltip)`
  width: 100%;
  height: 100%;

  &:hover {
    & > summary {
      display: block;
    }
  }
`;

const WithUrlTooltip = (Element: typeof Image, data: string) => {
  return (
    <StyledTooltip position='bottom' label={`url: ${data}`}>
      <Element src={data} alt={`Dog image - ${Image}`} fill />
    </StyledTooltip>
  );
};

export default WithUrlTooltip;
