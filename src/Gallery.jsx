import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useGlobalContext } from "./context";

const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}`;
// console.log(import.meta.env.VITE_UNSPLASH_API_KEY);
export default function Gallery() {
        const queryClient = useQueryClient();
        const { searchTerm } = useGlobalContext();
        const { data, isLoading, isError } = useQuery({
                queryKey: ["images", searchTerm],
                queryFn: async () => {
                        const { data } = await axios.get(`${url}&query=${searchTerm}`);
                        return data;
                },
        });
        if (isLoading)
                return (
                        <section className="image-container">
                                <h4>Is Loading....</h4>
                        </section>
                );

        if (isError)
                return (
                        <section className="image-container">
                                <h4>Error....</h4>
                        </section>
                );

        const { results } = data;
        if (results.length < 1)
                return (
                        <section className="image-container">
                                <h4>No images found</h4>
                        </section>
                );

        return (
                <section className="image-container">
                        {results.map((image) => {
                                return (
                                        <img
                                                src={image?.urls?.regular}
                                                alt={image.alt_description}
                                                key={image.id}
                                                className="img"
                                        />
                                );
                        })}
                </section>
        );
}
