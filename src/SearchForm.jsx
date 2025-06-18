import React from "react";
import { useGlobalContext } from "./context";

export default function SearchForm() {
        const { setSearchTerm } = useGlobalContext();
        const handleSubmit = (e) => {
                e.preventDefault();
                const searchValue = e.target.search.value;
                if (!searchValue) {
                        alert("Please enter a search value");
                        return;
                }
                console.log(searchValue);
                setSearchTerm(searchValue);
        };
        return (
                <section>
                        <h1 className="title">Unsplash Images</h1>
                        <form action="" className="search-form" onSubmit={handleSubmit}>
                                <input
                                        type="text"
                                        placeholder="Search..."
                                        className="form-input search-input"
                                        name="search"
                                />
                                <button type="submit" className="btn">
                                        Search
                                </button>
                        </form>
                </section>
        );
}
