"use client";

import { useSelector, useDispatch } from "react-redux";
import { supprimerTemoignage } from "@/redux/temoignageSlice";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const testimonials = useSelector((state) => state.temoignages.temoignages);
  const dispatch = useDispatch();
  return (
    <div className="testimonials-list">
      <h1>Liste des témoignages</h1>
      {testimonials.map((testimonial, index) => (
        <div className="testimonial" key={index}>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.message}</p>
          <button
            onClick={() =>
              router.push(`/temoignages/modifier/${testimonial.id}`)
            }
            className="testimonial-edit-button" // Ajout de la classe ici
          >
            Modifier
          </button>
          <button
            onClick={() => dispatch(supprimerTemoignage(testimonial.id))}
            className="testimonial-delete-button"
          >
            Supprimer
          </button>
        </div>
      ))}
    </div>
  );
}

export default page;
