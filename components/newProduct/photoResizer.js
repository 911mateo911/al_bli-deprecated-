import Resizer from 'react-image-file-resizer'

async function resizePhotos(files) {
    const promises = files.map(img => new Promise((resolve) => {
        Resizer.imageFileResizer(
            img,
            2160,
            400,
            "JPEG",
            60,
            0,
            file => {
                resolve(file)
            },
            "file"
        )
    }))
    return Promise.all(promises).then(result => { return result }).catch(e => { return [] })
}

export default resizePhotos