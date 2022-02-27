import { actionTypes } from "../reducer/reducer";
import { unsplash } from "./unsplash";

export const searchImages = async ({ searchValue, options, dispatch }) => {
  console.log(options, 'search')
  try {
    const { response } = await unsplash.search.getPhotos({
      query: searchValue,
      ...options,
    });
    if (response) {
      dispatch({ type: actionTypes.showResults, payload: response.results });
    }
  } catch (err) {
    console.log(err)
  }
};
