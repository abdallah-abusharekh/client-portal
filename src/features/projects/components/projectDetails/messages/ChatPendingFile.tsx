type Props = {
  file: File;
  onRemove: () => void;
};

export default function ChatPendingFile({ file, onRemove }: Props) {
  return (
    <div className="space-y-2 bg-gray-100 mx-3 p-3 rounded-xl">
      {file.type.startsWith("image/") ? (
        <img
          src={URL.createObjectURL(file)}
          alt="preview"
          className="rounded-lg max-h-40 object-cover"
        />
      ) : (
        <div className="flex items-center gap-2 text-sm">
          📄 <span>{file.name}</span>
          <span className="text-gray-400 text-xs">
            {(file.size / 1024).toFixed(1)} KB
          </span>
        </div>
      )}

      <button onClick={onRemove} className="text-red-500 text-xs">
        Remove
      </button>
    </div>
  );
}
