import DataStore from '../base/DataStore';

export default class Home {
  constructor(ctx) {
    this.ctx = ctx;
    this.canvas = DataStore.getInstance().canvas;
  }
}
