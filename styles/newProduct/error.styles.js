const styles = theme => ({
    root: {
        width: '100%',
        height: 'fit-content',
        minHeight: 'calc(100vh - 70px - 91px)',
        display: 'flex',
        marginTop: '70px',
        background: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    img: {
        maxWidth: '300px',
        marginTop: '40px',
        [theme.breakpoints.down('md')]: {
            marginTop: '25px'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '10px'
        }
    },
    p: {
        fontFamily: 'Source Sans Pro',
        fontWeight: '300',
        margin: '10px',
        marginTop: 0,
        textAlign: 'center',
        width: '60%',
        [theme.breakpoints.down('md')]: {
            width: '75%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%'
        }
    },
    h1: {
        fontFamily: 'Lato',
        margin: '10px'
    },
    link: {
        margin: '10px',
        marginBottom: '100px',
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