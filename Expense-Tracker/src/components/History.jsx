import React, { useContext } from "react";
import styled from "styled-components"
import { GlobalContext } from "../context/GlobalState";

const Trash_icon = styled.div`
    display: none;
`
const List_item = styled.div`
    &:hover ${Trash_icon} {
        display: block;
    }
`

export default function History() {
    const { transactions, deleteTransaction } = useContext(GlobalContext);


    return (
        <div className="mt-10">
            <h3 className="text-2xl pr-52 border-b-2 border-black">History</h3>
            <div></div>
            <div className="container">
                {
                    transactions.map((transaction) => (

                        <List_item key={transaction.id} className={`w-full flex mt-4 shadow-md p-2 border-r-4 ${transaction.amount > 0 ? 'border-green-500' : 'border-red-500'}`} >
                            <Trash_icon className="text-red-600 mr-2 cursor-pointer" onClick={() => deleteTransaction(transaction.id)}>
                                <i className="fa-solid fa-trash"></i>
                            </Trash_icon>
                            <div className="flex justify-between w-full">
                                <h4 className="text-lg">{transaction.text}</h4>
                                <h4 className={`text-lg ${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>{transaction.amount}</h4>
                            </div>
                        </List_item>
                    ))
                }
            </div>
        </div>
    )
}

/*

className="hidden bg-red-600"


*/