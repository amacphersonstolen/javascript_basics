var friend = {};

var setAge = function(myAge) {
	var birthday = "7/28/1998";
	return {
		getAge : function() {
			return myAge;
		},

		getBirthday : function() {
			return birthday;
		},

		setBirthday : function(birthday) {
			this.birthday = birthday;
		}
	}
}

friend.age = setAge(18);
console.log(friend.age.getAge());
console.log(friend.age.getBirthday());
