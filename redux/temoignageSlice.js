"use client";
import { createSlice } from "@reduxjs/toolkit";

const temoignageSlice = createSlice({
  name: "temoignages",
  initialState: {
    temoignages: [
      // Les témoignages existants vont ici...
      {
        id: 1,
        name: "John Doe",
        message:
          "Je suis très satisfait du travail de développement web réalisé par l'équipe. Ils ont su comprendre mes besoins et fournir un produit final de grande qualité.",
      },
      {
        id: 2,
        name: "Jane Smith",
        message:
          "Leur expertise en développement web est exceptionnelle. Ils ont su créer un site web moderne et fonctionnel qui a dépassé mes attentes.",
      },
      {
        id: 3,
        name: "David Johnson",
        message:
          "J'ai été impressionné par leur professionnalisme et leur réactivité tout au long du processus de développement. Je les recommande vivement pour tout projet de développement web.",
      },
      {
        id: 4,
        name: "Emily Wilson",
        message:
          "L'équipe a fait un excellent travail pour créer un site web qui correspond parfaitement à ma vision. Je suis reconnaissante pour leur travail exceptionnel.",
      },
      {
        id: 5,
        name: "Michael Brown",
        message:
          "Je suis ravi des résultats obtenus grâce à leur expertise en développement web. Je les recommande sans hésitation pour tout projet web.",
      },
    ],
  },
  reducers: {
    ajouterTemoignage: (state, action) => {
      state.temoignages.push(action.payload);
    },

    supprimerTemoignage: (state, action) => {
      const index = state.temoignages.findIndex(
        (temoignage) => temoignage.id === action.payload
      );

      if (index !== -1) {
        state.temoignages.splice(index, 1);
      }
    },

    modifierTemoignage: (state, action) => {
      const index = state.temoignages.findIndex(
        (temoignage) => temoignage.id === action.payload.id
      );

      if (index !== -1) {
        state.temoignages[index] = action.payload;
      }
    },
  },
});

export const { ajouterTemoignage, supprimerTemoignage, modifierTemoignage } =
  temoignageSlice.actions;

export default temoignageSlice.reducer;
