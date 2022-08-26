import React from "react";
import MiniProfile from "./MiniProfile";
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

      <section className="hidden md:inline-grid md:col-span-1">
        <div className="fixed w- [380px]">
        {/* Mini profile */}
        <MiniProfile/>


        {/* Suggestions */}
        </div>
      </section>
    </main>
  );
}