import React from 'react'

const SingleContact = (props) => {

    let obj = props.selectedContact

    return(

        <div id="single-contact">
            <div id="contact-info">
                <p><b>Name:</b> {obj.name}</p>
                <p><b>Email:</b> {obj.email}</p>
                <p><b>Phone:</b> {obj.phone}</p>
                <div>
                    <b>Address:</b>
                    <p>
                        <b>Street:</b> {obj.address.street} 
                        <br />
                        <b>City/State:</b> {obj.address.city} {obj.address.zipcode} 
                    </p>
                </div>
                <p><b>Company:</b>  {obj.company.name} </p>
            </div>
        </div>

    )

}

export default SingleContact