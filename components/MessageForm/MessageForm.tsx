import { useEffect, useState } from "react";
import ArrowButton from "../Buttons/ArrowButton";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import RevelAnimation from "../RevelAnimation";
import axios from "axios";

const schema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First name must be at least 3 characters" }),
  lastName: z.string(),
  email: z.string().email({ message: "Invalid email" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});
interface Props {
  position: string;
  setPosition: (position: string) => void;
}
const MessageForm = ({ position, setPosition }: Props) => {
  type FormData = z.infer<typeof schema>;
  const [formPosition, setFormPosition] = useState<
    "name" | "email" | "message"
  >("name");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [disableSubmit, setDisableSubmit] = useState(false);

  useEffect(() => {
    if (errors.firstName || errors.lastName) setFormPosition("name");
    else if (errors.email) setFormPosition("email");
    else if (errors.message) setFormPosition("message");
  }, [errors]);

  const [showError, setShowError] = useState("");
  const [showSuccess, setShowSuccess] = useState("");

  const toggleShowError = (message: string) => {
    setShowError(message);
    setTimeout(() => {
      setShowError("");
    }, 4000);
  };

  const toggleShowSuccess = (message: string) => {
    setShowSuccess(message);
    setTimeout(() => {
      setShowSuccess("");
    }, 4000);
  };

  return (
    <>
      {showError && (
        <p className="bg-red-600 p-4 fixed w-screen top-20 left-1 z-30 text-black font-heading ">
          {showError}
        </p>
      )}
      {showSuccess && (
        <p className="bg-green-600 p-4 fixed w-screen top-20 left-1 z-30 text-white font-heading ">
          {showSuccess}
        </p>
      )}
      <form
        onSubmit={handleSubmit((data) => {
          setDisableSubmit(true);
          axios
            .post("/api/mail", {
              name: data.firstName.trim() + " " + data.lastName.trim(),
              email: data.email,
              message: data.message.trim(),
            })
            .then(() => {
              toggleShowSuccess("message envoyé avec succès");
              setDisableSubmit(false);
              if (
                !errors.firstName &&
                !errors.lastName &&
                !errors.email &&
                !errors.message
              ) {
                setFormPosition("name");
                setPosition("start");
              }
            })
            .catch((_err: any) => {
              toggleShowError("Erreur lors de l'envoi du message");
            });
        })}
        className={
          " bg-black z-30 w-full h-full absolute top-0 left-0 flex overflow-hidden gap-96  justify-center flex-col transition-all duration-500 " +
          (position === "form" ? "translate-x-0" : "translate-x-full")
        }
      >
        <div
          className={
            "w-full h-full transition-all duration-500 p-10 z-30 absolute top-0 left-0 bg-black flex justify-center items-center " +
            (formPosition === "name"
              ? " translate-x-0  "
              : " translate-x-full ")
          }
        >
          <div className="">
            <RevelAnimation width="fit-content">
              <p className="md:w-[40rem] text-3xl mb-10 md:mb-60">
                Avant de commencer,
                <br />
                Quel est ton nom ?
              </p>
            </RevelAnimation>
            <div className="mb-10 md:mb-32">
              <div className="w-full flex md:flex-row flex-col gap-10 ">
                <input
                  {...register("firstName")}
                  type="text"
                  placeholder="Prénom"
                  className="placeholder:text-slate-400 text-white bg-transparent outline-none border-b-[1px]  text-xl w-full md:w-1/2 border-slate-400 hover:border-green-400 active:border-green-400 focus:border-green-400 transition-all duration-300"
                />
                <input
                  {...register("lastName")}
                  type="text"
                  placeholder="Nom de famille"
                  className="placeholder:text-slate-400 text-white bg-transparent outline-none border-b-[1px]  text-xl w-full md:w-1/2 border-slate-400 hover:border-green-400 active:border-green-400 focus:border-green-400 transition-all duration-300"
                />
              </div>
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName?.message}</p>
              )}
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName?.message}</p>
              )}
            </div>
            <div className="flex justify-between ">
              <ArrowButton
                direction="right"
                onClick={() => {
                  setFormPosition("email");
                }}
                text="Continuer"
              />
              <ArrowButton
                text="Sortie"
                direction="left"
                onClick={() => {
                  setPosition("start");
                }}
              />
            </div>
          </div>
        </div>

        <div
          className={
            "w-full h-full transition-all duration-500 p-10 z-30 absolute top-0 left-0 bg-black flex justify-center items-center " +
            (formPosition === "email"
              ? " translate-x-0 "
              : " -translate-x-full ")
          }
        >
          <div className="">
            <RevelAnimation width="fit-content">
              <p className="md:w-[40rem] text-3xl mb-10 md:mb-60">
                Veuillez entrer votre adresse e-mail.
              </p>
            </RevelAnimation>

            <div className="w-full mb-10 md:mb-32">
              <div className="w-full flex gap-10">
                <input
                  {...register("email")}
                  type="email"
                  placeholder="E-mail"
                  className="placeholder:text-slate-400 text-white bg-transparent outline-none border-b-[1px]  text-xl w-full border-slate-400 hover:border-green-400 active:border-green-400 focus:border-green-400 transition-all duration-300"
                />
              </div>
              {errors.email && (
                <p className="text-red-500">{errors.email?.message}</p>
              )}
            </div>
            <div className="flex justify-between ">
              <ArrowButton
                direction="bottom"
                onClick={() => {
                  setFormPosition("message");
                }}
                text="Continuer"
              />
              <ArrowButton
                text="Reculer"
                direction="left"
                onClick={() => {
                  setFormPosition((prev) => {
                    if (prev == "name") {
                      return prev;
                    } else if (prev == "email") return "name";
                    else return "email";
                  });
                }}
              />
            </div>
          </div>
        </div>

        <div
          className={
            "w-full h-full transition-all duration-500 absolute top-0 left-0 p-10 z-40 bg-black flex justify-center items-center " +
            (formPosition === "message"
              ? " translate-y-0 "
              : " -translate-y-full ")
          }
        >
          <div className="">
            <RevelAnimation width="fit-content">
              <p className="md:w-[40rem] text-3xl mb-10 md:mb-60">
                Veuillez entrer votre message.
              </p>
            </RevelAnimation>

            <div className="w-full  mb-10 md:mb-32">
              <div className="w-full flex-col flex gap-10 mb-14 md:mb-32">
                <textarea
                  {...register("message")}
                  placeholder="Entrez votre message ici."
                  className="placeholder:text-slate-400 bg-gray-900 p-3 h-28 placeholder:capitalize text-white bg-transparent outline-none border-b-[1px]  text-xl w-full border-slate-400 hover:border-green-400 active:border-green-400 focus:border-green-400 transition-all duration-300"
                />
                {errors.message && (
                  <p className="text-red-500">{errors.message?.message}</p>
                )}
              </div>
            </div>
            <div className="flex justify-between ">
              <ArrowButton
                isDisabled={disableSubmit}
                type="submit"
                direction="right"
                onClick={() => {}}
                text="Soumettre"
              />

              <ArrowButton
                text="Reculer"
                direction="top"
                onClick={() => {
                  setFormPosition((prev) => {
                    if (prev == "name") {
                      return prev;
                    } else if (prev == "email") return "name";
                    else return "email";
                  });
                }}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default MessageForm;
