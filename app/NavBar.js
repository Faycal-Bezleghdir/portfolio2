import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link href="/">Maison</Link>
        </li>
        <li>
          <Link href="/cv">CV</Link>
        </li>
        <li>
          <Link href="/projets">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>

        <li>
          <Link href="/temoignages">Témoignages</Link>
        </li>
        <li>
          <Link href="/temoignages/ajouter">Ajouter Témoignage</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
