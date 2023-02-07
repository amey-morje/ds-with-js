obj = {
    'name': "Albert",
    'age':30,
    'is_developer':true,
    sayMyName: function() {
        console.log(this.name);
    }
}

obj.hobby = "Football";

delete obj.hobby



console.log(obj.name);
console.log(obj['age']);
obj.sayMyName();

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));