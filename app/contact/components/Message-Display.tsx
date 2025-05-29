import { FC } from "react";

type MessageDisplayProps = {
  message: string;
  type: "success" | "error";
  onClose?: () => void;
};

const MessageDisplay: FC<MessageDisplayProps> = ({ message, type, onClose }) => {
  const baseStyles =
    "relative flex items-center px-6 py-4 rounded-md mb-4 text-white text-base min-h-[100px]";
  const typeStyles =
    type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div className={`${baseStyles} ${typeStyles}`}>
      <p>{message}</p>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-white text-2xl leading-none hover:text-gray-200"
          aria-label="Close message"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default MessageDisplay;
