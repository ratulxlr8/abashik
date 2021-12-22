import React from "react";
import "./HeaderMain.css";
const HeaderMain = () => {
  return (
    <div>
      <section className=" bg-image-shape">
        <div className="container-fluid banner-area">
          <div className="row ">
            <div className="col-md-4 text-area-custom mx-5 ">
              <h1 className="text-left font-weight-bold">
                <span className="blus-cus">Abashik</span>.com
              </h1>
              <p className="text-left">A Complete Solution.</p>
              <div class="input-group mb-3 w-50 ">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search . . ."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append mx-2">
                  <button class="btn btn-primary" type="button">
                    Button
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-7 bg-banner-area-cus"></div>
          </div>
        </div>
      </section>
      {/* About Us Section Starts Here */}
      <section className="row container-fluid px-5" id="aboutID">
        <div className="col-md-5">
          <h1 className=" display-1 font-weight-bold blus-cus">About Us</h1>
          <p className="text-justify mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            temporibus! Veritatis nisi eligendi esse quia modi doloribus, quam
            quae eos incidunt maxime saepe laboriosam velit explicabo! Quos,
            soluta praesentium saepe officia quisquam necessitatibus veniam!
            Vitae ex perferendis enim id dicta, velit quasi porro animi debitis
            culpa. Maiores, eos. Labore, culpa? Quae beatae veritatis mollitia?
            Laboriosam animi deleniti debitis. Reprehenderit minima nihil quo
            tenetur necessitatibus rerum reiciendis error aspernatur quod veniam
            id, temporibus magni, nulla aliquid! Asperiores expedita eligendi
            harum adipisci eius magnam voluptates tempore repellendus, quo
            possimus, iste animi fugiat deserunt voluptatem! Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Cupiditate deleniti
            nesciunt, explicabo culpa qui aliquam.
          </p>
        </div>
        <div className="col-md-7 aboutUs-image"></div>
      </section>
      {/* About Us Section Ends Here */}

      {/* Contact Us Section Starts Here */}
      <section className="row container-fluid">
        <div class="container-fluid contact-form">
          <div class="contact-image">
            <img
              src="https://image.ibb.co/kUagtU/rocket_contact.png"
              alt="rocket_contact"
            />
          </div>
          <form method="post">
            <h3>Drop Us a Message</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    name="txtName"
                    class="form-control"
                    placeholder="Your Name *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="txtEmail"
                    class="form-control"
                    placeholder="Your Email *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="txtPhone"
                    class="form-control"
                    placeholder="Your Phone Number *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    name="btnSubmit"
                    class="btnContact"
                    value="Send Message"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <textarea
                    className=""
                    name="txtMsg"
                    class="form-control full-width-msg"
                    placeholder="Your Message *"
                    style={{ height: "150px" }}
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* Contact Us Section Ends Here */}
      <footer class="bg-light text-center text-lg-start">
        <div class="text-center p-3">
          © 2020 Copyright:
          <a class="text-dark" href="https://mdbootstrap.com/">
            abashik.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HeaderMain;
