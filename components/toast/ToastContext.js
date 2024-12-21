"use client";
import { createContext, useContext, useState } from "react";
import { DangerToast, SuccessToast, WarningToast } from ".";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (type, message) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prevToasts) => [...prevToasts, { id, type, message }]);

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed top-4 right-[50%] z-50">
        {toasts.map((toast) => {
          const Component =
            toast.type === "success"
              ? SuccessToast
              : toast.type === "danger"
              ? DangerToast
              : WarningToast;

          return <Component key={toast.id} message={toast.message} />;
        })}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
