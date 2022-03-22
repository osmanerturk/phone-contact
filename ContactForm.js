import React from 'react'
import { useState, useEffect } from 'react'



function ContactForm({ setContacts, contacts }) {

    const initialValues = { fullname: "", phonenumber: "" }

    const [person, setPerson] = useState(initialValues)

    const onChangeInput = (e) => {
        setPerson({ ...person, [e.target.name]: e.target.value })

    }

    useEffect(()=>{
        setPerson(initialValues)
    },[contacts])
    
    const onSubmit = () => {

        console.log(person);

        setContacts([...contacts, person])

        

    }



    return (
        <div>

            <input placeholder='name' name='fullname' value={person.fullname} onChange={onChangeInput}></input>
            <input placeholder='number' name='phonenumber' value={person.phonenumber} onChange={onChangeInput}></input>
            <button onClick={onSubmit}>Ekle</button>
        </div>
    )
}

export default ContactForm
