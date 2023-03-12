import Time from 'components/time/time';
import {
  Container,
  HomeIconBar,
  LinkStyled,
  ButtonPhone,
  ButtonMessaage,
  IconPhone,
  IconMessage,
  ButtonMedia,
  ButtonYoutube,
  IconChrome,
  IconYouTube,
} from './home.styled';

export default function Home() {
  return (
    <Container>
      <Time />
      <HomeIconBar>
        <LinkStyled to="/phonebook">
          <ButtonPhone>
            <IconPhone />
          </ButtonPhone>
        </LinkStyled>

        <LinkStyled>
          <ButtonMessaage disabled>
            <IconMessage />
          </ButtonMessaage>
        </LinkStyled>

        <LinkStyled>
          <ButtonMedia disabled>
            <IconChrome />
          </ButtonMedia>
        </LinkStyled>

        <LinkStyled to="/youtube">
          <ButtonYoutube>
            <IconYouTube />
          </ButtonYoutube>
        </LinkStyled>
      </HomeIconBar>
    </Container>
  );
}
