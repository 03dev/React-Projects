import React, { useState, useContext, useId } from "react";
import { GlobalContext } from "../context/GlobalState";
export default function Form() {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");

    const { addTransaction } = useContext(GlobalContext)

    function onSubmit(e) {
        e.preventDefault();
        addTransaction({
            id: Math.floor(Math.random() * 20),
            text,
            amount: +amount
        })
    }
    return (
        <form>
            <div className="container flex flex-col">
                <h1 className="text-xl font-bold font-mono mt-6 border-b-2 border-black">Add new transaction</h1>
                <label htmlFor="text" className="text-lg mt-2 font-semibold">Text</label>

                <input type="text"
                    placeholder="Enter text"
                    id="text"
                    className="text-lg p-2 shadow-lg"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                
                <label htmlFor="amount" className="text-lg mt-2 font-semibold">Amount</label>
                <h4 className="text-base mt-2 font-semibold">// Negative - expense, Positive - income \\</h4>

                <input type="text"
                    placeholder="Enter amount"
                    id="amount"
                    className="text-lg p-2 shadow-lg"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <button type="submit" className="bg-blue-400 mt-8 text-lg font-mono rounded-3xl p-2 transition-all duration-200 shadow-lg hover:bg-blue-500" onClick={onSubmit}>Add transaction</button>
            </div>
        </form>
    )
}