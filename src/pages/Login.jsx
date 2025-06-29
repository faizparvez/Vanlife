import { useState } from "react";
import { useLoaderData , Form } from "react-router-dom";



export async function action( {request} ) {
  console.log(request);
  const data = await request.formData();
  console.log(data);

  const email = data.get("email");
  const password = data.get("password");

  console.log( email , password )

  return null;
}


export function loader( {request} ){
  // console.log(request)
  // console.log(new URL(request.url));
  const mess = new URL(request.url).searchParams.get("message");
  // console.log(mess);
  return mess;
}



export default function Login() {
  
  const message = useLoaderData();
  const [loginFormData,setLoginFormData]=useState({email:"",password:""})

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(loginFormData);
  }

  function handleChange(e){
    setLoginFormData((prev)=>{
        return (
            {
            ...prev,
            [e.target.name]:e.target.value
            }
        )
    })
  }

  return (
    <div className="login-container">
      
      <h1>Sign in to your account</h1>
      
      {message && <h2 className="red">{message}</h2>}

      <Form method="post" className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button>Log in</button>
      </Form>
    
    </div>
  );
}