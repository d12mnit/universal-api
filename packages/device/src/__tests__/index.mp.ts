
jest.mock('universal-env', (): object => {
  return {
    isWeex: false,
    isWeb: false,
    isMiniApp: true,
  };
});

// eslint-disable-next-line
(global as any).my = {
  getSystemInfoSync: () => {
    return {
      screenWidth: 750
    };
  }
};

test('Choose image can return a promise in a mini app environment', (): void => {
  // eslint-disable-next-line
  const { platform, appName, screenWidth, screenHeight, px2rpx} = require('../index');
  expect(screenWidth).toBe(750);
});