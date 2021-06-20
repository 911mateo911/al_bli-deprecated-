function extendData(data) {
    const formData = data
    function slugify(str) {
        const slugArr = str.split(" ")
        return slugArr.join("_").toLowerCase()
    }
    formData.date = new Date()
    formData.slug = slugify(data.title)
    const titleKeywors = data.title.split(' ')
    if (data.keywords.length < 5) {
        let i = 0
        while (formData.keywords.length < 5) {
            formData.keywords.push(titleKeywors[i] || '')
            i++
        }
    }
    return formData
}

export default extendData