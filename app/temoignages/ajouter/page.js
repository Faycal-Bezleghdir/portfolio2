"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ajouterTemoignage } from "@/redux/temoignageSlice";
import { useRouter } from "next/navigation";

function page() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError("");
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameError("Veuillez entrer un nom");

      return;
    }

    if (!message) {
      setMessageError("Veuillez entrer un message");
      return;
    }

    dispatch(
      ajouterTemoignage({
        name,
        message,
      })
    );

    router.push("/temoignages");

    setName("");
    setMessage("");
    setNameError("");
    setMessageError("");
  };

  return (
    <div className="testimonial-form">
      <h1>Ajouter un témoignage</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom :</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
        {nameError && <p className="error-message">{nameError}</p>}

        <label htmlFor="message">Message :</label>
        <textarea
          className="message-area"
          id="message"
          value={message}
          onChange={handleMessageChange}
        ></textarea>
        {messageError && <p className="error-message">{messageError}</p>}
        <button type="submit" className="ajouter-button">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default page;
