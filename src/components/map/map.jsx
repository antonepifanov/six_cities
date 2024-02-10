import React, {useEffect, useRef} from 'react';
import {OFFERS_TYPES, CARD_TYPES, HANDLER_TYPES} from '../../prop-types/prop-types';
import {connect} from 'react-redux';
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {ActionCreator} from '../../store/action';

const Map = ({placeCards, activeMapPin, room, setRoomActivePin}) => {
  const mapRef = useRef(null);
  const [firstItem = {}] = placeCards;
  let places = [...placeCards];
  if (room) {
    places = [...placeCards, room];
    setRoomActivePin(room);
  }

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

    return () => {
      mapRef.current.remove();
      setRoomActivePin(null);
    };
  }, [placeCards]);

  useEffect(() => {
    const markersGroup = leaflet.layerGroup().addTo(mapRef.current);

    places.forEach((item) => {
      const isActive = activeMapPin ? item.id === activeMapPin.id : false;
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
      .addTo(markersGroup)
      .bindPopup(item.title);
    });

    return () => {
      markersGroup.clearLayers();
    };
  }, [activeMapPin, placeCards]);

  return <div id="map" style={{height: `100%`}} ref={mapRef}/>;
};

Map.propTypes = {
  placeCards: OFFERS_TYPES,
  activeMapPin: CARD_TYPES,
  room: CARD_TYPES,
  setRoomActivePin: HANDLER_TYPES,
};

const mapStateToProps = (state) => ({
  activeMapPin: state.activeMapPin,
});

const mapDispatchToProps = (dispatch) => ({
  setRoomActivePin(pin) {
    dispatch(ActionCreator.setActiveMapPin(pin));
  }
});

export {Map};
export default connect(mapStateToProps, mapDispatchToProps)(Map);
