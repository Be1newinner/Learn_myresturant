import camelize from "camelize";

import { Locations } from "./locationMock";

export const locationRequest = (search) => {
  const searchTerm = search.toLowerCase();
  return new Promise((resolve, reject) => {
    const locationMock = Locations[searchTerm];
    if (!locationMock) {
      reject("Location Not Found");
    }
    const TransformedResult = locationTransform(locationMock);
    resolve(TransformedResult);
    // console.log(TransformedResult);
  });
};

export const locationTransform = (result) => {
  const { geometry = {} } = camelize(result).results[0];
  const { lat, lng } = geometry.location;
  const locationString = lat + "," + lng;
  return locationString;
};
