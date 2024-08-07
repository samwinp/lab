
import '../App.css'
import { useState } from 'react'

export function Square({value, handelClick}) {
    return (
        <> 
        <div className='square' onClick={handelClick}>
            {value}
        </div>
        </>
    )
}   


export default function Board() {
    const [arr, setArr] = useState(Array(9).fill(null))

    const calWinner = () => {
        const lines = [
            [0,1,2],
            [3,4,5], 
            [6,7,8],
            [0,3,6],
            [1,4,7], 
            [2,5,8], 
            [0,4,8],
            [2,4,6]
        ]

        for(const [a,b,c] of lines) {
            if (arr[a] === arr[b] && arr[b] === arr[c]){
                return arr[a]
            }
        }

        return null

    }

    const isNext = arr.filter(s => s === 'X').length === arr.filter(s => s === "O").length

    const winner = calWinner(arr)


    const handelClick = (index) => {
        if(arr[index] || calWinner(arr)){
            return 
        }

        const turn  = isNext ? "X" : "O"
        const board = arr.slice()
        board[index] = turn
        console.log(board)
        setArr(board)
    }

    return (
        <> 
            {winner ? <div>the winner is {winner}</div> : <div>no winner</div>}
            <div className='board'>
            {arr.map((value, index) => (
                <Square key={index} value={value} handelClick={() => handelClick(index)}/>
            ))}
            </div>
        </>
    )
}