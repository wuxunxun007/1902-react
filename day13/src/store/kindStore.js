import { action } from 'mobx'
class KindStore {
  constructor(store) {
    this.store = store
    this.changeHomeBannerList = this.changeHomeBannerList.bind(this)
  }

  @action
  changeHomeBannerList () {
    this.store.homeStore.bannerlist = [7, 8, 9]
  }
}

export default KindStore;