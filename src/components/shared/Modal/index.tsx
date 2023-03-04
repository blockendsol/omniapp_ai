/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useContractHook } from "@/context/cotract/reducer";
import React, { ReactNode, useEffect, useRef } from "react";

function ModalWraper({ children }: {children: ReactNode}) {
  const modalHook = useContractHook();

  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e:any) => {
    if (e.target === modalRef.current) {
      modalHook?.close();
    }
  };
  useEffect(() => {
    if (modalHook?.show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalHook?.show]);
  return (
    <div className={`container w-full`} ref={modalRef as any} onClick={closeModal}>
      <main className="modal">{children}</main>
    </div>
  );
}

export default ModalWraper;
