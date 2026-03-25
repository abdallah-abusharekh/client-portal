import { Message } from "../../../types/project.types";
import ChatMessageItem from "./ChatMessageItem";

type Props = {
  messages: Message[];
  bottomRef: React.RefObject<HTMLDivElement | null>;
};

export default function ChatMessages({ messages, bottomRef }: Props) {
  if (messages.length === 0) {
    return (
      <div className="flex justify-center items-center h-full text-gray-500 text-sm">
        No messages yet
      </div>
    );
  }

  return (
    <>
      {messages.map((msg) => (
        <ChatMessageItem key={msg.id} msg={msg} />
      ))}
      <div ref={bottomRef} />
    </>
  );
}
