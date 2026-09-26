import styles from "./SearchBar.module.css";

export const SearchBar = () => {
    return (
        <div className={styles["search-container"]}>
            <input type="text" placeholder="Ingrese su búsqueda" />
            <button>Buscar</button>
        </div>
    );
};