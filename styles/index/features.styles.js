const styles = theme => ({
    h3: {
        color: '#111',
        fontFamily: 'Source Sans Pro',
        textAlign: 'center',
        fontSize: '2rem',
        margin: '10px'
    },
    h4: {
        color: '#696969',
        fontFamily: 'Source Sans Pro',
        textAlign: 'center',
        fontSize: '1.1rem',
        fontWeight: '300',
        maxWidth: '90%',
        margin: '20px auto'
    },
    featureWrap: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '75%',
        margin: 'auto',
        marginBottom: '10px',
        flexWrap: 'nowrap',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        },
        [theme.breakpoints.down('xs')]: {
            flexWrap: 'wrap'
        }
    },
    featureItem: {
        border: '1px solid #eaeaea',
        padding: '1.5rem',
        borderRadius: '7px',
        flexBasis: '30%',
        minHeight: '150px',
        color: '#111',
        '&:hover': {
            border: '1px solid transparent',
            boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
            transition: 'all 0.2s ease'
        },
        [theme.breakpoints.down('xs')]: {
            flexBasis: '70%',
            margin: '10px'
        }, [theme.breakpoints.between('sm', theme.breakpoints.values.md - '110')]: {
            height: '185px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }
    },
    featureH4: {
        margin: '0',
        fontFamily: 'Lato',
        fontSize: '17px',
        fontWeight: '700'
    },
    featureP: {
        margin: '10px 0',
        fontFamily: 'Source Sans Pro',
        fontSize: '1rem',
        fontWeight: '300'
    }
})

export default styles