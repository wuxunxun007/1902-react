import React, { Component } from 'react'; // 类组件的另一种引用方式

class App extends Component { // 继承时不用写React
  constructor (props) {
    super(props);
    this.state = {
      list: [
        {
          brand: '康师傅',
          data: ['老谭酸菜', '红烧牛肉', '鲜虾鱼板面', '小鸡炖蘑菇']
        },
        {
          brand: '统一',
          data: ['藤椒牛肉', '葱爆牛肉', '葱烧排骨面']
        }
      ]
    }
  }

  render () {
    return (
      <ul>
        {
          this.state.list.map((item, index) => {
            return (
              <li key = { index }>
                { item.brand }
                <ul>
                  {
                    item.data.map((itm, idx) => {
                      return (
                        <li key = { idx }>
                          { itm }
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default App;
