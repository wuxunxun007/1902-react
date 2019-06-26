import { observable, action } from 'mobx'

class HomeStore {

  @observable bannerlist = [1, 2, 3];
  @observable prolist = []; 

  constructor(store) {
    this.store = store
    this.changeBannerList = this.changeBannerList.bind(this)
    this.changeProList = this.changeProList.bind(this)
  }

  @action
  changeBannerList (data) {
    console.log(this)
    this.bannerlist = data
  }

  @action
  changeProList (data) {
    this.prolist = data
  }
}

export default HomeStore;