import React from 'react'
import { useState } from 'react'

function Square({value, handelClick}) {
    return (
    <div className='square' onClick={handelClick}>
        {value}
    </div>
    )
}

function Board() {
    const [arr, setArr] =  useState(Array(9).fill(null))

    const isNext = arr.filter(s => s === 'X').length === arr.filter(s => s === 'O').length

    const handelClick = (i) => {
        console.log(i)
        if(arr[i] || calWinner(arr)){
            return 
        }
        const board = arr.slice()
        const turn = isNext ? 'X' : 'O'
        board[i] = turn
        setArr(board)
    }

    const calWinner = () => {
        const lines = [
            [0,1,2],
            [3,4,5], 
            [6,7,8],
        ]

        for(const [a,b,c] of lines) {
            if (arr[a] == arr[b] && arr[b] == arr[c]){
                return arr[a]
            }
            return null
        }

    }


  return (
    <div className='board'>
        
        {
            arr.map((value, index) => (
                <Square key={index} value={value} handelClick={() => handelClick(index)}/>
            ))
        }
    </div>
  )
}

export default Board