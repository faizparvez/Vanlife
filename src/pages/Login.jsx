import { useState } from "react";
import { useLoaderData, Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { loginUser } from "../mirage/api";

export async function action({ request }) {
  const formData = await request.formData();
  const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host";
  // console.log(pathname);

  const email = formData.get("email");
  const password = formData.get("password");
  // console.log( email , password )

  try {
    const hostData = await loginUser({ email, password });
    // console.log(hostData);
    if (hostData.token) {
      localStorage.setItem("loggedin", true);
      const dir = redirect(pathname);
      dir.body = true;
      return dir;
    }
  } catch (err) {
    // console.log(err);
    return err.message;
  }
}

export function loader({ request }) {
  // console.log(request)
  // console.log(new URL(request.url));
  const mess = new URL(request.url).searchParams.get("message");
  // console.log(mess);
  return mess;
}

export default function Login() {
  const message = useLoaderData();
  const errorMessage = useActionData();
  const navigation = useNavigation();
  // console.log(navigation);

  // const [loginFormData, setLoginFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   // console.log(loginFormData);
  // }

  // function handleChange(e) {
  //   setLoginFormData((prev) => {
  //     return {
  //       ...prev,
  //       [e.target.name]: e.target.value,
  //     };
  //   });
  // }

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <h1 className="login-title">Sign in to your account</h1>
        {message && <h3 className="login-message">{message}</h3>}
        {errorMessage && <h3 className="login-error">{errorMessage}</h3>}
        <Form method="post" className="login-form" replace>
          <input
            name="email"
            type="email"
            placeholder="Email address"
            className="login-input"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="login-input"
          />
          <button
            disabled={navigation.state === "submitting"}
            className="login-button"
          >
            {navigation.state === "submitting" ? "Logging in" : "Log in"}
          </button>
        </Form>
      </div>
    </div>
  );
}