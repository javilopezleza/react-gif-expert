import PropTypes from "prop-types";
import { useState, useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading  && (<h2>Cargando....</h2>)
            }

            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifItem
                            key={img.id}
                            { ...img }
                        />
                    ))
                }
            </div>

        </>
    )
}

GifGrid.PropTypes = {
    category: PropTypes.string.isRequired,
}