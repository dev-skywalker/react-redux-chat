const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/auto/upload`

const uploadFile = async (file) => {
    const formData = new FormData()
    formData.append("upload_preset", "chat-app-file")
    formData.append('file', file)


    const response = await fetch(url, {
        method: 'post',
        body: formData
    })
    const responseData = await response.json()
    console.log(responseData)

    return responseData
}

export default uploadFile