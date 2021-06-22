const regex = {
    name: {
        regex: /^[a-z '-]+$/i,
        message: 'Ju lutem shkruani nje emer korrekt!',
        maxLength: 50
    },
    telephone: {
        regex: /^(?:[+\d].*\d|\d)$/,
        message: 'Numri i plotesuar nuk eshte i sakte!',
        maxLength: 20
    },
    email: {
        regex: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
        message: 'Ju lutem shkruani nje email korrekt!',
        maxLength: 50
    },
    whatsapp: {
        regex: /^(?:[+\d].*\d|\d)$/,
        message: 'Numri i plotesuar nuk eshte i sakte!',
        maxLength: 20
    },
    title: {
        regex: /^[\S\s]{3,200}$/,
        message: 'Titulli duhet te jete 3-200 karaktere.',
        maxLength: 200
    },
    description: {
        regex: /^[\S\s]{3,8000}$/,
        message: 'Pershkrimi duhet te jete 3-8000 karaktere.',
        maxLength: 8000
    },
    price: {
        regex: /^\d{0,15}$/,
        message: 'Ju lutem plotesoni nje cmim korrekt!',
        maxLength: 15
    }
}

export default regex