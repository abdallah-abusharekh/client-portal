"use client";

import { useRef, useState } from "react";
import { Participant } from "./ParticipantSelector";
import { useClickOutside } from "@/src/shared/hooks/useClickOutside";

type Props = {
  open: boolean;
  onClose: () => void;
  onCreate: (person: Participant) => void;
};

export default function AddParticipantModal({
  open,
  onClose,
  onCreate,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    jobTitle: "",
    email: "",
  });

  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, onClose);

  if (!open) return null;

  const handleSubmit = () => {
    const newPerson: Participant = {
      id: crypto.randomUUID(),
      name: form.name.trim(),
      jobTitle: form.jobTitle.trim(),
      email: form.email?.trim(),
    };

    onCreate(newPerson);

    setForm({ name: "", jobTitle: "", email: "" });
    onClose();
  };

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-[2px]">
      <div
        ref={ref}
        className="space-y-3 bg-white shadow-xl p-5 rounded-xl w-full max-w-md"
      >
        <h2 className="font-semibold text-lg">Add Participant</h2>

        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="p-2 border border-gray-300 rounded-lg w-full text-sm"
        />

        <input
          placeholder="Job Title"
          value={form.jobTitle}
          onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
          className="p-2 border border-gray-300 rounded-lg w-full text-sm"
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="p-2 border border-gray-300 rounded-lg w-full text-sm"
        />

        <div className="flex gap-2 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="p-2 border rounded-lg w-full text-sm"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            className="bg-primary p-2 rounded-lg w-full text-white text-sm"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
