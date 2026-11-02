import styles from "./Navbar.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { Perfil } from "../Perfil/Perfil";
import { NavLink } from "react-router";
import { categories } from "../../../mocks/products";

export const Navbar = () => {
    return (
        <nav className={styles.navbar} aria-label="Navegación principal">
            <h1 className={styles.title}>NEXA</h1>
            <details
                className={styles.categories}
                onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                        event.currentTarget.open = false;
                    }
                }}
                onKeyDown={(event) => {
                    if (event.key === "Escape") {
                        event.currentTarget.open = false;
                        event.currentTarget.querySelector("summary")?.focus();
                    }
                }}
            >
                <summary>Categorias</summary>
                <ul className={styles.categoryMenu}>
                    {categories.map((category) => (
                        <li key={category.slug}>
                            <NavLink
                                to={`/categorias/${category.slug}`}
                                onClick={(event) => {
                                    const dropdown = event.currentTarget.closest("details");
                                    if (dropdown) dropdown.open = false;
                                }}
                            >
                                {category.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </details>
            <SearchBar />
            <Perfil />
        </nav>
    );
};