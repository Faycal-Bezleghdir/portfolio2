"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { modifierTemoignage } from "@/redux/temoignageSlice";

function page({ params: { id } }) {
  const testimonials = useSelector((state) => state.temoignages.temoignages);
  const testimonial = testimonials.find((testimonial) => testimonial.id == id);
  const dispatch = useDispatch();
  const router = useRouter();
  const [name, setName] = useState(testimonial.name);
  const [message, setMessage] = useState(testimonial.message);
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
      modifierTemoignage({
        id,
        name,
        message,
      })
    );

    router.push("/temoignages");
  };
  return (
    <div className="testimonial-form">
      <h1>Modifier un témoignage</h1>
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
