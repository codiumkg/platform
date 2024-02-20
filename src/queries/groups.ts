import { QUERY_KEYS } from "@/constants/queryKeys";
import { IGroup } from "@/interfaces/group";
import { getGroupDetails, getGroups } from "../requests/groups";
import { useQuery } from "@tanstack/react-query";

export const useGroupsQuery = () => {
  const { data, isLoading } = useQuery({
    queryFn: getGroups,
    queryKey: [QUERY_KEYS.GROUPS],
    refetchOnWindowFocus: false,
    staleTime: 35 * 1000,
  });

  return {
    data,
    isLoading,
  };
};

interface QueryParams {
  enabled?: boolean;
}

export const useGroupDetailsQuery = (id: number, { enabled }: QueryParams) => {
  const { data, isLoading, isSuccess } = useQuery<IGroup>({
    queryFn: () => getGroupDetails(id),
    queryKey: [QUERY_KEYS.GROUPS, id],
    enabled,
  });

  return {
    data,
    isLoading,
    isSuccess,
  };
};
