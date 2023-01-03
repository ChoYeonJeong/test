import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { carrieLogo, wallet } from "assets/images";
import { PAGE_MENUS } from "utils/constants/arrayConstants";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <StyledHeader>
      <Link href="/">
        <Image height={80} src={carrieLogo} alt="logo" />
      </Link>
      <ul>
        {PAGE_MENUS.map((menu) => (
          <Link key={menu.id} href={menu.path}>
            <StyledList clickedPath={menu.path} pathname={router.asPath}>
              {menu.name}
            </StyledList>
          </Link>
        ))}
      </ul>
      <Image height={45} src={wallet} alt="wallet" />
    </StyledHeader>
  );
};
export default Header;

const StyledHeader = styled.header`
  ${({ theme }) => theme.layout.flexCenterY};
  justify-content: space-around;
  position: fixed;
  height: 100px;
  width: 100%;
  background: ${({ theme }) => theme.colors.main};
  ul {
    ${({ theme }) => theme.layout.flexCenterY};
    height: 100%;
    gap: 100px;
  }
  img {
    cursor: pointer;
  }
`;

const StyledList = styled.li<{ pathname: string; clickedPath: string }>`
  color: ${({ pathname, clickedPath, theme }) =>
    pathname === clickedPath ? theme.colors.hover : ""};

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`;
