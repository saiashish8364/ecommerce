import { useCallback } from "react";
import "./ContactUs.css";
let name, email, phone;
const ContactUs = () => {
  function nameChangeHandler(e) {
    name = e.target.value;
  }
  function emailChangeHandler(e) {
    email = e.target.value;
  }
  function phoneChangeHandler(e) {
    phone = e.target.value;
  }
  const submitHandler = useCallback(async () => {
    let user = {
      name: name,
      email: email,
      phone: phone,
    };
    try {
      await fetch(
        "https://react-backend-test-1-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch {
      window.alert("some error occured retry.");
    }
  }, []);
  return (
    <section>
      <form onSubmit={submitHandler}>
        <label>Name</label>
        <br />
        <input type="text" onChange={nameChangeHandler} />
        <br />
        <label>Email</label>
        <br />
        <input type="email" onChange={emailChangeHandler} />
        <br />
        <label>Phone no.</label>
        <br />
        <input type="number" onChange={phoneChangeHandler} />
        <br />
        <button type="submit">Add Movie</button>
      </form>
    </section>
  );
};
export default ContactUs;
