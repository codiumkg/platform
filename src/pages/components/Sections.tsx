import { useSectionsQuery } from "@/queries/sections";

import SectionCard from "./SectionCard";

function Sections() {
  const { data: sections, isPending } = useSectionsQuery({});

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-10">
      {!isPending &&
        sections?.map((section, index) => (
          <SectionCard key={index} section={section} />
        ))}
    </div>
  );
}

export default Sections;
