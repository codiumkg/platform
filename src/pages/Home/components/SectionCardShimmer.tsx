import { FaBook } from "react-icons/fa";

function SectionCardShimmer() {
  return (
    <div className="flex flex-col p-4 rounded-xl bg-secondary min-h-40">
      <div>
        <div className="w-full h-4 bg-secondary-dark rounded-full mb-2"></div>
        <div className="w-12 h-4 bg-secondary-dark rounded-full"></div>
      </div>

      <div className="flex w-full justify-end mt-10">
        <div className="p-4 rounded-full bg-secondary-dark">
          <FaBook className="text-secondary text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default SectionCardShimmer;
