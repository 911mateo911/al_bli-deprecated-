import addKeywords from "./addKeywords"

function extendData(data) {
    const formData = data
    function slugify(str) {
        const slugArr = str.split(" ")
        return slugArr.join("_").toLowerCase()
    }
    function escapeHtml(unsafe) {
        const string = unsafe
            .replace(/&/g, '')
            .replace(/</g, '')
            .replace(/>/g, '')
            .replace(/"/g, '')
            .replace('/', '')
            .replace(/'/g, '')
        return string.split('').filter(e => e !== '/').join('')
    }
    formData.date = new Date()
    formData.slug = escapeHtml(slugify(data.title))
    const titleKeywors = data.title.split(' ')
    const descKeywords = data.description.split(' ')
    const fallBackKeywords = [data.city, data.category, data.name, data.description.slice(0, 16)]
    formData.keywords = addKeywords(titleKeywors, descKeywords, fallBackKeywords, data.keywords)
    return formData
}

export default extendData