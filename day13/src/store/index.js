import HomeStore from "./homeStore";
import KindStore from "./kindStore";

class Store {
  constructor () {
    this.homeStore = new HomeStore(this); // 把首页的状态管理器添加到全局的状态管理器
    this.kindStore = new KindStore(this); // 传入this是为了保证 可以访问到 别的状态，需要在类构造器中实例化
  }
}

export default new Store();