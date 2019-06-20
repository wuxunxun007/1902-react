const reducer = (state = {
  homeBannerList: [1, 2],
  homeProList: [],
  homeDogList: [],
  homeCatList: []
}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'changeHomeBannerList':
    console.log(2)
      return Object.assign({}, state, { homeBannerList: data });
    case 'changeHomeProList':
      return Object.assign({}, state, { homeProList: data });
    case 'changeHomeCatList':
      return Object.assign({}, state, { homeCatList: data });
    case 'changeHomeDogList':
      return Object.assign({}, state, { homeDogList: data });
    default:
      return state;
  }
}

export default reducer;