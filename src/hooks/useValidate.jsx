const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useValidate = ({ from, subject, body }) => {
  let errors = {};

  if (!from || !emailRegex.test(from))
    errors.from = "Please enter a valid email.";

  if (!subject) errors.subject = "Please enter a subject.";

  if (!body) errors.body = "Please enter a message.";

  return errors;
};
