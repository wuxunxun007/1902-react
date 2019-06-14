// react 组件的定义  1、es6中的class形式 2、函数式形式
/**
 * 参考： http://es6.ruanyifeng.com/#docs/class
 * class Person {}
 * class Student extends Person {}
 */
import React from 'react'; // 定义一个React组件必不可少的，不管是何种定义方式
// class类语法的组件的定义
// 通过render钩子函数可以渲染出组件的结构
class App extends React.Component {
  render () { // 负责渲染相应的页面 ---- return 一段HTML 代码,用（）包裹HTML代码
    return (
      <div>hello react</div>
    )
  }
}

// 一定不要忘记暴露组件
export default App;
