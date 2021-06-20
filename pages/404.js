import clock from '../public/clock.png'
import Error from '../components/Error'

export default function Custom404() {
    const desc = 'Lidhja qe keni ndjekur mund te jete e pavlere ose faqja eshte fshire'
    const { src: clockSrc } = clock
    return (
        <Error
            src={clockSrc}
            desc={desc}
            h1='Kjo faqe nuk ekziston'
        />
    )
}