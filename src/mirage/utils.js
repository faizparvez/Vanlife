import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    const res = redirect("/login?message=You must login first.");
    // Object.defineProperty(res, "body", { value: true });
    res.body=true;
    // console.log(res);
    throw res;
  }
  return null;
}
