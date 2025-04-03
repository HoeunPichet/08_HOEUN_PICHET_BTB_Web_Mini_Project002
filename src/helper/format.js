export const formatDate = (dt, longDate = false) => {
    const date = new Date(dt);
    const longOption = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    };

    const shortOption = {
        year: "numeric",
        month: "short",
        day: "numeric",
    };

    let formattedDate;
    if (longDate) formattedDate = date.toLocaleDateString("en-US", longOption);
    else formattedDate = date.toLocaleDateString("en-US", shortOption);
    return formattedDate;
};
