const styles = theme => ({
    root: {
        padding: '1.5rem 5%',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '90%',
        margin: '10px auto',
        marginBottom: '1000px',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            padding: '1.5rem 0'
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            padding: '1.5rem 10px'
        }
    },
    img: {
        maxWidth: '100%',
        borderRadius: '50%',
        maxHeight: '360px',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 14px 0 rgba(143,200,255,255)'
        },
        transition: 'all 0.2s ease-in',
        [theme.breakpoints.down('sm')]: {
            width: '40%',
            marginBottom: '10px'
        },
        [theme.breakpoints.down('sm')]: {
            width: '60%',
            maxHeight: 'fit-content'
        }
    },
    cta: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    h2: {
        fontFamily: 'Source Sans Pro',
        color: '#111',
        fontSize: '2.5rem',
        textAlign: 'center',
        fontWeight: '600',
        margin: '10px'
    },
    h4: {
        color: '#696969',
        fontFamily: 'Source Sans Pro',
        fontWeight: '300',
        fontSize: '1.2rem',
        textAlign: 'center',
        margin: '0 0 20px 0'
    },
    shit: {
        margin: 0,
        marginTop: '20px',
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
    }
})

export default styles