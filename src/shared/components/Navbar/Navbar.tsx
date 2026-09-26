import styles from "./Navbar.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { Perfil } from "../Perfil/Perfil";

export const Navbar = () => {
    return (
        <nav className={styles.navbar} aria-label="Navegación principal">
            <h1 className={styles.title}>Compritas</h1>
            <SearchBar />
            <Perfil />
        </nav>
    );
};