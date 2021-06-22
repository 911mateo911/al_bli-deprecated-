function addKeywords(title, desc, fallback, currentArr) {
    const filledArr = [...currentArr]
    if (currentArr.length >= 5) return currentArr
    let i = 0
    let j = 0
    let k = 0
    while (filledArr.length < 5) {
        if (!title[i]) break
        if (title[i].length > 2) {
            filledArr.push(title[i])
        }
        i++
    }
    while (filledArr.length < 5) {
        if (!desc[j]) break
        if (desc[j].length > 2) {
            filledArr.push(desc[j])
        }
        j++
    }
    while (filledArr.length < 5) {
        filledArr.push(fallback[k])
        k++
    }
    return filledArr
}

export default addKeywords