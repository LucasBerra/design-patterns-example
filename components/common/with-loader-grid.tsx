import Link from 'next/link';
import { JSX } from 'react';
import styled from 'styled-components';
import { LG_MIN_MEDIA_QUERY, SM_MIN_MEDIA_QUERY } from '../../styles/theme';
import withUrlTooltip from './with-url-tooltip';
import Image from 'next/image';
import LoaderIcon from '../../assets/icons/loader-icon';

const StyledLoaderWrapper = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25em;
  margin: 36px auto;
  font-size: 42px;
  text-align: center;
  min-height: 200px;

  path {
    fill: ${({ theme }) => theme.colors.snow};
  }
`;

const StyledImgWrapper = styled(Link)`
  height: 220px;
  width: 100%;
  width: fit-content;
  position: relative;
  margin: 0 auto;

  img {
    object-fit: contain;
    position: initial !important;
    border-radius: 10px;
  }

  ${SM_MIN_MEDIA_QUERY} {
    img {
      object-fit: cover;
    }
  }

  ${LG_MIN_MEDIA_QUERY} {
    height: 300px;
  }
`;

export default function withLoaderGrid(Element: JSX.ElementType, data: Array<string>) {
  if (data.length === 0) {
    return (
      <StyledLoaderWrapper>
        Loading <LoaderIcon width={42} height={42} />
      </StyledLoaderWrapper>
    );
  }

  return (
    <Element>
      {data.map(image => (
        <StyledImgWrapper href={image} target='_blank' key={image}>
          {withUrlTooltip(Image, image)}
        </StyledImgWrapper>
      ))}
    </Element>
  );
}
