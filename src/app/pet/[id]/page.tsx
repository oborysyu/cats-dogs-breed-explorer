import { getBreedImages, getImage, getPet } from "@/api/api";
import { BreedInfoItem } from "@/components/common/BreedInfoItem";
import { ImageAsync } from "@/components/common/ImageAsync";
import { ImagesCatalog } from "@/components/ImagesCatalog";
import { Cat, Dog, PetType } from "@/types/types";

export default async function Page({
  params,
  searchParams,
}: {
  params: {
    id: string;
  };
  searchParams: {
    type: PetType;
  };
}) {
  const { id } = params;
  const { type } = searchParams;

  const pet = await getPet(type, id);
  const image = await getImage(type, pet.reference_image_id);
  const breedImages = await getBreedImages(String(id), type);

  return (
    <main>
      <article>
        <h1 className={"mb-4 text-3xl uppercase text-center font-bold font-roboto"}>{pet.name}</h1>
        <div className={"lg:flex"}>
          <div className={"relative flex-1  mb-4"}>
            <div className={"relative w-full h-[300px] mb-4"}>
              <ImageAsync
                objectfit="object-contain"
                src={image.imageUrl}
                fill={true}
                alt={`photo of ${pet.name}`}
              />
            </div>
            {(pet as Cat).description && (<div className={'mb-4'}>
              <p className={'text-primary text-lg'}>{(pet as Cat).description}</p>
            </div>)
            }
          </div>
          <div className={"flex-1 p-4"}>
            {(type === "dog") && (
              <>
                <BreedInfoItem breedParam={"id"} breedInfo={String(id)} />
                <BreedInfoItem breedParam={"Bred for"} breedInfo={(pet as Dog).bred_for} />
                <BreedInfoItem breedParam={"Bred group"} breedInfo={(pet as Dog).breed_group} />
                <BreedInfoItem breedParam={"Life span"} breedInfo={(pet as Dog).life_span} />
                <BreedInfoItem breedParam={"Weight"} breedInfo={(pet as Dog).weight.metric} />
                <BreedInfoItem breedParam={"Height"} breedInfo={(pet as Dog).height.metric} />
              </>
            )
            }
            {(type === "cat") && (
              <>
                <BreedInfoItem breedParam={"id"} breedInfo={String(id)} />
                <BreedInfoItem breedParam={"Temperament"} breedInfo={(pet as Cat).temperament} />
                <BreedInfoItem breedParam={"Weight"} breedInfo={(pet as Cat).weight.metric} />
                <BreedInfoItem breedParam={"Origin"} breedInfo={(pet as Cat).origin} />
                <BreedInfoItem breedParam={"Country codes"} breedInfo={(pet as Cat).country_codes} />
                <BreedInfoItem breedParam={"Country code"} breedInfo={(pet as Cat).country_code} />
                <BreedInfoItem breedParam={"Life span"} breedInfo={(pet as Cat).life_span} />
              </>
            )
            }
          </div>
        </div>
        <ImagesCatalog name={pet.name} images={breedImages} />
      </article>
    </main>
  );
}
