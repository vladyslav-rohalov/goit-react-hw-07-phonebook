import {
  Container,
  BottomBlock,
  LinkStyled,
  ButtonPhone,
  ButtonMessaage,
  IconPhone,
  IconMessage,
  ButtonMedia,
  IconChrome,
  IconYouTube,
} from './home.styled';

export default function Home() {
  return (
    <Container>
      <BottomBlock>
        <LinkStyled to="/phonebook">
          <ButtonPhone>
            <IconPhone />
          </ButtonPhone>
        </LinkStyled>

        <LinkStyled>
          <ButtonMessaage>
            <IconMessage />
          </ButtonMessaage>
        </LinkStyled>

        <LinkStyled>
          <ButtonMedia>
            <IconChrome />
          </ButtonMedia>
        </LinkStyled>

        <LinkStyled>
          <ButtonMedia>
            <IconYouTube />
          </ButtonMedia>
        </LinkStyled>
      </BottomBlock>
    </Container>
  );
}
