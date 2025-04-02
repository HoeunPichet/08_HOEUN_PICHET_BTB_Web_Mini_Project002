// Error required message for user
export default function ErrorMessage({ message }) {
    return (
        <span className="text-xs text-red-500">{message}</span>
    );
}