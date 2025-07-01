import { redirect } from "react-router-dom";

export async function requireAuth( request  ) {

  const pathname =  new URL(request.url).pathname;
  // console.log(pathname);
  const isLoggedIn = localStorage.getItem("loggedin");
  
  if (!isLoggedIn) {
    const res = redirect(`/login?message=You must login first.&redirectTo=${pathname}`);
    // Object.defineProperty(res, "body", { value: true });
    res.body = true;
    // console.log(res);
    throw res;
  }
  return null;
}