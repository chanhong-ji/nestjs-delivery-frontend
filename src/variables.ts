function required(key: string, defaultValue: any = undefined) {
    const value = process.env[key] || defaultValue;
    if (!value) {
        throw new Error(`envError : Key ${key} is undefind`);
    }
    return value;
}

const variables = {
    db: {
        uploadUrl: required('REACT_APP_UPLOAD_URL'),
        url: required('REACT_APP_DB_URL'),
        subscriptionUrl: required('REACT_APP_SUBSCRIPTION_URL'),
    },
    googleMap: {
        apiKey: required('REACT_APP_GOOGLE_MAP_API', ''),
    },
};

export default variables;
