import { useEffect, useId, useMemo, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import { searchProducts } from "../../utils/searchProducts";
import styles from "./SearchBar.module.css";

const RECENT_KEY = "nexa:recent-searches";
const MAX_RECENT = 5;
const MAX_SUGGESTIONS = 6;

type Suggestion =
    | { kind: "recent"; text: string }
    | { kind: "product"; id: number; text: string; image: string };

const loadRecent = (): string[] => {
    try {
        const parsed = JSON.parse(localStorage.getItem(RECENT_KEY) ?? "[]");
        return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
    } catch {
        return [];
    }
};

export const SearchBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [query, setQuery] = useState("");
    const [recent, setRecent] = useState<string[]>(loadRecent);
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const containerRef = useRef<HTMLFormElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const listId = useId();

    useEffect(() => {
        if (location.pathname === "/buscar") {
            setQuery(searchParams.get("q") ?? "");
        }
    }, [location.pathname, searchParams]);

    const suggestions = useMemo<Suggestion[]>(() => {
        if (!query.trim()) {
            return recent.map((text) => ({ kind: "recent", text }));
        }
        return searchProducts(query)
            .slice(0, MAX_SUGGESTIONS)
            .map((product) => ({ kind: "product", id: product.id, text: product.name, image: product.image }));
    }, [query, recent]);

    const saveRecent = (text: string) => {
        const updated = [text, ...recent.filter((item) => item.toLowerCase() !== text.toLowerCase())].slice(0, MAX_RECENT);
        setRecent(updated);
        localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
    };

    const removeRecent = (text: string) => {
        const updated = recent.filter((item) => item !== text);
        setRecent(updated);
        localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
    };

    const close = () => {
        setIsOpen(false);
        setActiveIndex(-1);
    };

    const runSearch = (text: string) => {
        const term = text.trim();
        if (!term) return;
        saveRecent(term);
        setQuery(term);
        close();
        inputRef.current?.blur();
        navigate(`/buscar?q=${encodeURIComponent(term)}`);
    };

    const selectSuggestion = (suggestion: Suggestion) => {
        if (suggestion.kind === "recent") {
            runSearch(suggestion.text);
            return;
        }
        saveRecent(query.trim() || suggestion.text);
        close();
        inputRef.current?.blur();
        navigate(`/products/${suggestion.id}`);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (isOpen && activeIndex >= 0 && suggestions[activeIndex]) {
            selectSuggestion(suggestions[activeIndex]);
        } else {
            runSearch(query);
        }
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "ArrowDown") {
            event.preventDefault();
            setIsOpen(true);
            setActiveIndex((index) => (suggestions.length ? (index + 1) % suggestions.length : -1));
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            setActiveIndex((index) => (suggestions.length ? (index - 1 + suggestions.length) % suggestions.length : -1));
        } else if (event.key === "Escape") {
            close();
        }
    };

    const clear = () => {
        setQuery("");
        setActiveIndex(-1);
        setIsOpen(true);
        inputRef.current?.focus();
    };

    const showList = isOpen && suggestions.length > 0;

    return (
        <form
            ref={containerRef}
            role="search"
            className={styles["search-container"]}
            onSubmit={handleSubmit}
            onBlur={(event) => {
                if (!containerRef.current?.contains(event.relatedTarget)) close();
            }}
        >
            <div className={styles["input-wrapper"]}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Ingrese su búsqueda"
                    value={query}
                    autoComplete="off"
                    role="combobox"
                    aria-expanded={showList}
                    aria-controls={listId}
                    aria-autocomplete="list"
                    aria-activedescendant={activeIndex >= 0 ? `${listId}-${activeIndex}` : undefined}
                    onChange={(event) => {
                        setQuery(event.target.value);
                        setActiveIndex(-1);
                        setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                    onClick={() => setIsOpen(true)}
                    onKeyDown={handleKeyDown}
                />
                {query && (
                    <button type="button" className={styles["clear-button"]} onClick={clear} aria-label="Borrar búsqueda">
                        ×
                    </button>
                )}
                {showList && (
                    <ul id={listId} role="listbox" className={styles.suggestions}>
                        {!query.trim() && <li className={styles["suggestions-title"]}>Búsquedas recientes</li>}
                        {suggestions.map((suggestion, index) => (
                            <li
                                key={`${suggestion.kind}-${suggestion.text}`}
                                id={`${listId}-${index}`}
                                role="option"
                                aria-selected={index === activeIndex}
                                className={`${styles.suggestion} ${index === activeIndex ? styles.active : ""}`}
                                onMouseDown={(event) => event.preventDefault()}
                                onMouseEnter={() => setActiveIndex(index)}
                                onClick={() => selectSuggestion(suggestion)}
                            >
                                {suggestion.kind === "product" ? (
                                    <img src={suggestion.image} alt="" />
                                ) : (
                                    <span className={styles.icon} aria-hidden="true">↺</span>
                                )}
                                <span className={styles["suggestion-text"]}>{suggestion.text}</span>
                                {suggestion.kind === "recent" && (
                                    <button
                                        type="button"
                                        className={styles["remove-recent"]}
                                        aria-label={`Eliminar "${suggestion.text}" de recientes`}
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            removeRecent(suggestion.text);
                                        }}
                                    >
                                        ×
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <button type="submit">Buscar</button>
        </form>
    );
};
