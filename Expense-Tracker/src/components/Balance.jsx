import React from "react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

export default function Balance() {
    const { transactions } = useContext(GlobalContext);
    const amount = transactions.map((transaction) => transaction.amount)
    const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div className="m-8">
            <h4 className="text-2xl">Your Balance</h4>
            <h1 className="text-5xl">${total}</h1>
        </div>
    )
}