"use client";

import { useMemo, useRef, useState } from "react";
import AddParticipantModal from "./AddParticipantModal";
import { useClickOutside } from "@/src/shared/hooks/useClickOutside";

export type Participant = {
  id: string;
  name: string;
  jobTitle: string;
  email?: string;
};

type Props = {
  value: Participant[];
  onChange: (value: Participant[]) => void;
  options: Participant[];
};

export default function ParticipantSelector({
  value,
  onChange,
  options,
}: Props) {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => {
    setQuery("");
  });

  const filtered = useMemo(() => {
    if (!query.trim()) return [];

    return options.filter((p) =>
      `${p.name} ${p.jobTitle}`.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, options]);

  const toggle = (person: Participant) => {
    const exists = value.some((v) => v.id === person.id);

    onChange(
      exists ? value.filter((v) => v.id !== person.id) : [...value, person],
    );
  };

  const addAll = () => {
    onChange(
      Array.from(
        new Map([...value, ...options].map((p) => [p.id, p])).values(),
      ),
    );
  };

  const addManual = (person: Participant) => {
    onChange([...value, person]);
  };

  return (
    <div ref={containerRef} className="space-y-4">
      {/* SEARCH */}
      <div className="relative">
        <label className="block font-medium text-gray-700 text-sm">
          Search Participants
        </label>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type a name or role..."
          className="mt-1 px-3 py-2 border border-gray-300 focus:border-primary rounded-lg outline-none focus:ring-2 focus:ring-primary w-full text-sm"
        />
        {/* SEARCH RESULTS */}
        {query.trim() && filtered.length > 0 && (
          <div className="z-10 absolute bg-white shadow-lg mt-1 border border-gray-200 rounded-lg w-full">
            <ul className="max-h-48 overflow-auto">
              {filtered.map((p) => {
                const selected = value.some((v) => v.id === p.id);

                return (
                  <li
                    key={p.id}
                    className="flex justify-between items-center px-3 py-2 border-b last:border-b-0"
                  >
                    <div>
                      <p className="font-medium text-sm">{p.name}</p>
                      <p className="text-gray-500 text-xs">{p.jobTitle}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggle(p)}
                      className="text-primary text-xs underline"
                    >
                      {selected ? "Remove" : "Add"}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {/* SELECTED */}
      {value.length > 0 && (
        <div>
          <label className="block font-medium text-gray-700 text-sm">
            Selected
          </label>

          <ul className="mt-1 border border-gray-200 rounded-lg max-h-40 overflow-auto">
            {value.map((p) => (
              <li
                key={p.id}
                className="flex justify-between items-center px-3 py-2 border-b last:border-b-0"
              >
                <div>
                  <p className="font-medium text-sm">{p.name}</p>
                  <p className="text-gray-500 text-xs">{p.jobTitle}</p>
                </div>

                <button
                  type="button"
                  onClick={() => toggle(p)}
                  className="text-red-500 text-xs"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ACTIONS */}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={addAll}
          className="hover:bg-gray-50 px-3 py-2 border border-gray-300 rounded-lg text-sm transition"
        >
          Add all members
        </button>

        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="bg-primary px-3 py-2 rounded-lg text-white text-sm"
        >
          + Add Person
        </button>
      </div>

      {/* MODAL */}
      <AddParticipantModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onCreate={addManual}
      />
    </div>
  );
}
