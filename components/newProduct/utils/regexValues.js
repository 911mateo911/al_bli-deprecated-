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
        regex: /[\s\S]*/,
        message: 'Titulli duhet te jete 5-200 karaktere.',
        maxLength: 200
    },
    description: {
        regex: /[\s\S]*/,
        message: 'Pershkrimi duhet te jete 5-8000 karaktere.',
        maxLength: 8000
    },
    price: {
        regex: /^\d{0,15}$/,
        message: 'Ju lutem plotesoni nje cmim korrekt!',
        maxLength: 15
    }
}

export default regex