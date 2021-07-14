import caution from '../public/caution.png'
import Error from '../components/Error'

export default function handler() {
    return (
        <Error
            src={caution.src}
            h1='Se shpejti...'
            desc='Ofertat vijne se shpejt :) !'
        />
    )
}