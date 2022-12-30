import { mocks } from "./mock";
import camelize from "camelize";

export const resturantRequest = (locate) => {
  console.log("resService");
  console.log(`locate is : ${locate}`);
  return new Promise((resolve, reject) => {
    const mock = mocks[locate];
    if (!mock) {
      reject("Location not Found!!");
      console.log("resService: REjecet");
    }
    resolve(resturantsTransform(mock));
    console.log("resService resolved");
  });
};

const resturantsTransform = ({ results }) => {
  const mappedResults = camelize(results).map((resturant) => {
    return {
      ...resturant,
      isOpenNow: resturant.opening_hours && resturant.opening_hours.open_now,
      isClosedTemporarily: resturant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return mappedResults;
};
