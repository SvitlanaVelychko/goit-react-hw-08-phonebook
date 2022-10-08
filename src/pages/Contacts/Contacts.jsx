import { useEffect } from "react";
import { Box } from "components/Box";
import ContactForm from "components/ContactForm";
import Section from "components/Section";
import Filter from "components/Filter";
import ContactList from "components/ContactList";
import { useAuth } from "hooks";
import { PageTitle } from "./Contacts.styled";
import { useGetContactsQuery } from "redux/contactsSlice";
import Loader from "components/Loader";

const Contacts = () => {
    const { isLoggedIn } = useAuth();
    const { data: contacts, refetch } = useGetContactsQuery();

    useEffect(() => {
        if (isLoggedIn) {
            refetch();
        }
    }, [isLoggedIn, refetch]);
    

    return contacts ? (
        <Box as="main"
            maxWidth="600px"
            m="32px auto"
            p={4}
            borderRadius="8px"
            boxShadow="0px 5px 10px 2px rgba(45, 90, 124, 0.2)"
            backgroundColor="bgcolor"
        >
            <PageTitle>Phonebook</PageTitle>
            <ContactForm />
            <Section title="Contacts">
                <Filter />
                <ContactList />
            </Section>
        </Box>
    ):(<Loader />);
};

export default Contacts;