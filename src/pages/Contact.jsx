import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useValidate } from "../hooks/useValidate";
import { GoAlert } from "react-icons/go";
import { Tooltip } from "react-tooltip";
import Title from "../components/Title";

const formInitialState = {
  from: "",
  subject: "",
  body: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(formInitialState);
  const [formErrors, setFormErrors] = useState(formInitialState);

  const sendEmail = async () => {
    if (!Object.entries(formErrors).length)
      throw Error("Form contains one or more error");

    const url = "https://642b2461d7081590f91d1a1f.mockapi.io/emails";

    try {
      const res = await axios.post(url, formData);

      if (res) {
        setFormData(formInitialState);
        toast.success("Email sent successfully", {
          icon: "🥳",
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton: false,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error(error.message, {
        icon: "🤬",
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton: false,
        theme: "colored",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const changedData = { ...formData, [name]: value };
    setFormData(changedData);
    setFormErrors(useValidate(changedData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return !Object.entries(formErrors).length && sendEmail();
  };

  return (
    <div
      className="p-10 w-full min-h-screen bg-cover bg-zinc-900 bg-dark-900 flex flex-col justify-center items-center"
      id="contact"
    >
      <Title>Contact</Title>

      <form className="w-3/4 font-hind" onSubmit={handleSubmit}>
        <div className="relative w-full my-6">
          <input
            type="email"
            name="from"
            value={formData.from}
            onChange={handleChange}
            placeholder="Your email"
            className={`w-full rounded-sm p-3 bg-zinc-950 bg-opacity-60 border-2 text-gray-500 border-gray-500 text-gray-450 focus:outline-none focus:border-light-navy focus:text-white transition-all duration-300 ${
              formErrors.from && "border-red-600"
            }`}
          />
          {formErrors.from && (
            <>
              <a
                data-tooltip-id="fromError"
                data-tooltip-content={formErrors.from}
                data-tooltip-place="top"
                className="absolute bottom-0 right-0 m-3 text-red-600"
              >
                <GoAlert />
              </a>
              <Tooltip id="fromError" />
            </>
          )}
        </div>

        <div className="relative w-full my-6">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className={`w-full rounded-sm p-3 bg-zinc-950 bg-opacity-60 border-2 text-gray-500 border-gray-500 text-gray-450 focus:outline-none focus:border-light-navy focus:text-white transition-all duration-300 ${
              formErrors.subject && "border-red-600"
            }`}
          />
          {formErrors.subject && (
            <>
              <a
                data-tooltip-id="subjectError"
                data-tooltip-content={formErrors.subject}
                data-tooltip-place="top"
                className="absolute bottom-0 right-0 m-3 text-red-600"
              >
                <GoAlert />
              </a>
              <Tooltip id="subjectError" />
            </>
          )}
        </div>

        <div className="relative w-full my-6">
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            placeholder="Your message"
            className={`w-full rounded-sm p-3 bg-zinc-950 bg-opacity-60 border-2 text-gray-500 border-gray-500 text-gray-450 focus:outline-none focus:border-light-navy focus:text-white transition-all duration-300 ${
              formErrors.body && "border-red-600"
            }`}
          />
          {formErrors.body && (
            <>
              <a
                data-tooltip-id="bodyError"
                data-tooltip-content={formErrors.body}
                data-tooltip-place="top"
                className="absolute bottom-0 right-0 m-3 text-red-600"
              >
                <GoAlert />
              </a>
              <Tooltip id="bodyError" />
            </>
          )}
        </div>

        <button
          className="w-full p-1 font-semibold bg-light-navy border-2 border-light-navy text-white hover:bg-transparent hover:text-light-navy active:scale-90 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-700 disabled:border-gray-700 disabled:hover:bg-gray-700 disabled:hover:border-gray-700 disabled:hover:text-white"
          type="submit"
          disabled={Object.entries(formErrors).length}
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
