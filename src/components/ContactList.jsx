import React from "react";

const ContactList = (props) => {
    let contact = props.contacts
    return (<div>
     <table>
    <tbody>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
  
      {
        contact.map((element) => {
          return (<tr key={element.id}>
            <td>{element.name}</td>
            <td>{element.phone}</td>
            <td>{element.email}</td>
          </tr>) 
        })
      }
    </tbody>
  </table>
</div>)
    
}

export default ContactList