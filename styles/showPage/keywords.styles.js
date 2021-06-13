const styles = theme => ({
    root: {
        width: '100%',
        margin: 'auto',
        marginBottom: '5px'
    },
    key: {
        backgroundColor: '#3291ff',
        color: 'white',
        margin: '2px 3px',
        fontFamily: 'Lato',
        fontWeight: '600',
        '&:hover': {
            backgroundColor: '#0070f3',
        }
    },
    keyH1: {
        width: 'max-content',
        margin: '5px 0',
        marginLeft: '5px',
        fontFamily: 'Source Sans Pro',
        color: '#111',
        fontSize: '.9rem',
        fontWeight: '900',
        textRendering: 'optimizeLegibility',
        fontSmoothing: 'antialiased',
        [theme.breakpoints.down('xs')]: {
            fontWeight: '600'
        }
    },
    chipAvatar: {
        color: 'white !important',
        backgroundColor: 'rgba(0,0,0,0.2)'
    }
})

export default styles