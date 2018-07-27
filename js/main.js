import DataStore from './base/DataStore';

/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    const systemInfo = wx.getSystemInfoSync(); // 获取系统信息
    const { pixelRatio, screenWidth, screenHeight, platform } = systemInfo;
    console.log(screenWidth, screenHeight, pixelRatio, platform);

    let openDataContext = wx.getOpenDataContext();
    let sharedCanvas = openDataContext.canvas;
    sharedCanvas.width = screenWidth * ratio;
    sharedCanvas.height = screenHeight * ratio;
    DataStore.getInstance().sharedCanvas = sharedCanvas;

    this.initGame();
  }

  initGame() {}
}
