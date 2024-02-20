import { QUERY_KEYS } from "@/constants/queryKeys";
import { getSectionDetails, getSections } from "@/requests/sections";
import { useQuery } from "@tanstack/react-query";

interface QueryParams {
  params?: any;
  enabled?: boolean;
}

export const useSectionsQuery = ({ params, enabled }: QueryParams) => {
  const { data, isPending, refetch } = useQuery({
    queryFn: () => getSections(params?.search || ""),
    queryKey: [QUERY_KEYS.SECTIONS, params?.title],
    refetchOnWindowFocus: false,
    enabled,
  });

  return {
    data,
    isPending,
    refetch,
  };
};

export const useSectionDetailsQuery = (
  id: number,
  { enabled }: QueryParams
) => {
  const { data, isPending, isSuccess } = useQuery({
    queryFn: () => getSectionDetails(id),
    queryKey: [QUERY_KEYS.SECTIONS, id],
    enabled,
  });

  return {
    data,
    isPending,
    isSuccess,
  };
};
