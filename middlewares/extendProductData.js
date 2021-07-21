import addKeywords from "./addKeywords"

export function getElasticSearch(str) {
    const splitted = str.toLowerCase().split(' ')
    const result = new Set()
    splitted.map(e => {
        for (let i = 0; i < e.length; i++) {
            result.add(e.slice(0, i + 2))
        }
    })
    return Array.from(result)
}

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

function extendData(data, wDate = true) {
    const formData = data
    if (wDate) {
        formData.date = new Date()
    }
    formData.slug = escapeHtml(slugify(data.title))
    formData.elasticSearch = getElasticSearch(data.title)
    const titleKeywors = data.title.split(' ')
    const descKeywords = data.description.split(' ')
    const fallBackKeywords = [data.city, data.category, data.name, data.description.slice(0, 16)]
    formData.keywords = addKeywords(titleKeywors, descKeywords, fallBackKeywords, data.keywords)
    formData.sluggedKeywords = formData.keywords.join('')
    return formData
}

export default extendData