const styles = theme => ({
    box: {
        textAlign: 'center',
        display: 'flex',
        width: '100px',
        margin: '10px',
        height: '100px',
        borderRadius: '5px',
        boxShadow: '0 4px 14px 0 rgb(0 0 0 / 10%)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        transition: 'all 0.15s ease-in-out',
        '&:hover': {
            background: 'rgba(255,255,255,0.9)',
            boxShadow: '0 6px 20px rgb(93 93 93 / 23%)'
        }
    },
    text: {
        fontFamily: 'Lato',
        margin: '0',
        width: 'fit-content',
        fontWeight: '400'
    },
    value: {
        fontFamily: 'Lato',
        margin: '0',
        width: 'fit-content',
        fontWeight: '600'
    },
    img: {
        width: '50px',
        height: '40px',
        transition: 'all 0.15s ease-in-out',
        '&:hover': {
            transform: 'scale(1.05)'
        }
    }
})

export default styles