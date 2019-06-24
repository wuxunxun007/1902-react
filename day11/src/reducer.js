const reducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case 'changeBannerList':
      return Object.assign({}, state, { bannerlist: data })
    case 'changeProList':
      return Object.assign({}, state, { prolist: data })
    default:
      return state;
  }
}

export default reducer;