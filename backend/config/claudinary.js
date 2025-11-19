import { v2 as claudinary } from 'cloudinary'

const connectClaudinary = async () => {

    claudinary.config({
        cloud_name: process.env.ClAUDINARY_NAME,
        api_key: process.env.ClAUDINARY_API_KEY,
        api_secret: process.env.ClAUDINARY_SECRET_KEY
    })
}

export default connectClaudinary