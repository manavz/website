import React from "react";
import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
    msg: "",
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `my name is ${data.fullname}, my email is ${data.email} ,my contact is ${data.phone}, and my message for you is ${data.msg}`
    );
  };
  return (
    <>
      <div className="my-4">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Fullname
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="enter your fullname"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="enter your email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Enter your contact"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Drop Message for Us"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">
                Submit form
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
