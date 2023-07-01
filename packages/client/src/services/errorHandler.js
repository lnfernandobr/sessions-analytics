import { toast } from "react-toastify";

export const clientErrorHandler = (error, isDebuging = false) => {
  if (isDebuging) {
    // eslint-disable-next-line
    console.error(error);
  }
  const message = error.response?.data?.error || error.response?.data?.message;
  if (message) {
    toast(message, { type: "error" });
    return;
  }
  toast("An unexpected error has occurred");
};
