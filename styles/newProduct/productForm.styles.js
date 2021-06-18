const styles = theme => ({
    root: {
        marginTop: '70px',
        padding: '10px'
    },
    h1: {
        fontFamily: 'Source Sans Pro',
        fontSize: '2.5rem',
        textAlign: 'center',
        color: '#111',
        margin: '10px'
    },
    h3: {
        textAlign: 'center',
        fontFamily: 'Source Sans Pro',
        color: '#696969',
        fontWeight: '300',
        margin: '0'
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
    selectWrap: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%'
    },
    select: {
        width: '40%',
        [theme.breakpoints.down(theme.breakpoints.values.xs + '400')]: {
            width: '45%'
        }
    },
    submitBtn: {
        color: 'white',
        alignSelf: 'flex-end',
        margin: '10px 0'
    },
    loaderWrap: {
        width: '100%',
        height: 'calc(100vh - 70px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    loaderText: {
        width: 'fit - content',
        margin: '10px',
        fontFamily: 'Lato',
        fontWeight: 400
    }
})

export default styles