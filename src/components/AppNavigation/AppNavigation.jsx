import { Navigation, Link } from "./AppNavigation.styled";

const AppNavigation = () => {
    return (
        <Navigation>
            <Link to="/">Home</Link>
            <Link to="/contacts">Contacts</Link>
        </Navigation>
    );
};

export default AppNavigation;