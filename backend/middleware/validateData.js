export const isEmail = (info) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(info);
};

export const isPhone = (info) => {
    const phoneRegex = /^[0-9]+$/;
    return phoneRegex.test(info);
}