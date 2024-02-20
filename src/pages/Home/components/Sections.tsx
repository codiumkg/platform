import { useSectionsQuery } from "@/queries/sections";

import SectionCard from "./SectionCard";
import { useNavigate } from "react-router";
import { ROUTES } from "@/constants/routes";
import SectionCardShimmer from "./SectionCardShimmer";

function Sections() {
  const { data: sections, isPending } = useSectionsQuery({});

  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-2xl font-bold">Разделы</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-10">
        {isPending && (
          <>
            <SectionCardShimmer />
            <SectionCardShimmer />
            <SectionCardShimmer />
            <SectionCardShimmer />
            <SectionCardShimmer />
            <SectionCardShimmer />
            <SectionCardShimmer />
          </>
        )}
        {!isPending &&
          sections?.map((section, index) => (
            <SectionCard
              key={index}
              section={section}
              onClick={() =>
                navigate(`${ROUTES.SECTION_DETAILS}/${section.id}`)
              }
            />
          ))}
      </div>
    </div>
  );
}

export default Sections;
