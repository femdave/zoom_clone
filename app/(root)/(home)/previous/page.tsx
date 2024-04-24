import CallList from "@/components/CallList";
import React from "react";

const Previous = () => {
  return (
    <section className="flex flex-col size-full gap-10 text-white">
      <CallList type="ended" />
    </section>
  );
};

export default Previous;
