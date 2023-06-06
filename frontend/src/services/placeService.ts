import axios from "axios";
import { Place } from "../models/Place";

export function getPlaces() {
  return axios
    .get("http://localhost:5001/places")
    .then((response) => response.data);
}

export function addPlace(place: Place) {
  return axios
    .post("http://localhost:5001/places", place)
    .then((response) => response.data);
}
 