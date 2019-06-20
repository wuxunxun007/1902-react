const Mock = require('mockjs');

const data = Mock.mock({
  'list|5-10': [
    {
      'id|+1': 1,
      img: Mock.Random.image('200x100', '#894FC4', '#FFF', 'png', '!')
    }
  ]
})

console.log(data)