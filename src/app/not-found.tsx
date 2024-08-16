import Link from "next/link";

export default function NotFound() {
  return (
    <div className={"h-dvh flex justify-center items-center"}>
      <div>
        <h2
          className={
            "text-primary uppercase font-bold text-4xl mb-4 text-center font-bebas"
          }>Not Found</h2>
        <p
          className={
            "text-center font-bebas text-2xl uppercase text-line font-bold tracking-[1.28px] mb-4"
          }
        >
          {"Could not find requested resource"}
        </p>
        <div className={" flex justify-center"}>
          <Link
            className={
              "w-48 flex items-center text-xl rounded-md font-bold text-white justify-center h-12 uppercase font-bebas bg-secondary"
            }
            href={"/"}
          >
            {"Return Home"}
          </Link>
        </div>
      </div>
    </div>
  );
}
