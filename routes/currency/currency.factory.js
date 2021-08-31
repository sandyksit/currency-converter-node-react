const { default: axios } = require("axios")

module.exports = () => {

    const GET_CURRENCY = 'https://open.er-api.com/v6/latest/GBP'
    async function getCurrency(req, res){
        const return_response = {
            status: null,
            message: null,
            data: null
        };
        const response = await axios(GET_CURRENCY);

        if(response && response.data) {
            return_response['status'] = 200;
            return_response['message'] = 'success';
            return_response['data'] = response.data;
        }
        res.status(return_response['status']).json(return_response)

    }

    return {
        getCurrency
    }
}