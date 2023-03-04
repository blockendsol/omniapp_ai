import Transactions from "@/components/Admin/Transactions";
import ModalWraper from "@/components/shared/Modal";
import Timer from "@/components/shared/Modal/Timer";
import { useContractHook } from "@/context/cotract/reducer";
import React from "react";

function Admin() {
  const modalContext = useContractHook();
  return (
<div className="w-full bg-[#02121d]">
<div className="py-8 max-w-[1100px] w-full mx-auto">
      <h1 className="mb-4 text-[24px] text-white">All Transactions</h1>
      <Transactions/>
      <button
        className="py-3 px-8 text-white font-medium border border-main my-8 rounded-md"
        onClick={() => modalContext?.toggle()}
      >
        Set Timer
      </button>
      {modalContext?.show ? (
        <ModalWraper>
          <Timer />
        </ModalWraper>
      ) : null}
    </div>
</div>
  );
}

export default Admin;
