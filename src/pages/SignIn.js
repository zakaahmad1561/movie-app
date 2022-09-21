import React, { useState } from "react";
import Layout from "../components/Layout";
import { useAuth } from "../auth";

const SignIn = () => {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    // const { error } = await supabase.auth.signIn({ email });
    // if (error) {
    //   console.log(error);
    // } else {
    //   setMessage("Magic link has been sent.");
    // }
    const signIn = await auth.login(email);
    if (signIn.error) {
      setMessage(signIn.error.message);
    } else {
      setMessage("Signing in link has been sent successfully.");
    }

    setEmail("");
  };

  return (
    <Layout>
      {message && message}
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type={"submit"}>Sign In</button>
      </form>
    </Layout>
  );
};

export default SignIn;
