import styles from "./Perfil.module.css";

export const Perfil = () => {
	return (
		<details className={styles.profile}>
			<summary className={styles.trigger}>
				<span className="material-symbols-outlined" aria-hidden="true">
                    person
                </span>
				<span>Perfil</span>
			</summary>
			<nav className={styles.menu} aria-label="Opciones de perfil">
				<a href="#mi-perfil">Mi perfil</a>
				<a href="#mis-compras">Mis compras</a>
				<a href="#cerrar-sesion">Cerrar sesión</a>
			</nav>
		</details>
	);
};
