import React from 'react'
import emailjs from 'emailjs-com'
import { useAuth } from '../../../context/providers/AuthContext'
import { useCart } from '../../../context/providers/CartContext'

function EmailForm() {

    
    const { items } = useCart();
    const { user } = useAuth();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_w5yc8ke', form.current, 'user_Xn132BgQHSdLvqpY0ca9m')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return (
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" value={user.email} />
            <input type="email" name="user_email" value={user.email} />
            <textarea name="message" value={items.map(item => item)} />
            <input type="submit" value="Send" />
        </form>
    )
}

export default EmailForm
