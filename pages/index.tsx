import Head from 'next/head';
import Container from '../components/common/container';
import styled from 'styled-components';
import withLoader from '../components/common/with-loader';
import ImageGrid from '../components/common/image-grid';

const StyledDescription = styled.p`
  padding-top: 6px;
`;

const API_URL = 'https://dog.ceo/api/breed/labrador/images/random/6';

export default function Home() {
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

          {withLoader(ImageGrid, API_URL)}
        </Container>
      </main>
    </>
  );
}
