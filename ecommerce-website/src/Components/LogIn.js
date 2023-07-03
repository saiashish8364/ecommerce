import { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import CartContext from "./Context/CartContext";

const LogIn = () => {
  const ctx = useContext(CartContext);
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCLo-iRYfevzs5rYHOPaSovU-nFIPTtxyA",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then(() => {
            let errorMessage = "Authentication Failed";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        ctx.login(data.idToken);
        localStorage.setItem("token", data.idToken);
        history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <>
      <section>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="email">Your Email</label>
            <br />
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div>
            <label htmlFor="password">Your Password</label>
            <br />
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <br />
          <div>
            <button type="submit">LogIn</button>
          </div>
        </form>
      </section>
    </>
  );
};
export default LogIn;
