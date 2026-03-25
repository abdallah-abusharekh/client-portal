import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProjectFiles, uploadFile } from "../services/projects.service";

export function useProjectFiles() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["project", "files"],
    queryFn: getProjectFiles,
  });

  const mutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project", "files"] });
    },
  });

  return {
    files: query.data ?? [],
    isLoading: query.isLoading,
    uploadFile: mutation.mutate,
    isUploading: mutation.isPending,
  };
}
