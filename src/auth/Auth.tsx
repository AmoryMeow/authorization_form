import { FormEvent, useState } from "react";

import { Input } from "../input";
import { Button } from "../button";

import { signInApi } from "../api";

import "./Auth.css";

type Values = {
  username: string;
  password: string;
};

export const Auth = () => {
  const [values, setValues] = useState<Values>({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSuccess(false);

    if (!values.username || !values.password) {
      setErrorMessage("Username or password not filled in");
      return;
    }

    if (values.username && values.password) {
      setLoading(true);

      signInApi(values, {
        onSuccess: () => {
          setLoading(false);
          setSuccess(true);
        },
        onError: (error) => {
          setLoading(false);
          setErrorMessage(error);
        },
      });
    }
  };

  return (
    <section className="layout">
      <div className="wrapper">
        <h1 className="title">Autorization</h1>
        <form className="form" onSubmit={onSubmit} noValidate>
          <Input
            label="Username"
            value={values?.username}
            onChange={(value) => {
              setErrorMessage("");
              setSuccess(false);
              setValues({ ...values, username: value });
            }}
          />
          <Input
            label="Password"
            value={values?.password}
            onChange={(value) => {
              setErrorMessage("");
              setSuccess(false);
              setValues({ ...values, password: value });
            }}
          />
          <Button
            label="Sign In"
            state={loading ? "loading" : success ? "success" : "default"}
            loading={loading}
          />
          <span className="error">{errorMessage}</span>
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
