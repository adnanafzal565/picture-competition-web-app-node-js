var competition = {
	_id: "",
	user1: {
		name: "",
		picture: "",
		voters: [{
			_id: "",
			name: "",
			email: ""
		}]
	},
	user2: {
		name: "",
		picture: "",
		voters: []
	},
	createdBy: {
		_id: "",
		name: "",
		email: ""
	},
	comments: [{
		_id: "",
    	comment: "",
    	user: {
    		_id: "",
    		name: "",
    		email: ""
    	},
    	createdAt: 0
	}],
	createdAt: 0,

	// temporary variables
	hasVotedUser1: false,
	hasVotedUser2: false
};

function Competition(user1, user2, createdBy, createdAt) {
	this.user1 = user1;
	this.user2 = user2;
	this.createdBy = createdBy;
	this.createdAt = createdAt;
}

Competition.prototype.isVotedByMe = function () {
	var isVoted = false;
	return isVoted;
};