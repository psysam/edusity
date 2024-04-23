import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a115c5db-58ec-4811-99de-de710308b233");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis velit harum enim, consequuntur, esse minus repellendus omnis quasi voluptate rerum adipisci magnam vel libero aperiam, dolores numquam quia. Tempora reiciendis deleniti nesciunt esse!</p>
        <ul>
            <li><img src={mail_icon} alt="" />psysam38@gmail.com</li>
            <li><img src={phone_icon} alt="" />9696475424</li>
            <li><img src={location_icon} alt="" />gorakhpur</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>
                your name
            </label>
            <input type="text" name="name" placeholder='enter your name' required/>
            <label>phone number</label>
            <input type="tel" name='phone' placeholder='enter your mobile number' required />
            <label>write your message here</label>
            <textarea name="message"  rows="6" placeholder='enter your message here' required></textarea>
            <button type='submit' className='btn dark-btn'>send <img src={white_arrow} alt="" /></button>

        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
