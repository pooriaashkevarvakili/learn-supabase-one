import React, { useState, useEffect } from 'react'
import supabase from '../config/supabaseClient'
import Card from "./Card"
const Home = () => {
    console.log(supabase)
    const [fetchError, setFetchError] = useState(null)
    const [data, setData] = useState(null)
    const [orderBy, setOrderBy] = useState('created_at')

    const handleDelete = (id) => {
        setData((prevState) => {
            return prevState.filter(sm => sm.id !== id)
        })
    }
    useEffect(() => {
        const fetchDatapooria = async () => {
            const { data, error } = await supabase.from('shopping').select().order(orderBy, { ascending: false })

            if (error) {
                setFetchError('in moojood nist')
                setData(null)
            }
            if (data) {
                setData(data)
                setFetchError(null)
            }
        }
        fetchDatapooria()



    }, [orderBy])

    return (
        <div>
            {
                fetchError && (
                    <p>{fetchError}</p>
                )
            }
            {
                data && (
                    <>
                        <div className='space-x-2'>
                            <p>order by</p>
                            <button className='btn btn-primary' onClick={() => setOrderBy('create_at')}>title</button>
                            <button className='btn btn-primary' onClick={() => setOrderBy('title')}>method</button>
                            <button className='btn btn-primary' onClick={() => setOrderBy('rating')}>rathing</button>
                            {orderBy}
                        </div>
                        <div className='grid mt-4 2xl:grid-cols-3 xl:grid-cols-3  mt-4 place-items-center grid-cols-1 gap-6 '>
                            {
                                data.map(poori => (
                                    <Card key={poori.id} poori={poori} onDelete={handleDelete} />
                                ))
                            }
                        </div>
                    </>

                )
            }
        </div>
    )


}
export default Home