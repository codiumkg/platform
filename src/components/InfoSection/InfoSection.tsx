import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function InfoSection() {
  return (
    <div className="flex gap-4 justify-between items-center p-6 h-60 mb-40">
      <div className="flex flex-col">
        <h1 className="text-4xl md:text-6xl mb-6 font-bold">Python</h1>
        <div className="bg-accent-secondary rounded-full text-primary text-md md:text-2xl px-4 md:px-10 py-3 grid place-content-center">
          Python Junior
        </div>
      </div>
      <div className="flex flex-col">
        <div className="w-40 h-40">
          <h2 className="text-center mb-4 text-xl">Выполнено</h2>
          <CircularProgressbar
            value={56}
            text="56%"
            styles={buildStyles({
              strokeLinecap: "butt",
              textColor: "var(--accent-color)",
              backgroundColor: "var(--primary-color)",
              pathColor: "var(--accent-secondary-color)",
              trailColor: "var(--secondary-color)",
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
