const apis = {
    // get
    get: '/api/shop/customer/get', // get
    getNormal: '/api/shop/customer/query', // query
    getOrderPath: '/api/shop/customer/getOrderPath', // getOrderPath
    getLocationPath: '/api/shop/customer/fileCode/page', // 指定字段替换
    getBlob: '/api/shop/customer/getBlob', // getBlob
    getPathBlob: '/api/shop/customer/getPathBlob', // getPathBlob
    getQueryBlob: '/api/shop/customer/getQueryBlob', // getQueryBlob
    // post
    postBody: '/api/shop/customer/body', // body
    postPath: '/api/shop/customer/body', // bodyPath
    postQuery: '/api/shop/customer/body', // bodyQuery
    postFormData: '/api/shop/customer/formData', // formData
    postFormDataPath: '/api/shop/customer/formDataPath', // formDataAndPath
    postFormDataQuery: '/api/shop/customer/formdataQuery', // formdataAndQuery
    postBlob: '/api/shop/customer/postBlob', // postBlob
    postBlobPath: '/api/shop/customer/postBlobPath', // postBlob
    postBlobQuery: '/api/shop/customer/postBlobQuery', // postBlobQuery
};

export default apis