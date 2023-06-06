import { useEffect, useState } from "react"
import { Place } from "../models/Place"
import { getPlaces } from "../services/placeService"
import { PlaceForm } from "./PlaceForm";
import { PlaceInfo } from "./PlaceInfo";

export function PlaceHome() {

    const [places, setPlaces] = useState<Place[]>([]);

    useEffect(() => {
        getPlaces().then(data => setPlaces(data))
    }, []);

    function onAdd(newPlace: Place) {
        setPlaces([...places, newPlace])
    }
    console.log('hello')

    return (
        <div>
            <h1>Places App</h1>
            <PlaceForm onAdd={(place => onAdd(place))}></PlaceForm>
            <h2>List of Places:</h2>
            <ul>
            {
                places.map((place) => <li><PlaceInfo place={place} ></PlaceInfo></li>)
            
            }
            </ul>
        
        </div>
    )
}