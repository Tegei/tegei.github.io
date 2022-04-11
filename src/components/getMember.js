import * as React from "react";
export default{}

const memberListURL="https://raw.githubusercontent.com/Tegei/tegei.github.io/main/memberList.csv"

export const getMembers= async (dataLength=6)=>{
    const res = await fetch(memberListURL)
    const membersCsv = await res.text()
    const datas=membersCsv.split(',')
    return [...Array(Math.floor(datas.length/dataLength))].map((v,k)=>{
        const link=<>{datas[dataLength*k+3].split('\n').map((row,i)=>{
            const pos=row.indexOf(':')
            return(
                <>
                {i!==0&&<br/>}
                <a target="_blank" rel="noopener noreferrer" href={row.slice(pos+1)}>{row.slice(0,pos)}</a>
                </>
            )
        })}</>
        const free=<>{datas[dataLength*k+4].split('\n').map((row,i)=>{
            return(
                <>
                {i!==0&&<br/>}
                {row}
                </>
            )
        })}</>
        const obj={
            name:datas[dataLength*k],
            grade:datas[dataLength*k+1],
            hobby:datas[dataLength*k+2],
            link,
            free,
            imagePath:datas[dataLength*k+5],
        }
        console.log(obj)
        return obj
    })
}