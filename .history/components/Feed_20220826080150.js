import React from "react";
import Posts from "./Posts";
import Stories from "./Stories";


export default function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
      <section className="md:col-span-2">
        {/* Stories */}
        <Stories/>

        {/* Posts */}
        <Posts/>
      </section>

      <section>
        {/* Mini profile */}
   
        {/* Suggestions */}
      </section>
    </main>
  );
}
