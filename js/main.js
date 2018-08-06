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
    sharedCanvas.width = screenWidth * pixelRatio;
    sharedCanvas.height = screenHeight * pixelRatio;
    DataStore.getInstance().sharedCanvas = sharedCanvas;

    this.login();
    this.initGame();
  }

  login() {
    wx.login({
      success: function(code) {
        console.log(code);
        // wx.request({ url });
      },
      fail: function() {},
      complete: function() {},
    });
    wx.getUserInfo({
      withCredentials: true,
      success: function(data) {
        console.log(data);
      },
      fail: function() {},
      complete: function() {},
    });
  }
  initGame() {}
}
