const styles = theme => ({
    root: {
        display: 'flex',
        width: '70%',
        margin: 'auto',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            width: '80%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '95%'
        }
    },
    h1: {
        color: '#111',
        fontWeight: '400',
        fontSize: '1.7rem',
        margin: '0',
        textAlign: 'left',
        width: '100%',
        fontFamily: 'Source Sans Pro'
    },
    divider: {
        width: '100%'
    }
})

export default styles