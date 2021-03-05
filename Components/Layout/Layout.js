import { Navbar } from "..";
import { GlobalStyles } from "../../styles/GlobalStyles";
import {
    LayoutContainer,
    LayoutMain,
} from "../../styles/styledLayout";

const Layout = ({ children }) => {
    return (
        <LayoutContainer>
            <GlobalStyles />
            <Navbar />
            <LayoutMain>
                {children}
            </LayoutMain>
        </LayoutContainer>
    );
};

export default Layout;
