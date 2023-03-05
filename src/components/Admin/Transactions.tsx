import { PurchaseDetails } from "@/context/cotract/methods";
import React, { useEffect, useState } from "react";

function Transactions() {
  const [transactions, setTransactions] = useState<any>([]);
  const detailsInstance = async () => {
    const detail = await PurchaseDetails();
    setTransactions(detail?.transactions);
  };

  useEffect(() => {
    detailsInstance();
  }, []);
  return (
    <table className="w-full">
      <thead className="text-white font-semibold font-grotesk text-sm text-center border-b">
        <tr>
          <th className="py-2">txCount</th>
          <th className="py-2">Address</th>
          <th className="py-2">Tokens Bought</th>
          <th className="py-2">Total Tx</th>
        </tr>
      </thead>
      <tbody>
        {transactions &&
          transactions?.length > 0 &&
          transactions?.map((transaction:any, index:number) => (
            <tr key={index}>
              <td className="text-glow">{index + 1}</td>
              <td className="text-gray-400 cursor-pointer hover:text-gray-200">
                {transaction?.buyer}
              </td>
              <td className="text-glow">
                {`${transaction?.tokensPurchased.toString()} OMP`}
              </td>
              <td className="text-glow">{transaction?.counter.toString()}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Transactions;
