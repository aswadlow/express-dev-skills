const skills = [
    {id: 123, language: 'JavaScript'},
    {id: 321, language: 'HTML'},
    {id: 456, language: 'css'}
]

module.exports = {
    getAll,
    getOne
  };
	
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
  }