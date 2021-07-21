const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center'
        }
    },
    avatar: {
        width: theme.spacing(14),
        height: theme.spacing(14),
        fontSize: '2.2rem',
        marginTop: '10px',
        backgroundColor: props => `${props.color}`
    },
    actBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '30%',
        padding: '5px',
        [theme.breakpoints.down('xs')]: {
            width: '90%'
        }
    },
    h1: {
        fontFamily: 'Lato',
        margin: '10px 0',
        fontWeight: '800',
        fontSize: '1.7rem',
        color: '#111',
        width: '100%',
        textAlign: 'center',
        overflow: 'hidden',
        minWidth: '0',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        wordBreak: 'break-word'
    },
    hideOnMob: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    p: {
        fontFamily: 'Lato',
        margin: 0,
        fontWeight: '600',
        marginTop: '-5px',
        width: '100%',
        textAlign: 'center',
        overflow: 'hidden',
        minWidth: '0',
        whiteSpace: 'nowrap',
        color: '#111',
        textOverflow: 'ellipsis',
        wordBreak: 'break-word'
    },
    icon: {
        margin: '10px',
        cursor: 'pointer',
        color: '#ed6292',
        fontSize: '1.7rem'
    },
    mobileProfile: {
        display: 'none',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        [theme.breakpoints.down('xs')]: {
            display: 'flex'
        }
    },
    mobActBtn: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '5px'
    },
    divider: {
        width: '90%',
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'block'
        }
    },
    bottomDivider: {
        [theme.breakpoints.down('xs')]: {
            marginTop: '5px'
        },
        marginTop: '0',
        width: '90%'
    },
    copy: {
        fontFamily: 'Source Sans Pro',
        fontWeight: '400',
        margin: '0'
    },
    copyIcon: {
        color: '#ff94c2'
    },
    copyBtn: {
        marginTop: '5px',
        backgroundColor: '#F3F4F6',
        boxShadow: '0 0px 30px 0 rgb(0 0 0 / 6%)'
    }
})

export default styles