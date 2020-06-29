import { awsConfig } from 'constants/aws'

const uploadAPI = async (endPoint, fileContent) => {
    const url = awsConfig.API.endpoints[0].endpoint + endPoint
    const headers = await awsConfig.API.endpoints[0].custom_header()
    headers['Content-Type'] = 'application/octet-stream'
    return fetch(
        url,
        {
            method: 'POST',
            headers,
            body: fileContent,
        }
    )
}
 
export default uploadAPI