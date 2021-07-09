const styles = theme => ({
    root: {
        marginTop: '70px',
        width: '95%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    details: {
        width: '50%',
        margin: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
            margin: '20px auto'
        },
        [theme.breakpoints.down('sm')]: {
            width: '95%',
            margin: '10px auto'
        }
    },
    divider: {
        width: '100%'
    },
    user: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        paddingBottom: '5px'
    },
    username: {
        width: 'max-content',
        margin: '0',
        marginLeft: '10px',
        fontFamily: 'Source Sans Pro',
        color: '#111',
        fontSize: '.9rem',
        fontWeight: '900',
        textRendering: 'optimizeLegibility',
        fontSmoothing: 'antialiased',
        [theme.breakpoints.down('xs')]: {
            fontWeight: '600'
        }
    },
    date: {
        fontFamily: 'Source Sans Pro',
        margin: '0',
        marginLeft: 'auto',
        fontWeight: '900'
    },
    h1: {
        fontFamily: 'Lato',
        margin: '10px 0 5px 0',
        width: '100%',
        textRendering: 'optimizeLegibility',
        fontSmoothing: 'antialiased',
        textAlign: 'left'
    },
    description: {
        margin: '10px',
        width: '100%',
        whiteSpace: 'pre-wrap',
        fontFamily: 'Source Sans Pro',
        textRendering: 'optimizeLegibility',
        fontSmoothing: 'antialiased',
        fontWeight: '500',
        textAlign: 'left'
    },
    settings: {
        margin: '0 0 0 -10px',
        color: '#0070f3',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
    },
    settingsTilt: {
        margin: '0 0 0 -10px',
        color: '#0070f3',
        cursor: 'pointer',
        transform: 'rotate(45deg)',
        transition: 'all 0.3s ease'
    },
    share: {
        margin: '0 0 0 10px'
    }
})

export default styles