import React from 'react'

function ContactList({contacts}) {
  return (
    <div>
      {contacts.map((contact,key)=>(
          <li key={key}>{contact.fullname} {contact.phonenumber}</li>
      ))}
    </div>
  )
}

export default ContactList
