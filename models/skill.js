const skills = [
    {id: 0, skill: 'Cascading Style Sheets', learned: true, difficulty: 3},
    {id: 1, skill: 'HTML', learned: true, difficulty: 2},
    {id: 2, skill: 'JavaScript', learned: true, difficulty: 4},
    {id: 99, skill: 'Full-Stack', learned: false, difficulty: 7},
    {id: 100, skill: 'EJS', learned: false, difficulty: 7},
];

function getAll() {
    return skills;
}

function getOne(index){
    return skills.find( ({id}) => id == index);
}

module.exports = {
    getAll,
    getOne
}