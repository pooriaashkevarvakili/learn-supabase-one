import React from 'react'
import { Link } from 'react-router-dom'
import supabase from '../config/supabaseClient'

const Card = ({ poori, onDelete }) => {
    const handleDelete = async () => {
        const { data, error } = await supabase.from('shopping').delete().eq('id', poori.id)
        if (data) {
            onDelete(poori.id)
        }
        if (error) {

        }
    }
    return (
        <div>
            <div className="card w-96 h-52 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title  ml-3 ">{poori.title}</h2>
                    <p className=' ml-3 '>{poori.method}</p>
                    <p className=' ml-3 '>{poori.rating}</p>
                    <div className="card-actions space-x-4 ml-3 justify-between">
                        <Link to={'/' + poori.id} className="btn bg-green-400 text-white no-underline p-3 border-none">edit</Link>

                        <button className="btn bg-green-400 text-white p-3 border-none" onClick={handleDelete}>delete</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card