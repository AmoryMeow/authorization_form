import "./Auth.css";

import bgImg from "../images/background.jpeg";
import { Input } from "../input";

export const Auth = () => {
  return (
    <section className="layout">
      <div className="wrapper">
        <h1 className="title">Autorization</h1>
        <form className="form">
          <Input label="Username" />
          <Input label="Password" />
          <button className="button">Sign In</button>
        </form>
        <p className="forget">
          Don't have an account?{" "}
          <a href="#" className="forget-link">
            Sign up
          </a>
        </p>
      </div>
      <div className="underlay" />
    </section>
  );
};
