import React from 'react'

export default function Watches({ id, time, delFunc }) {
    let currentTime = new Date(time.time)
    return (
        <div className='watch'>
            <div className='watch__name'>{time.name}</div>
            <div className='watch__time'>{currentTime.getHours()< 10 ? '0' + currentTime.getHours() : currentTime.getHours()}:{currentTime.getMinutes()< 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes()}:{currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds()}</div>
            <div>
                <button className='watch__button' onClick={delFunc} data-id={id}>Удалить</button>
            </div>
        </div>
    )
}
