"use client";

import { useProjectChat } from "../../hooks/useProjectChat";
import ProjectChatSkeleton from "../skeletons/ProjectChatSkeleton";
import ChatInput from "./messages/ChatInput";
import ChatMessages from "./messages/ChatMessages";
import ChatPendingFile from "./messages/ChatPendingFile";

export default function ProjectChat() {
  const {
    messages,
    input,
    setInput,
    pendingFile,
    setPendingFile,
    handleSend,
    handleFileUpload,
    bottomRef,
    isLoading,
  } = useProjectChat();

  return (
    <div className="flex flex-col bg-white shadow-sm rounded-2xl h-full">
      <div className="px-6 py-4 border-gray-300 border-b">
        <h3 className="font-semibold">Project Discussion</h3>
      </div>

      <div className="flex-1 space-y-4 p-4 max-h-80 overflow-y-auto">
        {isLoading ? (
          <ProjectChatSkeleton />
        ) : (
          <ChatMessages messages={messages} bottomRef={bottomRef} />
        )}
      </div>

      {pendingFile && (
        <ChatPendingFile
          file={pendingFile}
          onRemove={() => setPendingFile(null)}
        />
      )}

      <ChatInput
        input={input}
        setInput={setInput}
        onSend={handleSend}
        onUpload={handleFileUpload}
      />
    </div>
  );
}
