import React from "react";
import { ContactRow } from "./";
const ContactList = (props) => {
    let contacts = props.contacts
    let selectContact = props.selectContact
    return (<div>
     <table>
    <tbody>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
      
      {
        contacts.map((contact) => {

          return(<ContactRow contact={contact} selectContact={selectContact} key={contact.id}/>)

        })
      }

     
    </tbody>
  </table>
</div>)
    
}

export default ContactList