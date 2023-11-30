const skills = [
    {id: 123321, language: 'JavaScript'},
    {id: 321123, language: 'HTML'},
    {id: 456654, language: 'css'}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function deleteOne(id){
    //find index
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function create(skill){
    //add id
    skill.id = Date.now() %1000000;
    skills.push(skill)
  }
	
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
  }