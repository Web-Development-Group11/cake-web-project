export function validateUsername(username) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /^\d{10}$/;

    if (!username) {
        return 'Vui lòng nhập email hoặc số điện thoại';
    }

    if (!emailRegex.test(username) && !phoneRegex.test(username)) {
        return 'Không đúng định dạng email hoặc số điện thoại';
    }

    return '';
}

export function validateEmail(email) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email) {
        return 'Vui lòng nhập email';
    }

    if (!emailRegex.test(email)) {
        return 'Không đúng định dạng email';
    }

    return '';
}

export function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;

    if (!phone) {
        return 'Vui lòng nhập số điện thoại';
    }

    if (!phoneRegex.test(phone)) {
        return 'Không đúng định dạng số điện thoại';
    }

    return '';
}

export function validatePassword(password) {
    if (!password) {
        return 'Vui lòng nhập mật khẩu';
    }

    if (password.length < 8) {
        return 'Mật khẩu phải chứa ít nhất 8 ký tự';
    }

    return "";
}

export function validateConfirmPassword(password, confirmPassword) {
    if (!confirmPassword) {
        return "Vui lòng nhập lại mật khẩu";
    }

    if (password !== confirmPassword) {
        return "Mật khẩu không khớp";
    }

    return "";
}

export function validateCode(code) {
    const codeRegex = /^\d{6}$/;

    if (!code) {
        return 'Vui lòng nhập mã xác nhận';
    }

    if (!codeRegex.test(code)) {
        return 'Mã xác nhận phải gồm 6 chữ số';
    }

    return '';
}