const styles = theme => ({
    root: {
        display: 'flex',
        width: '100%',
        padding: '10px',
        paddingTop: '100px',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 70px - 91px)',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '80px'
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: '40px'
        }
    },
    icon: {
        backgroundColor: '#0070f3',
        width: '50px',
        height: '50px'
    },
    h1: {
        color: '#111',
        margin: '10px',
        fontSize: '2.5rem',
        textAlign: 'center',
        fontFamily: 'Source Sans Pro'
    },
    p: {
        color: '#696969',
        margin: '0',
        textAlign: 'center',
        fontFamily: 'Source Sans Pro',
        fontWeight: '300'
    },
    cookies: {
        textDecoration: 'underline',
        fontWeight: '400'
    },
    form: {
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px auto',
        [theme.breakpoints.down('md')]: {
            width: '50%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '60%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '95%'
        }
    },
    span: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    submitBtn: {
        color: 'white',
        alignSelf: 'flex-end',
        margin: '10px 0'
    },
    pReg: {
        color: '#696969',
        margin: '20px auto',
        textAlign: 'center',
        fontFamily: 'Source Sans Pro',
        fontWeight: '300'
    },
    register: {
        fontWeight: '600',
        margin: '0 20px',
        color: 'black',
        [theme.breakpoints.down(theme.breakpoints.values.xs + 350)]: {
            margin: '0 10px'
        }
    }
})

export default styles