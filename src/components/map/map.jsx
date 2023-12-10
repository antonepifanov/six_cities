import React, {useEffect, useRef} from 'react';
import {OFFERS_TYPES, CARD_TYPES} from '../../prop-types/prop-types';
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({placeCards, activeItem}) => {
  const mapRef = useRef(null);
  const [firstItem = {}] = placeCards;

  useEffect(() => {
    const city = firstItem.city;

    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.location.latitude,
        lng: city.location.longitude
      },
      zoom: city.location.zoom
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);
  }, []);

  useEffect(() => {
    placeCards.forEach((item) => {
      const isActive = activeItem ? item.id === activeItem.id : false;
      const customIcon = leaflet.icon({
        iconUrl: isActive ? `img/pin-active.svg` : `img/pin.svg`,
        iconSize: [27, 39]
      });

      leaflet.marker({
        lat: item.location.latitude,
        lng: item.location.longitude
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current)
      .bindPopup(item.title);
    });
  }, [activeItem]);

  return (
    <div id="map" style={{height: `100%`}} ref={mapRef}/>
  );
};

Map.propTypes = {
  placeCards: OFFERS_TYPES,
  activeItem: CARD_TYPES,
};

export default Map;
