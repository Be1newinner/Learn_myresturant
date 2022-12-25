import { mocks } from "./mock";
export const resturantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Location not Found!!");
    }
    resolve(mock);
  });
};

const resturantsTransformed = ({ results = [] }) => {
  const mappedResults = results.map((resturant) => {
    return {
      ...resturant,
      isClosedTemporarily: resturant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  console.log(mappedResults);
  return results;
};

resturantRequest()
  .then(resturantsTransformed)
  .then((transformedResponse) => {
    // console.log(transformedResponse);
  })
  .catch((err) => {
    console.log(err);
  });
