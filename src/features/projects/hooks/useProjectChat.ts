import { useEffect, useRef, useState } from "react";
import { Message } from "../types/project.types";
import { getProjectMessages } from "../services/projects.service";

export function useProjectChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [pendingFile, setPendingFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function fetchMessages() {
      try {
        setIsLoading(true);
        const data = await getProjectMessages();
        setMessages(data);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMessages();
  }, []);

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

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setPendingFile(null);
  }

  function handleFileUpload(file: File) {
    setPendingFile(file);
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
  };
}
