import { SetStateAction, useRef, useState } from "react";
import Link from "next/link";
// import { Image } from "cloudinary-react";
import ReactMapGL, { Marker, Popup, ViewState } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React from "react";
// import { useLocalState } from "src/utils/useLocalState";
// import { HousesQuery_houses } from "src/generated/HousesQuery";
// import { SearchBox } from "./searchBox";

interface IProps {}

export default function Map({}: IProps) {
  //   const mapRef = useRef<ReactMapGL | null>(null);
  const [viewState, setViewState] = React.useState({
    longitude: -100,
    latitude: 40,
    zoom: 3.5,
  });
  return (
    <div
      className="text-black relative w-full "
      style={{ height: "calc(100vh - 64px)" }}
    >
      <ReactMapGL
        {...viewState}
        style={{ width: "100%", height: "calc(100vh - 64px)" }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/admiam/clg0vs5n8000401mp2f1izi7q"
      ></ReactMapGL>
    </div>
  );
}
