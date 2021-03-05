import {
    Nav,
    SubContainer,
    LogoWrapper,
    Logo,
    ButtonsWrapper,
    Button,
    InputWrapper,
    SearchInput,
    IconWrapper,
    Icon,
} from "../../styles/styledNavbar";

const Navbar = () => {
    return (
        <Nav>
            <SubContainer>
                <LogoWrapper>
                    <Logo>Newsbuzz</Logo>
                </LogoWrapper>
                <ButtonsWrapper>
                    <Button className="loginBtn">Login</Button>
                    <Button>Register</Button>
                </ButtonsWrapper>

                <InputWrapper>
                    <Icon className="searchIcon" src="/images/search.png" alt="Search Icon" />
                    <SearchInput placeholder="Search league or team" />
                </InputWrapper>
                <IconWrapper>
                    <Icon src="/images/burger.png" alt="Responsive Icon" />
                </IconWrapper>
            </SubContainer>
        </Nav>
    )
}

export default Navbar
