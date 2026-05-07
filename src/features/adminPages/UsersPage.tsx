"use client";

import Table from "../adminTables/Table";
import UsersFiltersBar from "./components/UsersFiltersBar";
import { useUsersPageState } from "./hooks/useUsersPageState";
import { usePagination } from "@/src/shared/hooks/usePagination";
import Pagination from "@/src/shared/components/Pagination";
import PageHeader from "@/src/shared/components/PageHeader";

export default function UsersPage() {
  const {
    setData,
    search,
    setSearch,
    roleFilter,
    setRoleFilter,
    statusFilter,
    setStatusFilter,
    roleOptions,
    statusOptions,
    selectedUserIds,
    filteredUsers,
    isAllSelected,
    handleBulkStatusUpdate,
    handleToggleUserSelection,
    handleToggleAllUsersSelection,
  } = useUsersPageState();

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
        onSuspend={() => handleBulkStatusUpdate("suspended")}
        onActivate={() => handleBulkStatusUpdate("active")}
      />

      <Table
        users={paginatedItems}
        setUsers={setData}
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
