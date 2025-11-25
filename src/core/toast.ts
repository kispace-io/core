import {uiContext} from "./di";

export const toastInfo = (msg: string) => {
    console.info("[TOAST] INFO:", msg);
}

export const toastError = (msg: string) => {
    console.error("[TOAST] ERROR:", msg);
}

export const toastWarning = (msg: string) => {
    console.warn("[TOAST] WARNING:", msg);
}

uiContext.put("toastInfo", toastInfo)
uiContext.put("toastError", toastError)
uiContext.put("toastWarning", toastWarning)