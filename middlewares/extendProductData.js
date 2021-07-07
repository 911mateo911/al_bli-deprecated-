import addKeywords from "./addKeywords"

export function getElasticSearch(str) {
    const splitted = str.split(' ')
    const result = []
    splitted.map(e => {
        for (let i = 0; i < e.length; i++) {
            result.push(e.slice(0, i + 3))
        }
    })
    return result
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

function extendData(data) {
    const formData = data
    formData.date = new Date()
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