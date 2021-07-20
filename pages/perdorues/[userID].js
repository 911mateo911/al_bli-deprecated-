import React, { useEffect, useContext } from 'react'
import { BackDropDispatch } from '../../components/contexts/backdrop.context'

export default function UserPage({ user }) {
    const dispatch = useContext(BackDropDispatch)
    useEffect(() => {
        dispatch({ type: 'closeBackDrop' })
    }, [])
    return (
        <div className='page-Route' >
            <h1>mbreti vlla {user} </h1>
        </div>
    )
}

export async function getServerSideProps(context) {
    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve('mateo')
        }, 2000);
    })
    const mateo = await promise
    return {
        props: {
            user: mateo
        }
    }
}