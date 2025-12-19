import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
} from "@tabler/icons-react";
import styled from "styled-components";

function Footer() {
  return (
    <div className="grid-container">
      <div className="grid">
        <FooterContainer>
          <ContentDiv>
            <Header>Contact</Header>
            <ContactDetails>
              <p>Upliftr</p>
              <p>Marketing Agency</p>
              <p>We Uplift U</p>
            </ContactDetails>
            <ContactDetails>
              <Links href="mailto:dhirajkatkardrk@gmail.com">
                dhirajkatkardrk@gmail.com
              </Links>
            </ContactDetails>
            <ContactDetails>
              <Links href="tel:9769708255">9769708255</Links>
            </ContactDetails>
          </ContentDiv>
          <ContentDiv>
            <Header>Work with us</Header>
            <ContactDetails>
              We are always looking for new people to join our team!
            </ContactDetails>
            <ContactDetails>
              <Links href="mailto:dhirajkatkardrk@gmail.com">
                dhirajkatkardrk@gmail.com
              </Links>
            </ContactDetails>
          </ContentDiv>
          <ContentDiv>
            <Header>Social Media</Header>
            <SocialIcons>
              <Links href="#">
                <IconBrandFacebook size={25} />
              </Links>
              <Links href="https://www.instagram.com/upliftr.in?igsh=MTlvZ3d0YTAzNnpnaw==">
                <IconBrandInstagram size={25} />
              </Links>
              <Links href="#">
                <IconBrandLinkedin size={25} />
              </Links>
              <Links href="#">
                <IconBrandTwitterFilled size={25} />
              </Links>
            </SocialIcons>
          </ContentDiv>
        </FooterContainer>
      </div>
    </div>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--color-dark);
  padding: 3rem 0;
  margin-top: 1rem;

  @media (max-width: 990px) {
    flex-direction: column;
  }
`;

const ContentDiv = styled.div`
  flex: 1;
  text-align: left;
  margin-right: 6.5rem;

  @media (max-width: 790px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 600px) {
    margin-bottom: 0rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Header = styled.h4`
  margin-bottom: 0.5rem;
`;

const Links = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ContactDetails = styled.div`
  margin-bottom: 1rem;
  max-width: 300px;

  ${Links} {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Footer;
