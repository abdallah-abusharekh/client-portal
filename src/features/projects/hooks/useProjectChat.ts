import { useRef, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Message } from "../types/project.types";
import { getProjectMessages } from "../services/projects.service";

export function useProjectChat() {
  const queryClient = useQueryClient();

  const [input, setInput] = useState("");
  const [pendingFile, setPendingFile] = useState<File | null>(null);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const { data: messages = [], isLoading } = useQuery({
    queryKey: ["projectMessages"],
    queryFn: getProjectMessages,
  });

  const sendMessageMutation = useMutation({
    mutationFn: async (newMessage: Message) => {
      return newMessage;
    },
    onSuccess: (newMessage) => {
      queryClient.setQueryData<Message[]>(["projectMessages"], (old = []) => [
        ...old,
        newMessage,
      ]);
    },
  });

  function handleSend() {
    if (!input.trim() && !pendingFile) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      user: "You",
      text: input || undefined,
      file: pendingFile
        ? {
            name: pendingFile.name,
            size: pendingFile.size,
            url: URL.createObjectURL(pendingFile),
            type: pendingFile.type,
          }
        : undefined,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    sendMessageMutation.mutate(newMessage);

    setInput("");
    setPendingFile(null);
  }

  function handleFileUpload(file: File) {
    setPendingFile(file);
  }

  return {
    messages,
    input,
    setInput,
    pendingFile,
    setPendingFile,
    handleSend,
    handleFileUpload,
    bottomRef,
    isLoading,
    isSending: sendMessageMutation.isPending,
  };
}
