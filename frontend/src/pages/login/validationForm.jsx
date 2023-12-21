export function validateUsername(username) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /^\d{10}$/; // Assumes 10-digit phone number format

    if (!re.test(username) && !phoneRegex.test(username)) {
        return "Không đúng định dạng email hoặc số điện thoại";
    }

    return "";
}

export function validatePassword(password) {
    if (password.length < 8) {
        return "Mật khẩu phải lớn hơn 8 ký tự";
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
    const codeRegex = /^\d{6}$/; // Assumes 6-digit code format
  
    if (!codeRegex.test(code)) {
      return "Mã xác nhận phải gồm 6 chữ số";
    }
  
    return "";
  }