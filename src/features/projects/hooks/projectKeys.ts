export const projectKeys = {
  all: ["projects"] as const,
  details: (projectId: string) =>
    [...projectKeys.all, "details", projectId] as const,
};
