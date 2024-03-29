const styles = theme => ({
    popover: {
        marginTop: '5px'
    },
    paper: {
        boxShadow: '0 4px 14px 0 rgb(0 0 0 / 10%)'
    },
    root: {
        width: 'fit-content',
        maxWidth: '280px',
        minWidth: '250px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profile: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    avatar: {
        width: theme.spacing(8),
        height: theme.spacing(8)
    },
    h4: {
        fontFamily: 'Source Sans Pro',
        fontWeight: '600',
        margin: '5px',
        maxWidth: '200px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: 'center'
    },
    h5: {
        fontFamily: 'Source Sans Pro',
        fontWeight: '400',
        margin: '0',
        maxWidth: '260px',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        overflowX: 'hidden',
        textOverflow: 'ellipsis'
    },
    list: {
        width: '100%'
    },
    button: {
        marginTop: '5px'
    },
    profilePic: {
        width: '64px',
        height: '64px',
        objectFit: 'cover'
    }
})

export default styles