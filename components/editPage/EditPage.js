import React from 'react'
import Error from '../Error'
import shoes from '../../public/shoes.png'

export default function EditPage({ product }) {
    if (product.error) {
        return (
            <Error
                src={shoes.src}
                h1='Faqja nuk u gjend!'
                desc='Pati nje ngaterrese :('
            />
        )
    }
    return (
        <div>

        </div>
    )
}
