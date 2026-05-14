import { useState } from "react";

export function useUsersSelection() {
  const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);

  const handleToggleUserSelection = (id: string) => {
    setSelectedUserIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const isAllSelected = (ids: string[]) =>
    ids.length > 0 && ids.every((id) => selectedUserIds.includes(id));

  const handleToggleAllUsersSelection = (ids: string[]) => {
    setSelectedUserIds((prev) => {
      if (isAllSelected(ids)) {
        return prev.filter((id) => !ids.includes(id));
      }

      const next = new Set(prev);

      ids.forEach((id) => next.add(id));

      return Array.from(next);
    });
  };

  return {
    selectedUserIds,
    setSelectedUserIds,

    isAllSelected,

    handleToggleUserSelection,
    handleToggleAllUsersSelection,
  };
}
