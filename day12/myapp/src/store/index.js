import HomeStore from './HomeStore';
import KindStore from './KindStore';
class Store {
  constructor () {
    this.homeStore = new HomeStore(this);
    this.kindStore = new KindStore(this);
  }
}

export default new Store();