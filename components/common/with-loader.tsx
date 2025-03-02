import { JSX, useEffect, useState } from 'react';
import styled from 'styled-components';
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

const WithLoader = (Element: JSX.ElementType, url: string) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    };

    fetchImages();
  }, [url]);

  console.log(data);
  if (!data) {
    return (
      <StyledLoaderWrapper>
        Loading <LoaderIcon width={42} height={42} />
      </StyledLoaderWrapper>
    );
  }

  return <Element data={data} />;
};

export default WithLoader;
