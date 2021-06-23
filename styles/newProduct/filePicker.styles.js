const styles = theme => ({
    '@global': {
        '.swiper-pagination': {
            backgroundColor: 'white',
            padding: '5px',
            borderRadius: '5px',
            right: '5px !important'
        }
    },
    root: {
        border: '2px dashed #3291ff',
        padding: '10px',
        width: '100%',
        margin: '10px',
        transition: 'all 0.5s ease',
        backgroundColor: '#F3F4F6',
        '&:hover': {
            border: '2px dashed #0070f3',
            backgroundColor: '#fafafa'
        }
    },
    p: {
        fontFamily: 'Lato',
        textAlign: 'center',
        margin: '10px',
        color: '#111',
        fontWeight: '300',
        fontSize: '.9rem',
        [theme.breakpoints.down(theme.breakpoints.values.xs + 400)]: {
            fontSize: '.8rem',
            margin: '10px 0'
        }
    },
    h1: {
        fontFamily: 'Source Sans Pro',
        margin: '10px',
        fontSize: '1rem',
        color: '#111',
        fontWeight: '500',
        textAlign: 'center',
        [theme.breakpoints.down(theme.breakpoints.values.xs + 400)]: {
            fontSize: '.9rem',
            margin: '10px 0'
        }
    },
    swiper: {
        width: '100%',
        height: '200px'
    },
    img: {
        height: '35px',
        width: '35px',
        margin: 'auto'
    },
    slide: {
        width: '100%',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    slideImg: {
        height: '100%',
        objectFit: 'cover'
    },
    delete: {
        position: 'absolute',
        top: '10px',
        right: '1.5rem',
        color: '#0070f3',
        padding: '.5rem',
        fontSize: '2.5rem',
        borderRadius: '50%',
        backgroundColor: 'white'
    },
    deleteAll: {
        marginTop: '10px',
        border: '1px solid #F87171',
        fontSize: '13px',
        fontFamily: 'Source Sans Pro',
        fontWeight: '600'
    },
    clear: {
        color: '#EF4444'
    }
})

export default styles