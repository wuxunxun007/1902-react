import React, { Component } from 'react';

class Com extends Component {
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
    let arr = [];
    this.state.list.map((item, index) => {
      let itemArr = [];
      item.data.map((itm, idx) => {
        itemArr.push(<li key = { idx }>{ itm }</li>)
      })
      let oLi = <li key = { index }>{ item.brand }<ul> { itemArr } </ul></li>;
      arr.push(oLi)
    })

    return (
      <ul>
        { arr }
      </ul>
    )
  }
}

export default Com;
