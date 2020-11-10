// import React, { Fragment , useContext,useEffect} from 'react'
// import ContactContext from '../../context/Contact/ContactContext';
// import ContactItem from './ContactItem';
// //import spinner from '../../components/layouts/Spinner'


// export const Contacts = () => {
//   const contactContext= useContext(ContactContext);
//   const {getContacts,loading,contacts,filtered}=contactContext;
//   useEffect(()=>{
//     getContacts();
//     // eslint-disable-next-line
//   },[]);
//   if(contacts!== null && contacts.length===0 && !loading){
//     return <h4>Pleasse add a contact</h4>
//   }
//   return (
//     <Fragment>
//       {filtered !== null ? filtered.map(contact=> (<ContactItem key={contact.id} 
//       contact={contact}/>)) : contacts.map(contact=>(
//         <ContactItem key={contact.id} contact={contact}/>
//       ))}
      
//     </Fragment>
//   )
// }

// export default Contacts;
import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import Spinner from '../layouts/Spinner';
import ContactContext from '../../context/Contact/ContactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;
