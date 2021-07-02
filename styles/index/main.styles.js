const styles = theme => ({
    main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    mainImg: {
        width: '50%',
        transition: 'all 0.2s ease-in',
        '&:hover': {
            transform: 'scale(1.1)'
        },
        [theme.breakpoints.down('sm')]: {
            width: '75%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '95%'
        }
    },
    mainHead: {
        flexBasis: '50%',
        textAlign: 'center'
    },
    h1: {
        fontFamily: 'Source Sans Pro',
        fontSize: '5rem',
        color: '#111',
        margin: '0 0 20px 0',
        [theme.breakpoints.down('md')]: {
            fontSize: '4.5rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '3rem'
        }
    },
    btnWrap: {
        flexBasis: '50%',
        marginTop: '-20px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            marginTop: '20px',
            flexBasis: '90%'
        },
        [theme.breakpoints.down('xs')]: {
            flexBasis: '100%',
            justifyContent: 'space-around'
        },
    },
    mainBtn: {
        width: '90%',
        justifyContent: 'flex-end',
        display: 'flex',
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center'
        },
        [theme.breakpoints.down(theme.breakpoints.values.xs + '400')]: {
            width: '100%'
        }
    },
    bli: {
        margin: 0,
        fontFamily: 'Lato',
        fontWeight: '600',
        borderRadius: '10px',
        textAlign: 'center',
        padding: '13px 70px',
        backgroundColor: '#0070f3',
        boxShadow: '0 4px 14px 0 rgb(0 118 255 / 39%)',
        color: 'white',
        transition: 'all 0.15s ease-in-out',
        [theme.breakpoints.down(theme.breakpoints.values.xs + '400')]: {
            padding: '13px 50px',
            borderRadius: '5px'
        },
        '&:hover': {
            background: 'rgba(0,118,255,0.9)',
            boxShadow: '0 6px 20px rgb(0 118 255 / 23%)'
        }
    },
    shit: {
        margin: 0,
        fontFamily: 'Lato',
        fontWeight: '600',
        borderRadius: '10px',
        padding: '13px 70px',
        textAlign: 'center',
        background: '#fff',
        color: '#696969',
        transition: 'all 0.15s ease-in-out',
        boxShadow: '0 4px 14px 0 rgb(0 0 0 / 10%)',
        [theme.breakpoints.down(theme.breakpoints.values.xs + '400')]: {
            padding: '13px 50px',
            borderRadius: '5px'
        },
        '&:hover': {
            background: 'rgba(255,255,255,0.9)',
            boxShadow: '0 6px 20px rgb(93 93 93 / 23%)'
        }
    },
    mainP: {
        fontFamily: 'Source Sans Pro',
        fontSize: '1.3rem',
        width: '90%',
        fontWeight: 300,
        textAlign: 'center',
        color: '#666666',
        margin: '50px auto'
    }
})

export default styles