import { observable, action } from 'mobx';

class HomeStore {
  @observable bannerlist = [1, 2, 3, 4, 5];
  @observable prolist = [];

  @action
  getBannerListData (url) {
    console.log('11111111', this)
    this.bannerlist.push(666)
  }
  constructor (store) {
    this.store = store
    this.getBannerListData = this.getBannerListData.bind(this)
  }
}

export default HomeStore;