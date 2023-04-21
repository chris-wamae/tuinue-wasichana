import {useState} from "react";import { PageItem } from "react-bootstrap";
function SignupForm({ onSignup }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    const handleSubmit = async (e) => {
      e.preventDefault();      const response = await fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });      if (response.ok) {
        const user = await response.json();
        onSignup(user);
      } else {
        const error = await response.json();
        console.error(error);
      }
    };    return (
      <form className="signup-form" onSubmit={handleSubmit}>
        <label className="signup-form__label">
          Name:
          <input className="signup-form__input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label className="signup-form__label">
          Email:
          <input className="signup-form__input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="signup-form__label">
          Password:
          <input className="signup-form__input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button className="signup-form__button" type="submit">Sign up</button>
      </form>
    );
  }export default SignupForm;
 