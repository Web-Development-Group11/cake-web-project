
export const createSlug = ( slug) => {
    return slug
    .toLowerCase() // Chuyển đổi chữ hoa thành chữ thường
    .replace(/\s+/g, '-') // Thay thế khoảng trắng bằng dấu gạch ngang
    .replace(/[^\w\-]+/g, '') // Loại bỏ các ký tự không phải chữ cái, số, dấu gạch ngang
    .replace(/\-\-+/g, '-') // Loại bỏ các dấu gạch ngang liên tiếp
    .replace(/^-+/, '') // Loại bỏ dấu gạch ngang ở đầu chuỗi
    .replace(/-+$/, ''); // Loại bỏ dấu gạch ngang ở cuối chuỗi
}
