import { Box } from "components/Box";
import { Link, Container, HomeTitle } from "pages/HomePage/HomePage.styled";
import { useAuth } from "hooks";


const HomePage = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Box as="main"
            display="flex"
            justifyContent="center"
            alignItems="center"
            p={200}
            color="text"
        >
            <Container>
                {isLoggedIn ? (
                    <HomeTitle>Thank you for being with us! Now you can use <Link to="contacts"> Phonebook </Link> completely!
                </HomeTitle>
                ) : (
                    <HomeTitle>Dear, Guest, welcome to Phonebook! If you want to proceed, please ,
                    <Link to="register"> Sign up </Link> or
                    <Link to="login"> Log in </Link>!
                </HomeTitle>    
                )}
            </Container>
        </Box>
    );
};

export default HomePage;