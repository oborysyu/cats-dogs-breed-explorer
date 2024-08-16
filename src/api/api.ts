import { Cat, Dog, Pet, PetType } from "@/types/types";
import { shuffle } from "./utils";

const DOGS_API_KEY = process.env.DOGS_API_KEY as string;
const CATS_API_KEY = process.env.CATS_API_KEY as string;
const CATS_API_URL = process.env.CATS_API_URL as string;
const DOGS_API_URL = process.env.DOGS_API_URL as string;

const getInfo = async <T>(url: string, apiKey: string): Promise<T> => {
  try {
    const response = await fetch(url, {
      headers: {
        "x-api-key": apiKey,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);

    throw new Error();
  }
};

export async function getPets() {
  const params = new URLSearchParams({
    limit: "10",
    has_breeds: "1",
    order: "RAND",
  });
  try {
    const cats = await getInfo<Pet<Cat>[]>(
      `${CATS_API_URL}images/search?${params}`,
      CATS_API_KEY
    );
    const dogs = await getInfo<Pet<Dog>[]>(
      `${DOGS_API_URL}images/search?${params}`,
      DOGS_API_KEY
    );

    const catsWithType = cats.map((cat) => ({
      id: cat.id,
      name: cat.breeds[0].name,
      breedId: cat.breeds[0].id,
      imageUrl: cat.url,
      petType: "cat",
    }));

    const dogsWithType = dogs.map((dog) => ({
      id: dog.id,
      name: dog.breeds[0].name,
      breedId: dog.breeds[0].id.toString(),
      imageUrl: dog.url,
      petType: "dog",
    }));

    return shuffle([...catsWithType, dogsWithType].flat());
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);
    throw new Error();
  }
}

export const getPet = async (petType: PetType, breedId: string) => {
  try {
    const url = (petType === "cat") ? CATS_API_URL : DOGS_API_URL;
    const key = (petType === "cat") ? CATS_API_KEY : DOGS_API_KEY;
    const response = await getInfo<Dog | Cat>(
      `${url}breeds/${breedId}`, key
    );

    return response;
  } catch (error) {
    console.error(`Error, something went wrong:${error}`);
    throw new Error();
  }
};

export const getBreedImages = async (breedId: string, petType: PetType) => {
  const reqParams =
    petType === "cat"
      ? { url: CATS_API_URL, apiKey: CATS_API_KEY }
      : { url: DOGS_API_URL, apiKey: DOGS_API_KEY };
  const response = await getInfo<Pet<Cat | Dog>[]>(
    `${reqParams.url}images/search?limit=6&breed_ids=${breedId}`,
    reqParams.apiKey
  );
  const images = response.map(({ id, url }) => ({ id, imageUrl: url }));

  return images;
};

export const getImage = async (petType: PetType, imageId: string) => {
  const reqParams =
    petType === "cat"
      ? { url: CATS_API_URL, apiKey: CATS_API_KEY }
      : { url: DOGS_API_URL, apiKey: DOGS_API_KEY };

  const response = await getInfo<Pet<Cat | Dog>>(
    `${reqParams.url}images/${imageId}`,
    reqParams.apiKey
  );

  return { id: response.id, imageUrl: response.url };
};
