"use client";

import { useRef, useState } from "react";
import { useClickOutside } from "@/src/shared/hooks/useClickOutside";
import toast from "react-hot-toast";
import ModalOverlay from "@/src/shared/components/ModalOverlay";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AddParticipantModal({ open, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, onClose);

  if (!open) return null;

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = () => {
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    onClose();
    toast.success("Invitation sent successfully");
  };

  return (
    <ModalOverlay open={open} onClose={onClose}>
      <div
        ref={ref}
        className="z-10 space-y-3 bg-white shadow-xl p-5 rounded-xl w-full max-w-md"
      >
        <h2 className="font-semibold text-lg">Invite a Participant</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full text-sm"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
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
    </ModalOverlay>
  );
}
