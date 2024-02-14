export const validateData = (formData, type) => {
  let requiredFields = [];
  switch (type) {
    case "signup":
      requiredFields = ["user_name", "email", "password", "confirm_password"];
      for (const entry of formData.entries()) {
        const [key, value] = entry;
        if (requiredFields.includes(key)) {
          // eslint-disable-next-line no-throw-literal
          if (!value) throw `${key} is required`;
        }
      }
      const password = formData.get("password");
      const confirm_password = formData.get("confirm_password");
      if (password !== confirm_password) {
        // eslint-disable-next-line no-throw-literal
        throw "Password and confirm password field is not matching !";
      }

      break;
    default:
      break;
  }
};
