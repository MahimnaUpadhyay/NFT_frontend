import React from "react";
import "./style/Contact_Us_Form.css";

const Contact_Us_Form = () => {
  return (
    <>
      <div className="Form_Container">

      <div className="Title">
          <p>Contact Us</p>
        </div>

        <div className="Form_Grid_Container">
          <div>
            <img 
                src="https://images.pexels.com/photos/2457284/pexels-photo-2457284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="" />
          </div>
          <div className="Form-contact">
            <form>
              <input type="text" placeholder="Your Good Name" required /> <br />
              <input type="email" placeholder="email" required /> <br />
              <textarea placeholder="Your Message" rows={"4"} cols={"20"}></textarea>
            </form>
            <button>Send</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_Us_Form;
