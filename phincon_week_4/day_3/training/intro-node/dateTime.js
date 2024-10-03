const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const getYear = () => {
    return new Date().getFullYear();
};
const getDay = () => {
    return weekday[new Date().getDay()];
};
const getDate = () => {
    return new Date().getDate();
};
const getMonth = () => {
    return Number(new Date().getMonth()) + 1;
};

const getFullDate = () => {
    return getDay() + ", " + getDate() + "/" + getMonth() + "/" + getYear();
};

const day = "Wednesday";

const numbers = [1, 2, 3, 4, 5];

module.exports = { day, getDay, getMonth, getYear, numbers, getFullDate };
