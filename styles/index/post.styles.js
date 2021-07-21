const styles = theme => ({
    root: {
        maxWidth: '350px',
        minWidth: '300px',
        boxShadow: '0 3px 10px 0 rgb(0 0 0 / 8%)',
        border: '.5px solid #eaeaea',
        '&:hover': {
            boxShadow: '0 4px 14px 0 rgb(0 0 0 / 10%)'
        }
    },
    h3: {
        fontFamily: 'Lato',
        fontWeight: '500',
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
        margin: '0',
        marginLeft: 'auto',
        marginRight: '12px',
        fontFamily: 'Lato',
        color: '#111',
        fontSize: '1.1rem',
        fontWeight: '700'
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    }
})

export default styles