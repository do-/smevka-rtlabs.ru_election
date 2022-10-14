const path = require ('path')

module.exports = {

////////////////////////////////////////////////////////////////////////////////

get_xsd_path_of_vote_order:

    function () {

		return path.join (__dirname, '..', 'Static/detachVoteOrder.xsd')

    },

////////////////////////////////////////////////////////////////////////////////

get_request_of_vote_order:

    function () {

		return this.rq.data
    	
    },

////////////////////////////////////////////////////////////////////////////////

get_response_of_vote_order:

    function () {
    
		const {orderId} = this.rq.data.detachVoteOrder
    
    	return {
    	
    		detachVoteOrderResponse: {
    			orderId,
    			statusCode: 1,
    		},

    	}

    },
        
}