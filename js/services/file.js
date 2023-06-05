class FileService {
    static upload(formData, file_name, type, size){
        return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/file?name=${file_name}&type=${type}&size=${size}`,
        {
          method: 'POST',
          body: formData,
          headers: {
          }
        })
    }

    static getUrl(file_id){
      return AuthInterceptor.makeApiRequest(`${Environment.API_URL}/file/url?file_id=${file_id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
    }
}