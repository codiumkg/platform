import { useUserData, useUserProgress } from "@/queries/userdata";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import useAuth from "@/hooks/useAuth";

function InfoSection() {
  const { checkIsLoggedIn } = useAuth();

  const { data, isFetching } = useUserData({ enabled: checkIsLoggedIn() });

  const { data: progress, isLoading } = useUserProgress();

  return (
    <div className="flex gap-4 justify-between items-center py-20">
      <div className="flex flex-col justify-center min-w-48">
        {isFetching && <LoadingSpinner light size="l" />}
        {!isFetching && (
          <>
            <h1 className="text-4xl md:text-6xl mb-4 font-bold">
              {data?.group?.subject.title}
            </h1>
            <div className="bg-secondary rounded-full text-background text-sm md:text-2xl px-2 md:px-8 py-2 grid place-content-center">
              {data?.group?.title}
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="w-32 h-32 md:w-52 md:h-52">
          <CircularProgressbar
            value={progress?.percent || 0}
            text={!isLoading ? `${progress?.percent}%` : "Загрузка..."}
            styles={buildStyles({
              textSize: "14px",
              strokeLinecap: "butt",
              textColor: "hsl(var(--nextui-foreground))",
              backgroundColor: "hsl(var(--nextui-background))",
              pathColor: "hsl(var(--nextui-secondary))",
              trailColor: "hsl(var(--nextui-bgSecondary))",
            })}
          />
        </div>
        <h2 className="text-center text-xl">Выполнено</h2>
      </div>
    </div>
  );
}

export default InfoSection;
