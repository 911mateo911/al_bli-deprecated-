const styles = theme => ({
    '@global': {
        '.profilePicDropZone': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }
    },
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    avatarWrap: {
        width: '80px',
        height: '80px'
    },
    avatar: {
        width: '35px',
        height: '35px'
    },
    h1: {
        textAlign: 'center',
        fontSize: '1rem',
        fontFamily: 'Lato',
        fontWeight: '400'
    },
    profile: {
        height: '85px',
        width: '85px',
        objectFit: 'cover'
    },
    deleteIcon: {
        position: 'absolute',
        top: '0px',
        right: '20px',
        color: 'red',
        width: '2rem',
        height: '2rem'
    }
})

export default styles