import { Box } from "components/Box";
import ContactForm from "components/ContactForm";
import Section from "components/Section";
import Filter from "components/Filter";
import ContactList from "components/ContactList";
import { PageTitle } from "./Contacts.styled";

const Contacts = () => {
    return (
        <Box as="main"
            maxWidth="600px"
            m="32px auto"
            p={4}
            borderRadius="8px"
            boxShadow="0px 5px 10px 2px rgba(45, 90, 124, 0.2)"
            backgroundColor="bgc"
        >
            <PageTitle>Phonebook</PageTitle>
            <ContactForm />
            <Section title="Contacts">
                <Filter />
                <ContactList />
            </Section>
        </Box>
    );
};

export default Contacts;