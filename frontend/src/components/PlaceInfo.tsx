import { Place } from "../models/Place";

export function PlaceInfo(props: { place: Place }) {
  return (
    <div>
      <p>ID: {props.place._id}</p>
      <p>Name: {props.place.name}</p>
        {props.place.firstTime && "First Time: yes"}
        {!props.place.firstTime && "First Time: no"}
    </div>
  );
}
