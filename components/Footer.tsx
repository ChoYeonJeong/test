import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      i am footer
      <p>© 2023 CARRIEVERSE All rights reserved.</p>
    </StyledFooter>
  );
};
export default Footer;

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.main};
  height: 100px;
  width: 100%;
  position: absolute;
  bottom: 0;
`;
