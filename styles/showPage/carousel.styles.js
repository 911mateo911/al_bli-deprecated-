const styles = theme => ({
    '@global': {
        '.swiper-button-next,.swiper-button-prev': {
            color: '#0070f3'
        },
        '.swiper-pagination': {
            bottom: '0 !important'
        }
    },
    span: {
        width: '45%',
        marginTop: '20px',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
            margin: '10px auto 0 auto'
        },
        [theme.breakpoints.down('xs')]: {
            margin: '0 auto'
        }
    },
    root: {
        margin: '0'
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        margin: 'auto',
        paddingBottom: '18px'
    }
})

export default styles