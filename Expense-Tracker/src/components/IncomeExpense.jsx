import React from "react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

export default function IncomeExpense() {
    const { transactions } = useContext(GlobalContext);
    const amount = transactions.map((transaction) => transaction.amount)
    let income = 0, expense = 0;
    amount.forEach((cost) => {
        if(cost > 0) {income += cost}
        else {expense += cost}
    })
    return (
        <div className="flex justify-cente bg-slate-100">
            <div className="mr-4 text-center p-4">
                <h4 className="text-3xl">INCOME</h4>
                <p className="text-4xl text-green-500">+${income}</p>
            </div>
            <div className="ml-4 text-center p-4">
                <h4 className="text-3xl">EXPENSE</h4>
                <p className="text-4xl text-red-500">-${expense}</p>
            </div>
        </div>
    )
}