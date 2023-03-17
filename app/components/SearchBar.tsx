"use client";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const handleSearch = (e: SyntheticEvent) => {
    router.push("/search");
  };
  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="rounded bg-red-600 px-9 py-2 text-white"
        onClick={handleSearch}
      >
        Let's go
      </button>
    </div>
  );
}