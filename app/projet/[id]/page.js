"use client";

const mesProjets = [
  {
    id: 1,
    titre: "Application de Gestion de Restaurant en C#",
    description:
      "J'ai participé au développement d'une application en C# visant à améliorer la gestion des commandes dans un restaurant. En tant que développeur principal, j'ai conçu l'architecture logicielle et programmé les fonctionnalités clés",
    technos: ["C#", ".NET", "SQL Server"],
    image: "/images/projet1.png",
  },
  {
    id: 2,
    titre: "Application Web pour Pizzeria avec Express et Vue.js",
    description:
      "J'ai développé une application web complète pour la gestion d'une pizzeria. Utilisant Express pour le backend et Vue.js pour le frontend, j'ai été responsable de la mise en œuvre des routes, de la création des modèles de données et de la conception des interfaces utilisateur",
    technos: ["Express", "Vue.js", "MongoDB"],
    image: "/images/projet2.png",
  },
  {
    id: 3,
    titre: "Portefeuille de Carrière avec React",
    description:
      "J'ai réalisé un projet en React pour créer une interface utilisateur réactive et dynamique. Le projet était un site de portfolio destiné à mettre en valeur mes compétences et faciliter la recherche d'emploi. J'ai créé des composants, géré l'état et intégré des API",
    technos: ["React", "JavaScript", "HTML", "CSS"],
    image: "/images/projet3.png",
  },
];

function page({ params: { id } }) {
  // Recherche du projet correspondant à l'ID dans la liste de projets
  const projet = mesProjets.find((projet) => projet.id === parseInt(id));

  if (!projet) {
    return <div>Projet non trouvé.</div>;
  }
  return (
    <div className="projet-details">
      {/* Ajoutez la classe CSS "projet-details" */}
      <h2>{projet.titre}</h2>
      <p>{projet.description}</p>
      <h3>Technos utilisées</h3>
      <ul>
        {projet.technos.map((techno, index) => (
          <li key={index}>{techno}</li>
        ))}
      </ul>
    </div>
  );
}

export default page;
