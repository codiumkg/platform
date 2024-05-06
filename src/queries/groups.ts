import { IGroup } from "@/interfaces/group";
import { getGroupDetails, getGroups } from "../requests/groups";
import { useQuery } from "@tanstack/react-query";
import { ApiConstants } from "@/constants/apiConstants";

export const useGroupsQuery = () => {
  const { data, isLoading } = useQuery({
    queryFn: getGroups,
    queryKey: [ApiConstants.GROUPS],
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
    queryKey: [ApiConstants.GROUPS, id],
    enabled,
  });

  return {
    data,
    isLoading,
    isSuccess,
  };
};
