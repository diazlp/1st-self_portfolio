import React from "react";
import { FaMapPin, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div>
      <div className="container contact">
        <div className="row pt-5">
          <div className="col-md-6 p-5">
            <img
              src="./contactus.svg"
              alt="contact-image"
              data-aos="fade-up"
              data-aos-duration="800"
            />
          </div>
          <div className="col-md-6">
            <div className="contact-form m-5 p-5 n-box2">
              {/* <h3 className="font-bold">REACH ME OUT</h3> */}
              {/* <hr /> */}
              <div className="p-2 d-flex">
                <FaMapPin size="30" color="#001829" className="" />
                <p className="px-2 fw-bold">Address:</p>
                <p>Pulogadung, Jakarta Timur</p>
              </div>
              <div className="p-2 d-flex">
                <FaWhatsapp size="30" color="#001829" className="" />
                <p className="px-2 fw-bold">Phone Number:</p>
                <a
                  href="https://api.whatsapp.com/send?phone=6281283071034"
                  target={"_blank"}
                  rel="noreferrer"
                  className="text-decoration-none text-reset"
                >
                  +62 812-8307-1034
                </a>
              </div>
              <div className="p-2 d-flex">
                <SiGmail size="30" color="#001829" className="" />
                <p className="px-2 fw-bold">Email:</p>
                {/* https://mail.google.com/mail/?view=cm&fs=1&to=diazlinggaputra@gmail.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=diazlinggaputra@gmail.com"
                  target={"blank"}
                  rel="noreferrer"
                  className="text-decoration-none text-reset"
                >
                  diazlinggaputra@gmail.com
                </a>
              </div>
              <div className="p-2 d-flex">
                <FaLinkedin size="30" color="#001829" className="" />
                <p className="px-2 fw-bold">LinkedIn:</p>
                <a
                  href="https://www.linkedin.com/in/diaz-linggaputra-40a4a9135/"
                  target={"blank"}
                  rel="noreferrer"
                  className="text-decoration-none text-reset"
                >
                  Diaz Linggaputra
                </a>
              </div>
              <div className="p-2 d-flex">
                <FaGithub size="30" color="#001829" className="" />
                <p className="px-2 fw-bold">Github:</p>
                <a
                  href="http://github.com/diazlp"
                  target={"_blank"}
                  rel="noreferrer"
                  className="text-decoration-none text-reset"
                >
                  diazlp
                </a>
              </div>

              {/* <input type="text" className="form-control" placeHolder="Name" />
              <input type="text" className="form-control" placeHolder="Email" />
              <textarea rows={3} className="form-control" defaultValue={""} />
              <button className="primary-button mt-3">Submit</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
