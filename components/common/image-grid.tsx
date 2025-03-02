import styled from 'styled-components';
import { LG_MIN_MEDIA_QUERY, MD_MIN_MEDIA_QUERY, SM_MIN_MEDIA_QUERY } from '../../styles/theme';
import Link from 'next/link';
import withTooltip from './with-tooltip';
import Image from 'next/image';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin: 36px auto;

  ${SM_MIN_MEDIA_QUERY} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${MD_MIN_MEDIA_QUERY} {
    grid-template-columns: repeat(3, 1fr);
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

type Props = {
  data: {
    message: string[];
  };
};

const ImageGrid = ({ data }: Props) => {
  console.log(data);
  return (
    <StyledGrid>
      {data.message.map(imageUrl => (
        <StyledImgWrapper href={imageUrl} target='_blank' key={imageUrl}>
          {withTooltip(<Image src={imageUrl} alt='Image' fill />, `<b>url</b>: ${imageUrl}`)}
        </StyledImgWrapper>
      ))}
    </StyledGrid>
  );
};

export default ImageGrid;
