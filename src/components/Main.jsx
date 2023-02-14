import React, {useState} from 'react';
import dummyContacts from '../dummyData/index'

const Main = () => {

  const [contacts, setContacts] = useState(dummyContacts)

  
  
  console.log('HELLO')
  
  return (
    <div id="main">

      <div id="navbar">
        <div>Contact List</div>

      </div>
      <div id="container">
        {
          contacts.map((contact)=> {

            return contact.name

          })
      
      /* your components here */
      }
      <table>
  <tbody>
    <tr>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
    </tr>

    {/* Contact 1 */}
    <tr>
      <td>Person One</td>
      <td>000-000-0000</td>
      <td>one@email.com</td>
    </tr>

    {/* Contact 2 */}
    <tr>
      <td>Person Two</td>
      <td>111-111-1111</td>
      <td>two@email.com</td>
    </tr>

  </tbody>
</table>
      
      
      </div>



    </div>
  );
};

export default Main;
