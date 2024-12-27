"use client";

import React, { useState } from 'react';
import DeckGL from '@deck.gl/react';
import { MapView } from '@deck.gl/core';
import {Map} from 'react-map-gl'
import { Tile3DLayer } from '@deck.gl/geo-layers';
import { CesiumIonLoader } from '@loaders.gl/3d-tiles';
import { Tileset3D } from '@loaders.gl/tiles';



const ION_TOKEN = process.env.NEXT_PUBLIC_ION_TOKEN;
const ASSETID= "28945";


const MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const initialViewState = {
  longitude: 0,
  latitude: 10,
  zoom: 1,
  pitch: 0,
  bearing: 0,
  minZoom: 0,
  maxZoom: 30,
  minPitch: 0,
  maxPitch: 60
};

const MyMap: React.FC = () => {
  const [viewState, setViewState] = useState(initialViewState);

  const onTilesetLoad = (tileset: Tileset3D) => {
    console.log("Tileset: ", tileset);
    const { cartographicCenter, zoom } = tileset;
    setViewState({
      ...initialViewState,
      pitch: 45,
      longitude: cartographicCenter[0],
      latitude: cartographicCenter[1],
      zoom
    });
  };

  const layers = [
    new Tile3DLayer({
      data: `https://assets.ion.cesium.com/${ASSETID}/tileset.json`,
      loader: CesiumIonLoader,
      loadOptions: {
        "cesium-ion": { accessToken: ION_TOKEN }
      },
      onTilesetLoad
    })
  ];

  return (
    <DeckGL
      initialViewState={viewState}
      controller={true}
      layers={layers}
      style={{ width: '100%', height: '100%' }}
    >
        
        <Map mapboxAccessToken={MAPBOX_ACCESS_TOKEN} mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" />
      
        
    </DeckGL>
  );
};

export default MyMap;