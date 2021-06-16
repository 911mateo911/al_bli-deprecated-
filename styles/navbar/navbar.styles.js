const styles = theme => ({
    navBar: {
        boxSizing: 'border-box',
        padding: '10px 10px 10px 0',
        display: 'flex',
        position: 'fixed',
        width: '100%',
        marginTop: '-70px',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: '10',
        [theme.breakpoints.down('xs')]: {
            padding: '0 10px'
        },
        boxShadow: '0px 30px 60px rgb(0 0 0 / 4%)'
    },
    linkWrap: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexBasis: '70%',
        [theme.breakpoints.up('md')]: {
            flexBasis: '75%'
        },
        [theme.breakpoints.down('md')]: {
            flexBasis: '70%'
        },
        [theme.breakpoints.down('sm')]: {
            flexBasis: '60%'
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    linkItem: {
        fontFamily: 'Lato',
        fontWeight: '700',
        color: '#4B5563',
        transition: 'all 0.3s',
        '&:hover': {
            color: 'black'
        }
    },
    social: {
        [theme.breakpoints.up('md')]: {
            flexBasis: '25%'
        },
        [theme.breakpoints.down('md')]: {
            flexBasis: '30%'
        },
        [theme.breakpoints.down('sm')]: {
            flexBasis: '40%'
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
        flexBasis: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
    socialItem: {
        margin: '0 10px'
    },
    socialAvt: {
        cursor: 'pointer'
    },
    menu: {
        display: 'none',
        fontSize: '2rem',
        color: '#374151',
        [theme.breakpoints.down('xs')]: {
            display: 'block'
        },
        cursor: 'pointer'
    },
    search: {
        display: 'none',
        fontSize: '2rem',
        color: '#374151',
        [theme.breakpoints.down('xs')]: {
            display: 'block'
        },
        margin: '0 5px',
        cursor: 'pointer'
    },
    logo: {
        display: 'none',
        fontSize: '2.5rem',
        margin: '0',
        fontFamily: 'Lato',
        marginLeft: '50px',
        [theme.breakpoints.down('xs')]: {
            display: 'block'
        },
        cursor: 'pointer'
    },
    bigLogo: {
        fontSize: '2.5rem',
        margin: '0',
        fontFamily: 'Lato',
        color: '#111',
        [theme.breakpoints.down('xs')]: {
            display: 'block'
        },
        cursor: 'pointer'
    },
    bli: {
        fontFamily: 'Source Sans Pro',
        color: '#0070f3'
    },
    avatarMobile: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'flex'
        }
    },
    mobileWrap: {
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content'
    }
})

export default styles