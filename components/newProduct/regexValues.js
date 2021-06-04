const regex = {
    name: {
        regex: /^[a-z '-]+$/i,
        message: 'Ju lutem shkruani nje emer korrekt!'
    },
    telephone: {
        regex: /^(?:[+\d].*\d|\d)$/,
        message: 'Numri i plotesuar nuk eshte i sakte!'
    },
    email: {
        regex: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
        message: 'Ju lutem shkruani nje email korrekt!'
    },
    whatsapp: {
        regex: /^(?:[+\d].*\d|\d)$/,
        message: 'Numri i plotesuar nuk eshte i sakte!'
    },
    title: {
        regex: /^.{5,200}$/,
        message: 'Titulli duhet te jete 5-200 karaktere.'
    },
    description: {
        regex: /^.{5,8000}$/,
        message: 'Pershkrimi duhet te jete 5-8000 karaktere.'
    }
}

export default regex