## TL;DR

1. Working code to incorporate any 3DTile asset from Cesium Ion's Asset Depot into a NextJS x DeckGL app.
2. Some details on why Cesium's World Terrain does NOT work with DeckGL as of Dec 2024 (refer to progress.pdf).

## Getting Started

After cloning the repo,
- Create Cesium ION and Mapbox accounts and enter your access tokens in the .env file at the root of the project.
  ```
  NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=
  NEXT_PUBLIC_ION_TOKEN=
  ```
- `npm install` to install dependencies.
- `npm run dev` to start running on port 3000.
- The default asset being visualised is the Montral Point Cloud (Modified from LiDAR aérien 2015 CC BY 4.0)