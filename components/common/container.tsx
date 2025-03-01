import { HTMLAttributes, ReactNode, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { LG_MIN_MEDIA_QUERY, MD_MIN_MEDIA_QUERY, SM_MIN_MEDIA_QUERY } from '../../styles/theme';

const StyledContainer = styled.div<{ $removePadding: boolean }>`
  position: relative;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;

  ${SM_MIN_MEDIA_QUERY} {
    max-width: ${({ theme }) => theme.breakpoints.sm};
    padding: 0 20px;
  }
  ${MD_MIN_MEDIA_QUERY} {
    max-width: ${({ theme }) => theme.breakpoints.md};
    padding: 0 60px;
  }
  ${LG_MIN_MEDIA_QUERY} {
    max-width: ${({ theme }) => theme.breakpoints.lg};
    padding: 0 30px;
  }

  ${({ $removePadding }) =>
    $removePadding &&
    css`
      padding: 0px;

      ${SM_MIN_MEDIA_QUERY} {
        max-width: 768px;
        padding: 0px;
      }
      ${MD_MIN_MEDIA_QUERY} {
        max-width: 1024px;
        padding: 0px;
      }
      ${LG_MIN_MEDIA_QUERY} {
        max-width: 1440px;
        padding: 0px;
      }
    `}
`;

type Props = {
  children: ReactNode;
  className?: string;
  removePadding?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const Container = forwardRef<HTMLDivElement, Props>(({ children, className, removePadding = false, ...props }, ref) => {
  return (
    <StyledContainer {...props} className={className} $removePadding={removePadding} ref={ref}>
      {children}
    </StyledContainer>
  );
});

Container.displayName = 'Container';

export default Container;
