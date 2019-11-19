const thousands = inData => inData ? inData.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1${'\u00A0'}`) : 0;

export default thousands;