import PhaserLogo from '../objects/phaserLogo';
import FpsText from '../objects/fpsText';

export default class MainScene extends Phaser.Scene {
  fpsText;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    const logos: PhaserLogo[] = [];
    this.fpsText = new FpsText(this);

    for (let i = 0; i < 10; i++) {
      logos.push(
        new PhaserLogo(
          this,
          Phaser.Math.Between(0, this.cameras.main.width),
          Phaser.Math.Between(0, this.cameras.main.height),
        ),
      );
    }

    this.add.group(logos, {
      runChildUpdate: true,
    });

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
    this.fpsText.update();
  }
}
