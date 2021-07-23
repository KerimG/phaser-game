import PhaserLogo from '../objects/phaserLogo';
import FpsText from '../objects/fpsText';

export default class MainScene extends Phaser.Scene {
  fpsText;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    this.fpsText = new FpsText(this);

    this.add.existing(new PhaserLogo(this, this.cameras.main.width / 2, 0));

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px',
      })
      .setOrigin(1, 0);

    console.log(this);
  }

  update(time, delta) {
    for (let i = 0; i < this.children.list.length; i++) {
      const child = this.children.list[i];

      child.update(delta);
    }
  }
}
