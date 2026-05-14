"use client";

import UsersFiltersBar from "../components/UsersFiltersBar";
import { usePagination } from "@/src/shared/hooks/usePagination";
import Pagination from "@/src/shared/components/Pagination";
import PageHeader from "@/src/shared/components/PageHeader";
import Table from "../../adminTables/components/Table";
import { useUsers } from "../hooks/useUsers";
import { useUsersFilters } from "../hooks/useUsersFilters";
import { useUsersSelection } from "../hooks/useUsersSelection";
import { useUpdateUsersStatus } from "../hooks/useUpdateUsersStatus";
import { useDeleteUsers } from "../hooks/userDeleteUsers";
import ErrorState from "@/src/shared/components/ErrorState";
import ListPageSkeleton from "./ListPageSkeleton";
import EmptyState from "@/src/shared/components/EmptyState";

export default function UsersPage() {
  const { data = [], isLoading, error } = useUsers();

  const {
    search,
    setSearch,
    roleFilter,
    setRoleFilter,
    statusFilter,
    setStatusFilter,
    roleOptions,
    statusOptions,
    filteredUsers,
  } = useUsersFilters(data);

  const {
    selectedUserIds,
    isAllSelected,
    handleToggleUserSelection,
    handleToggleAllUsersSelection,
  } = useUsersSelection();

  const { mutate: updateUsersStatus } = useUpdateUsersStatus();
  const { mutate: deleteUsers } = useDeleteUsers();

  const {
    currentPage,
    totalPages,
    paginatedItems,
    canGoPrev,
    canGoNext,
    goToPage,
    goToPrevPage,
    goToNextPage,
  } = usePagination(filteredUsers, { pageSize: 7 });

  const paginatedUserIds = paginatedItems.map((user) => user.id);
  const allPageUsersSelected = isAllSelected(paginatedUserIds);

  if (isLoading) {
    return <ListPageSkeleton />;
  }

  if (paginatedItems.length === 0) {
    return <EmptyState message="No users found." />;
  }

  if (error) {
    return <ErrorState message="Failed to fetch users." />;
  }

  return (
    <div className="flex flex-col space-y-5 h-full">
      <div className="space-y-1">
        <PageHeader title="All users" subtitle="Manage client-portal users" />
      </div>

      <UsersFiltersBar
        search={search}
        onSearchChange={setSearch}
        roleFilter={roleFilter}
        onRoleFilterChange={setRoleFilter}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        roleOptions={roleOptions}
        statusOptions={statusOptions}
        canBulkUpdate={selectedUserIds.length > 0}
        onSuspend={() =>
          updateUsersStatus({ ids: selectedUserIds, status: "suspended" })
        }
        onActivate={() =>
          updateUsersStatus({ ids: selectedUserIds, status: "active" })
        }
      />

      <Table
        items={paginatedItems}
        updateUsersStatus={updateUsersStatus}
        deleteUsers={deleteUsers}
        selectedUserIds={selectedUserIds}
        onToggleUserSelection={handleToggleUserSelection}
        onToggleAllUsersSelection={() =>
          handleToggleAllUsersSelection(paginatedUserIds)
        }
        allUsersSelected={allPageUsersSelected}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
        onPrevPage={goToPrevPage}
        onNextPage={goToNextPage}
        canGoPrev={canGoPrev}
        canGoNext={canGoNext}
      />
    </div>
  );
}
