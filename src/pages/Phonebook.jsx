import { Filter } from '../components/Filter';
import { ContactList } from '../components/ContactList';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const styles = {
  phonebookContainer: ['pt-10'].join(' '),
  phonebook: ['text-5xl', 'pb-14', 'text-center', 'uppercase'].join(' '),
  contacts: ['text-3xl', 'pb-4', 'pt-10', 'text-center'].join(' '),
};

const Phonebook = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div className={styles.phonebookContainer}>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>
      </HelmetProvider>

      <h2 className={styles.phonebook}>Phonebook</h2>

      <Filter />
      {isLoading ? <p>Loading contacts...</p> : <ContactList />}
      {error && <p>Data loading error</p>}
    </div>
  );
};

export default Phonebook;