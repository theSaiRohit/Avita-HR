import useForm from "@/hooks/use-form";
import Link from "next/link";
import { useRef } from "react";
import type { FormEventHandler } from "react";
import { FaAddressBook, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function MainContact() {
  const formRef = useRef<HTMLFormElement>(null);
  const googleSubmit = useForm({
    formRef: formRef,
    gFormId: "1F6xH1HoQPnPGEUnu5dei8GygZt1Ki0goScPCq-1LvCE",
    links: [
      { entryId: "120623533", formId: "name" },
      { entryId: "1854398133", formId: "mail" },
      { entryId: "826490151", formId: "number" },
      { entryId: "309336925", formId: "message" }
    ]
  });

  const submitHandler: FormEventHandler = (event) => {
    event.preventDefault();
    googleSubmit();
    alert("The Form has been successfully submitted!");
    formRef.current?.reset();
  };
  return (
    <div className="contact-container">
      <div className="info-container">
        <p className="our-contacts">Our Contacts</p>
        <div className="email">
          <h3 className="mail-heading">
            <FaEnvelope />
            Email
          </h3>
          <Link href="mailto: avitahrs@gmail.com" className="mail-info">
            avitahrs@gmail.com
          </Link>
          <Link href="mailto: mohan@avitahr.com" className="mail-info">
            mohan@avitahr.com
          </Link>
        </div>
        <div className="phone">
          <h3 className="phone-heading">
            <FaAddressBook />
            Phone Number
          </h3>
          <Link href="tel:+919363531462" className="phone-info">
            <FaPhoneAlt />
            +919363531462
          </Link>
          <Link href="tel:+919444794753" className="phone-info">
            <FaPhoneAlt />
            +919444794753
          </Link>
        </div>
        <div className="address">
          <h3 className="addr-heading">
            <FaMapMarkerAlt />
            Address
          </h3>
          <p className="addr-info">
            Flat No.T2, SHIVALAY, Plot No.36, Kambar Street Annai Indiranagar, Velachery Chennai 600042, India
          </p>
        </div>
      </div>
      <form className="form-container" ref={formRef} onSubmit={submitHandler}>
        <h2 className="send-msg">Send Us a message</h2>
        <label className="form-name">
          Name :
          <input type="text" name="name" placeholder="Your name" id="name" />
        </label>
        <label className="form-number">
          Phone Number :
          <input type="number" name="number" placeholder="Your number" id="number" />
        </label>
        <label className="form-mail">
          Mail :
          <input type="email" name="mail" placeholder="Your email address" id="mail" />
        </label>
        <label className="your-msg">
          Your message :
          <textarea className="text-box" placeholder="Enter your message" name="message" id="message" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
