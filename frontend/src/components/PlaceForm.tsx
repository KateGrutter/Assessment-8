import { useState } from "react";
import { Place } from "../models/Place";
import { addPlace } from "../services/placeService";

export function PlaceForm(props: {onAdd: (place: Place) => void}) {
    const [name, setName] = useState('');
    const [firstTime, setFirstTime] = useState<boolean>(true)


function onSubmit(e: any) {
    e.preventDefault()

 const newPlace = {
    name: name,
    firstTime: firstTime
 }
 addPlace(newPlace).then(data => props.onAdd(data))
}

        return (
            <div>
    
    <form onSubmit={e => onSubmit(e)}>
    
    
            <label htmlFor="Name">Name</label>
            <input value={name} onChange={e => setName(e.target.value)} type="text" />
            <label htmlFor="Founding Member">First Time</label>
            <input type="checkbox" checked={firstTime} onChange={e => setFirstTime(e.target.checked)}/>
            <button>Add</button>
        </form>
            </div>
        )
    }