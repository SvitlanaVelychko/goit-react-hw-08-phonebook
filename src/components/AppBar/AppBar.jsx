import AppNavigation from "components/AppNavigation";
import UserMenu from "components/UserMenu";
import AuthNav from "components/AuthNav";
import { Header } from "./AppBar.styled";

const AppBar = () => {
    return (
        <Header>
            <AppNavigation />
            <UserMenu />
            <AuthNav />
        </Header>
    );
};

export default AppBar;