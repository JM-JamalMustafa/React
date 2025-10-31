import React from "react";

export default function Contact() {
  return (
    <main className="container">
      <h2>Contact</h2>
      <p>If you want to work together send a message:</p>

      <form className="contact-form" onSubmit={(e)=>e.preventDefault()}>
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@email.com" />
        </label>
        <label>
          Message
          <textarea placeholder="Let's build something…" rows="5" />
        </label>
        <button type="submit" className="btn">Send</button>
      </form>
    </main>
  );
}
