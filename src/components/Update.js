import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import supabase from '../config/supabaseClient'

const Update = () => {
    const { id } = useParams()
    const [title, setTitle] = useState()
    const [method, setMethod] = useState()
    const [rating, setRating] = useState()
    const Navigate = useNavigate()
    const [formError, setFormError] = useState()
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!title || !method || !rating) {
            setFormError('in mujood nemibashad')
        }
        const { data, error } = await supabase.from('shopping').update([{ title, method, rating }]).eq('id', id)
        if (data) {
            setFormError(null)
            Navigate('/')

        }
        if (error) {
            setFormError('in error mibashad')
        }
    }

    return (


        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center space-y-4 w-full h-screen' >
            <div>from create</div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="name" className="input p-3 input-bordered input-xs w-full max-w-xs" />

            <input type="text" value={method} onChange={(e) => setMethod(e.target.value)} placeholder="method" className="input p-3 input-bordered input-sm w-full max-w-xs" />

            <input type="number" value={rating} onChange={(e) => setRating(e.target.rating)} placeholder="rating" className="input p-3 input-bordered input-md w-full max-w-xs" />

            <input type="submit" value="submit" className=" p-3 bg-green-400 border-none text-white input-lg w-full max-w-xs" />
            {
                formError && <p className='text-red-400'>{formError}</p>
            }
        </form>

    )
}

export default Update
