const styles = theme => ({
    root: {
        flexBasis: 'calc(50% - 5px)',
        margin: '2.5px',
        boxShadow: '0 3px 10px 0 rgb(0 0 0 / 8%)',
        border: '.5px solid #eaeaea',
        '&:hover': {
            boxShadow: '0 4px 14px 0 rgb(0 0 0 / 10%)'
        },
        [theme.breakpoints.down(theme.breakpoints.values.sm + 150)]: {
            flexBasis: '100%'
        }
    },
    content: {
        padding: '1rem 1rem 0 1rem'
    },
    h3: {
        fontFamily: 'Lato',
        fontWeight: '500',
        width: '100%',
        whiteSpace: 'nowrap',
        color: 'rgba(0, 0, 0, 0.8)',
        margin: '0',
        overflowX: 'hidden',
        width: '100%',
        textOverflow: 'ellipsis'
    },
    avatar: {
        backgroundColor: '#3291ff',
        cursor: 'pointer'
    },
    date: {
        fontFamily: 'Source Sans Pro',
        margin: '0',
        fontSize: '.9rem',
        fontWeight: '600',
        color: 'rgba(0, 0, 0, 0.8)'
    },
    name: {
        margin: '0',
        fontFamily: 'Source Sans Pro',
        color: 'rgba(0,0,0,0.9)',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer'
    },
    price: {
        margin: '10px',
        marginTop: '0',
        marginLeft: 'auto',
        marginRight: '12px',
        fontFamily: 'Lato',
        color: '#111',
        fontSize: '1.1rem',
        fontWeight: '700'
    },
    media: {
        flexBasis: '100%',
        height: 0,
        paddingTop: '56.25%'
    },
    cardAction: {
        flexBasis: '85%'
    },
    actionBtn: {
        flexBasis: '20%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column'
    },
    actionArea: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    }
})

export default styles