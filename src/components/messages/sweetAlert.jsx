/**
 * @description Smart Alert Tao Bao🥲
 * @developer <Pichet>
 * @since 01-April-2025
*/
export default function SweetAlert({ message, type }) {
    return (
        <div className={"fixed top-5 right-5 right-to-left bg-white border border-gray-300 border-l-4 drop-shadow-light-steel-blue w-full max-w-xs px-5 py-3 min-h-10 rounded-lg z-50 "
            + (type == "success" ? "border-l-green-600" : "border-l-red-500")}
        >
            <div className="flex gap-4 w-full items-center">
                <span className="">{message}</span>
            </div>
        </div>
    );
}