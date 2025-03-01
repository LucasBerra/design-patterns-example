import { useState, useEffect } from 'react';
import Head from 'next/head';
import Container from '../components/common/container';
import styled from 'styled-components';
import { MD_MIN_MEDIA_QUERY, SM_MIN_MEDIA_QUERY } from '../styles/theme';
import withLoaderGrid from '../components/common/with-loader-grid';

const StyledDescription = styled.p`
  padding-top: 6px;
`;

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

export default function Home() {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('https://dog.ceo/api/breed/labrador/images/random/6');
      const data = await response.json();
      setImageData(data.message); // Update state with the fetched images
    };

    fetchImages();
  }, []);

  return (
    <>
      <Head>
        <title>High Order Component (HOC) example</title>
        <meta name='description' content='Index page for Litebox High Order Component (HOC) example' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Container>
          <h1>High Order Component (HOC) example</h1>
          <StyledDescription>
            Images will be fetched and have two HOC wrappers, one for adding a loader and another one for showing the
            Image&apos;s url.
          </StyledDescription>

          {withLoaderGrid(StyledGrid, imageData)}
        </Container>
      </main>
    </>
  );
}
