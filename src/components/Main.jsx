import React, { useEffect, useState } from 'react';
// import dummyContacts from '../dummyData/index'
import { ContactList } from "./";
import { SingleContact } from "./";

const Main = () => {

  const [contacts, setContacts] = useState([])
  const [selectedContact, setSelectedContact] = useState({})

  const BASE_URL = 'http://jsonplace-univclone.herokuapp.com/users'

  const getContacts = async () => {

    try{
      
      let response = await fetch(BASE_URL)
      let crackedResponse = await response.json()
  
      setContacts(crackedResponse)
    } catch(error) {
      console.log('suck my ass')
    }

  }

  const selectContact = async (contactId) => {

    try{

      let response = await fetch(`${BASE_URL}/${contactId}`)
      let result = await response.json()

      setSelectedContact(result)

    } catch (error) {
      console.log(error.message)
    }

  }

  useEffect(() => {

    getContacts()

  }, [])

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
      {

        selectedContact.id ? <SingleContact selectedContact={selectedContact}/> : <ContactList contacts={contacts} selectContact={selectContact}/>

      }
      </div>
      
    </div>
  );
};

export default Main;
