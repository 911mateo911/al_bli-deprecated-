const styles = theme => ({
    '@global': {
        '.swiper-button-next,.swiper-button-prev': {
            color: '#0070f3',
            marginTop: '-35px'
        }
    },
    h3: {
        color: '#111',
        fontFamily: 'Source Sans Pro',
        textAlign: 'center',
        fontSize: '2rem',
        marginTop: '25px',
        margin: '10px'
    },
    root: {
        width: '95%',
        margin: 'auto',
        marginTop: '0',
        paddingBottom: '35px',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    },
    slide: {
        width: 'auto'
    },
    errorWrap: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'center',
        margin: 'auto',
        flexDirection: 'column'
    },
    errorMsg: {
        fontFamily: 'Source Sans Pro',
        margin: 'auto',
        marginTop: '-30px',
        marginBottom: '20px',
        width: '90%',
        padding: '10px',
        borderBottom: '1px solid #eaeaea'
    },
    errorImg: {
        height: '300px',
        width: '300px',
        marginTop: '-60px'
    }
})

export default styles