export const cheackValidSignIn = (email, password) => {
  //regex for email validation
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordVaild =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!isEmailValid && !isPasswordVaild)
    return "Email Id and Password is invaild";
  if (!isEmailValid) return "Email Id is invalid";
  if (!isPasswordVaild) return "Password is invaild";

  return null;
};

export const cheackValidSignUp = (name, email, password) => {
  //regex for email validation
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordVaild =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  const isNameValid = /^[A-Za-z]{5,29}$/.test(name);

  if (!isEmailValid && !isPasswordVaild && !isNameValid)
    return "Name, Email Id and Password is invaild";
  if (!isNameValid) return "Name is invalid";
  if (!isEmailValid) return "Email Id is invalid";
  if (!isPasswordVaild) return "Password is invaild";

  return null;
};
