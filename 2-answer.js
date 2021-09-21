var tree = {
    a: {
      x: 3,
      y: {
        d: 2,
        e: 2,
        f: {
          g: 4
        },
        z: 8
      }
    }
  }

function getUniqueSortedNumbers(obj) {
    var out = [];
    function recursion(value) {
        for(key in value) {
            if(typeof(value[key]) == "number") out.push(value[key]);
            if(typeof(value[key]) == "object") recursion(value[key]);
        }
    }
    recursion(obj);
    out.sort(function(a, b) {return a-b;});
    var result = [];
    if(out.length > 0) result.push(out[0]);
    for(let i=1; i<out.length; i++) {
        if(out[i] != out[i-1]) result.push(out[i])
    }
    return result;
}

console.log(getUniqueSortedNumbers(tree));