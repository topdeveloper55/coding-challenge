var _privatelog = console.log;
console.log = function(...args) {
    var arguments = [];
    for(let i=0; i<args.length; i++) {
        arguments.push(args[i]);
        arguments.push(typeof(args[i]));
    }   
    _privatelog.apply(console, arguments);
}

console.log(3); // 3 "number"
console.log("a"); // "a" "string"
console.log(2, "a"); // 2 "number" "a" "string"