import { useForm } from "react-hook-form";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const [submitMessage, setSubmitMessage] = useState(null);

  const [Error, setError] = useState("");
  const clearFields = (e) => {
    if (Error || errors) {
      setError();
      clearErrors();
      setSubmitMessage(null);
      console.log("reset");
    }
  };

  const sendEmail = (e) => {
    //e.preventDefault();
    emailjs
      .sendForm(
        "service_3ug98ao",
        "template_ymliug1",
        form.current,
        "PWAaqSbEwQXEo4NqD"
      )

      .then(
        (result) => {
          console.log(result.text);
          setSubmitMessage(true);
        },
        (error) => {
          console.log("fail");
          setError("Kunne ikke sende!");
        }
      );
    document.getElementById("Form").reset();
  };

  useEffect(() => {
    let timeoutId;
    if (isSubmitSuccessful) {
      timeoutId = setTimeout(() => {
        setSubmitMessage(null);
      }, 5000); // change back to "noShow" after 5 seconds (adjust as needed)
    }
    return () => clearTimeout(timeoutId);
  }, [isSubmitSuccessful]);


  return (
    <section id="Kontakt">
      <h2>kontakt</h2>
      <form id="Form" ref={form} onSubmit={handleSubmit(sendEmail)}>
        <div id="FormWrapper">
          <div
            className={
              Error || errors.userName ? "InputWrapperError" : "InputWrapper"
            }
          >
            <input
              onClick={clearFields}
              type="text"
              name="userName"
              placeholder="Dit Navn?*"
              autoComplete="off"
              {...register("userName", {
                required: true,
                min: 2,
              })}
            />
            {errors.userName?.type === "required" && (
              <span>You need to write your name!</span>
            )}
          </div>

          <div
            className={
              Error || errors.userContact ? "InputWrapperError" : "InputWrapper"
            }
          >
            <input
              onClick={clearFields}
              type="tel"
              name="userPhone"
              placeholder="Dit Telefonnummer?*"
              autoComplete="off"
              {...register("userPhone", {
                required: true,
                min: 2,
              })}
            />
            {errors.userContact?.type === "required" && (
              <span>You need to write your contact!</span>
            )}
          </div>

          <div
            className={
              Error || errors.userEmail
                ? "InputWrapperError"
                : "InputWrapper"
            }
          >
            <input
              onClick={clearFields}
              type="email"
              name="userEmail"
              placeholder="Dit Email?*"
              autoComplete="off"
              {...register("userEmail", {
                required: true,
                min: 2,
              })}
            />
            {errors.userEmail?.type === "required" && (
              <span>You need to write what you want!</span>
            )}
          </div>

          <div
            className={
              Error || errors.userQuestion
                ? "InputWrapperError"
                : "InputWrapper"
            }
          >
            <textarea
              onClick={clearFields}
              type="text"
              name="userQuestion"
              placeholder="Any questions?"
              autoComplete="off"
            />
          </div>
        </div>
        <button
          data-type="emoji"
          id="Submit"
          onClick={clearFields}
          type="submit"
        >
          Send
        </button>
        <h2 id={submitMessage ? "Show" : "noShow"}>👍</h2>
      </form>
    </section>
  );
};
