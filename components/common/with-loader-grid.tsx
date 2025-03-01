import Link from 'next/link';
import { JSX } from 'react';
import styled from 'styled-components';
import { LG_MIN_MEDIA_QUERY, SM_MIN_MEDIA_QUERY } from '../../styles/theme';
import WithUrlTooltip from './with-url-tooltip';
import Image from 'next/image';

const StyledLoaderWrapper = styled.p`
  margin: 36px auto;
  font-size: 42px;
  text-align: center;
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
    return <StyledLoaderWrapper>Loading...</StyledLoaderWrapper>;
  }

  return (
    <Element>
      {data.map(image => (
        <StyledImgWrapper href={image} target='_blank' key={image}>
          {WithUrlTooltip(Image, image)}
        </StyledImgWrapper>
      ))}
    </Element>
  );
}
