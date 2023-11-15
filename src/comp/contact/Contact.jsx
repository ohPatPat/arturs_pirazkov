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
      console.log("Error");
    }
  };

  const sendEmail = (e) => {
    //e.preventDefault();
    emailjs
      .sendForm(
        "service_y61gwxn",
        "template_ymliug1",
        form.current,
        "PYEu-muCwrU1C2kq2"
      )

      .then(
        (result) => {
          console.log(result.text);
          setSubmitMessage(true);
        },
        (error) => {
          console.log("fail");
          setError(true);
        }
      );
    document.getElementById("Form").reset();
  };

  useEffect(() => {
    let timeoutId;
    if (isSubmitSuccessful) {
      timeoutId = setTimeout(() => {
        setSubmitMessage(null);
      }, 10000); // change back to "noShow" after 5 seconds (adjust as needed)
    }
    return () => clearTimeout(timeoutId);
  }, [isSubmitSuccessful]);

  return (
    <section id="Kontakt">
      <h2>kontakt</h2>
      <article>
        <p>
          Har du fundet noget, der har fanget din interesse, eller har du nogle
          spørgsmål? 
          <br />
          <br />
          - Så er du mere end er velkommen til at kontakte mig her. 
          Jeg skifter vores samtale til email, så sørg venligst for at skrive dine informationer
          korrekt.
        </p>
      </article>
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
              <span>- Hust at skrive dit navn</span>
            )}
          </div>

          <div
            className={
              Error || errors.userOrder ? "InputWrapperError" : "InputWrapper"
            }
          >
            <input
              onClick={clearFields}
              type="text"
              name="userOrder"
              placeholder="Din ordre?* - Fx 'Nr. 35' eller 'Lysets Horisont'"
              autoComplete="off"
              {...register("userOrder", {
                required: true,
                min: 2,
              })}
            />
            {errors.userOrder?.type === "required" && (
              <span>- Husk at skrive hvad du er interesseret i</span>
            )}
          </div>

          <div
            className={
              Error || errors.userPhone ? "InputWrapperError" : "InputWrapper"
            }
          >
            <input
              onClick={clearFields}
              type="number"
              name="userPhone"
              placeholder="Dit Telefonnummer?*"
              autoComplete="off"
              {...register("userPhone", {
                required: true,
                min: 2,
              })}
            />
            {errors.userPhone?.type === "required" && (
              <span>- Husk at skrive en korrekt telefonnummer</span>
            )}
          </div>

          <div
            className={
              Error || errors.userEmail ? "InputWrapperError" : "InputWrapper"
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
              <span>- Husk at skrive en korrekt email </span>
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
              placeholder="Kommentar?"
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
        <h6 className={submitMessage ? "Show Good" : "noShow"}>Beskeden er sendt</h6>
        <h6 className={errors.userOrder ? "Show Bad" : "noShow"}>Beskeden bliv ikke sendt</h6>
      </form>
    </section>
  );
};
