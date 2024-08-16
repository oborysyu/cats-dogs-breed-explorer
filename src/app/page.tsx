import { getPets } from "@/api/api";
import { BreedsContainer } from "@/components/common/BreedsContainer";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Loading from "../components/common/Loading";

export default async function Home() {
  const response = await getPets();

  if (response.length === 0) {
    notFound();
  }

  return (
    <main>
      <h1
        className={"text-center text-4xl mb-4 text-primary"}>
        Cats&Dogs breed explorer
      </h1>

      <Suspense fallback={<Loading />}>
        <BreedsContainer breeds={response} />
      </Suspense>
    </main>
  );
}
