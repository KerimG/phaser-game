export default class PhaserLogo extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'phaser-logo');
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setCollideWorldBounds(true)
      .setBounce(1)
      .setInteractive()
      .setVelocityX(123)
      .setVelocityY(300)
      .on('pointerdown', () => {});
  }

  update(delta) {
    this.setAngle(this.angle + 0.1 * delta);
  }
}
