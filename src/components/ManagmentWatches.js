import React from 'react'

export default function ManagmentWatches({addFunc}) {

    // const handlerSubmit = event => {
    //     event.prevantDefault()
    // }
    return (
        <form className='managment' onSubmit={addFunc}>
            <div className='managment__name-area'>
                <label htmlFor="name" className='label managment__label-name'>Название</label>
                <input type="text" name='name' className='input managment__input-name' />
            </div>
            <div className='managment__name-area'>
                <label htmlFor="zone" className='label managment__label-zone'>Временная зона</label>
                <input type="number" name='zone' className='input managment__input-zone' />
            </div>
            <button className='managment__button'>Добавить</button>
        </form>
    )
}
