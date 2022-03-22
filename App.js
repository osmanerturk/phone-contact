import { useState,useEffect } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
 const [contacts, setContacts] = useState([])

  useEffect(()=>{
    console.log(contacts);

}, [contacts])

 
  return (
    <div className="App">
      <ContactList contacts= {contacts} />

      <hr />
      <hr />

      <ContactForm setContacts={setContacts} contacts= {contacts}/>
    </div>
  );
}

export default App;
