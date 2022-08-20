const formatDate = (date) => {
    return date ? (date.split("-").reverse().join("/")) : ("n/a")
}

export default formatDate