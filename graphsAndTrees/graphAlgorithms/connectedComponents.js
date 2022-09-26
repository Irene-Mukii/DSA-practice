const graph = {
    1: [2],
    2: [1],
    3:[],
    4:[6],
    5:[6],
    6:[4,5,7,8],
    7:[6],
    8:[6]
}

const conComps = (start) => {
    if (start == []) return false;
}