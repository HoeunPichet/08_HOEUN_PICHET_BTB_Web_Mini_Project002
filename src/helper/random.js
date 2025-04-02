const COLORS = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-watermelon-red",
    "bg-royal-blue",
    "bg-persian-green",
    "bg-light-steel-blue",
    "bg-ghost-white",
    "bg-charcoal",
];

// Random colors
export function getRandomColorClass() {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex];
}