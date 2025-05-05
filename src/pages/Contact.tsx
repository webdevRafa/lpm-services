import { ContactHero } from "../components/ContactHero"
import { useInViewAnimation } from "../hooks/useInViewAnimation"
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useState } from "react";



export const Contact: React.FC = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const { ref: fullNameRef, isVisible: fullNameVisible } = useInViewAnimation();
  const { ref: emailRef, isVisible: emailVisible } = useInViewAnimation();
  const { ref: phoneRef, isVisible: phoneVisible } = useInViewAnimation();
  const { ref: messageRef, isVisible: messageVisible } = useInViewAnimation();
  const { ref: buttonRef, isVisible: buttonVisible } = useInViewAnimation();
    return <>
  <ContactHero key={'contact-page-hero'}/>
  <div className="w-full bg-spurs-charcoal mx-auto py-20">
    {/* SIGN UP FORM */}
    <h2 className="text-spurs-silver uppercase text-center text-lg md:text-3xl mb-10">SEND US A MESSAGE</h2>
   <div className="py-20 flex items-center justify-center md:mx-auto border-spurs-charcoal-light max-w-[800px]  relative px-3">
   <form className=" w-[400px]" action="submit" onSubmit={async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contactSubmissions"), {
        fullName,
        email,
        phone,
        message,
        timestamp: Timestamp.now(),
      });
      setFullName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setMessageSent(true);
      setTimeout(() => {
        setMessageSent(false);
      }, 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error. Please try again.");
    }
   }}>

    {/* FULL NAME */}
    <div ref={fullNameRef} className={`flex items-center mb-4 transition ease-in-out duration-300 ${fullNameVisible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'}`}>
  <label className="text-spurs-silver w-1/3 text-right pr-3" htmlFor="fullName">Full Name:</label>
  <input
    className="flex-1 bg-spurs-charcoal-light text-spurs-silver p-2"
    id="fullName"
    type="text"
    placeholder="Your name"
    value={fullName}
    onChange={(e) => setFullName(e.target.value)}
  />
</div>
      {/* EMAIL */}
      <div ref={emailRef} className={`flex items-center mb-4 transition ease-in-out duration-300 ${emailVisible ? 'translate-x-0 opacity-100' : 'translate-y-[30px] opacity-0'}`}>
  <label className="text-spurs-silver-light w-1/3 text-right pr-3" htmlFor="email">Email:</label>
  <input
    className="flex-1 bg-spurs-charcoal-light text-spurs-silver p-2"
    id="email"
    type="text"
    placeholder="Your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
</div>

 {/* PHONE NUMBER */}
 <div ref={phoneRef} className={`flex items-center mb-4 transition ease-in-out duration-300 ${phoneVisible ? 'translate-x-0 opacity-100' : 'translate-y-[30px] opacity-0'}`}>
    <label className="text-spurs-silver w-1/3 text-right pr-3" htmlFor="phone">Phone:</label>
    <input
      className="flex-1 bg-spurs-charcoal-light text-spurs-silver p-2"
      id="phone"
      type="tel"
      placeholder="e.g. 555-123-4567"
      pattern="^\d{3}-\d{3}-\d{4}$"
      title="Format: 555-123-4567"
      required
      value={phone}
      onChange={(e) => {
        const rawValue = e.target.value.replace(/\D/g, ''); // Remove all non-digits
        let formatted = rawValue;
      
        if (rawValue.length > 3 && rawValue.length <= 6) {
          formatted = `${rawValue.slice(0, 3)}-${rawValue.slice(3)}`;
        } else if (rawValue.length > 6) {
          formatted = `${rawValue.slice(0, 3)}-${rawValue.slice(3, 6)}-${rawValue.slice(6, 10)}`;
        }
      
        setPhone(formatted);
      }}
    />
  </div>

  {/* MESSAGE */}
  <div ref={messageRef} className={`flex items-start transition ease-in-out duration-300 ${messageVisible ? 'translate-x-0 opacity-100' : 'translate-y-[30px] opacity-0'} `}>
    <label className="text-spurs-silver-light w-1/3 text-right pr-3 pt-2" htmlFor="message">Message:</label>
    <textarea
      className="flex-1 bg-spurs-charcoal-light text-spurs-silver p-2 h-24 resize-none"
      id="message"
      placeholder="Your message"
      required
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    ></textarea>
  </div>
     {/* SUBMIT BUTTON */}
  <div ref={buttonRef} className={`flex justify-center pt-4 transition ease-in-out duration-300 ${buttonVisible ? 'translate-x-0 opacity-100' : 'translate-y-[30px] opacity-0'}`}>
    <button
      type="submit"
      className="cursor-pointer bg-spurs-teal text-spurs-charcoal uppercase font-semibold py-2 px-6 rounded hover:opacity-90 transition-all duration-200 hover:scale-110"
    >
      Submit
    </button>
  </div>
    </form>
    {messageSent && (
      <div className="bg-spurs-charcoal w-full h-full absolute top-0 left-0 z-50 flex items-center justify-center text-white">
      <div>
      <h2 className="text-center mb-4 uppercase">Thank you!</h2>
      <p className="text-spurs-silver">We have received your message and will get back to you soon.</p>
      </div>
      </div>
    )}
   </div>
  </div>
    </>
}