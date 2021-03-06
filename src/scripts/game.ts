import 'phaser';
import MainScene from './scenes/mainScene';
import PreloadScene from './scenes/preloadScene';

const DEFAULT_WIDTH = 1600;
const DEFAULT_HEIGHT = 900;

declare global {
  interface Window {
    environment: string;
  }
}

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#ffaaaa',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
  },
  scene: [PreloadScene, MainScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      // gravity: { y: 400 },
    },
  },
};

window.addEventListener('load', () => {
  const game = new Phaser.Game(config);
});
