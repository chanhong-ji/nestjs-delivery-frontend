function required(key: string, defaultValue: any = undefined) {
    const value = process.env[key] || defaultValue;
    if (!value) {
        throw new Error(`envError : Key ${key} is undefind`);
    }
    return value;
}

const variables = {
    db: {
        url: required('REACT_APP_DB_URL'),
    },
};

export default variables;
