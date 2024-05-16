import { useUserData } from "@/queries/userdata";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import useAuth from "@/hooks/useAuth";

function InfoSection() {
  const { checkIsLoggedIn } = useAuth();

  const { data, isFetching } = useUserData({ enabled: checkIsLoggedIn() });

  return (
    <div className="flex gap-4 justify-between items-center p-6 h-96">
      <div className="flex flex-col items-center justify-center min-w-48">
        {isFetching && <LoadingSpinner light size="l" />}
        {!isFetching && (
          <>
            <h1 className="text-4xl md:text-6xl mb-6 font-bold">
              {data?.group?.subject.title}
            </h1>
            <div className="bg-secondary rounded-full text-background text-md md:text-2xl px-4 md:px-10 py-3 grid place-content-center">
              {data?.group?.title}
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col">
        <div className="w-36 h-36">
          <CircularProgressbar
            value={0}
            text="0%"
            styles={buildStyles({
              strokeLinecap: "butt",
              textColor: "hsl(var(--nextui-foreground))",
              backgroundColor: "hsl(var(--nextui-background))",
              pathColor: "hsl(var(--nextui-secondary))",
              trailColor: "hsl(var(--nextui-bgSecondary))",
            })}
          />
        </div>
        {/* <h2 className="text-center mb-4 text-xl">Выполнено</h2> */}
      </div>
    </div>
  );
}

export default InfoSection;
