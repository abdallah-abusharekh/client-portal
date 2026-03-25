import { Message } from "../../../types/project.types";

type Props = {
  msg: Message;
};

export default function ChatMessageItem({ msg }: Props) {
  const isMe = msg.user === "You";

  return (
    <div className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
      <p className="mb-1 text-gray-500 text-xs">
        {msg.user} • {msg.time}
      </p>
      <div
        className={`space-y-2 px-3 py-2 rounded-xl max-w-[80%] ${
          isMe ? "bg-primary text-white" : "bg-gray-100"
        }`}
      >
        {msg.file &&
          (msg.file.type.startsWith("image/") ? (
            <a href={msg.file.url} download={msg.file.name}>
              <img
                src={msg.file.url}
                alt={msg.file.name}
                className="rounded-lg max-w-[250px] object-cover"
              />
            </a>
          ) : (
            <a
              href={msg.file.url}
              download={msg.file.name}
              className="flex items-center gap-2 hover:bg-black/10 px-2 py-1 rounded-md"
            >
              📄
              <span className="text-sm">{msg.file.name}</span>
            </a>
          ))}
        {msg.text && <p className="text-sm">{msg.text}</p>}
      </div>
    </div>
  );
}
