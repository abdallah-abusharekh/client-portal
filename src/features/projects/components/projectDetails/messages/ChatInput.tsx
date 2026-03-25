import { FiPaperclip } from "react-icons/fi";
import Button from "@/src/shared/components/Button";
import Input from "@/src/shared/components/Input";

type Props = {
  input: string;
  setInput: (val: string) => void;
  onSend: () => void;
  onUpload: (file: File) => void;
};

export default function ChatInput({
  input,
  setInput,
  onSend,
  onUpload,
}: Props) {
  return (
    <div className="flex items-center gap-2 p-3 border-gray-200 border-t shrink-0">
      <label className="text-gray-500 hover:text-gray-700 cursor-pointer">
        <FiPaperclip />
        <input
          type="file"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) onUpload(file);
          }}
        />
      </label>

      <Input
        value={input}
        onChange={setInput}
        placeholder="Write a comment..."
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            onSend();
          }
        }}
      />

      <Button onClick={onSend}>Send</Button>
    </div>
  );
}
