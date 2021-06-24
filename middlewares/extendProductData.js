import addKeywords from "./addKeywords"

function extendData(data, files) {
    const formData = data
    function slugify(str) {
        const slugArr = str.split(" ")
        return slugArr.join("_").toLowerCase()
    }
    formData.date = new Date()
    formData.slug = slugify(data.title)
    const titleKeywors = data.title.split(' ')
    const descKeywords = data.description.split(' ')
    const fallBackKeywords = [data.city, data.category, data.name]
    formData.keywords = addKeywords(titleKeywors, descKeywords, fallBackKeywords, data.keywords)
    return formData
}

export default extendData