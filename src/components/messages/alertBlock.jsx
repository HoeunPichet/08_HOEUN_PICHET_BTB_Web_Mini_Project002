// Error required message for user
export default function AlertBlock({ message, type }) {
    const TXT_COLOR = type == "success" ? "text-green-600" : "text-red-500";
    const BORDER_COLOR = type == "success" ? "border-green-600" : "border-red-500";
    const BG_COLOR = type == "success" ? "bg-green-600/30" : "bg-red-500/30";

    return (
        <div className={`w-full border px-3 py-1.5 rounded-lg ${BORDER_COLOR} ${BG_COLOR}`}>
            <span className={`text-xs ${TXT_COLOR}`}>{message}</span>
        </div>
    );
}