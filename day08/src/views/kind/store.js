const reducer = (state = {
  kindlist: []
}, action) => {
  const { type, data } = action
  switch (type) {
    case 'changeKindList':
      // 使用对象合并更新数据
      return Object.assign({}, state, { bannerlist: data });
    default:
      return state;
  }
}

export default reducer;