export default class PhaserLogo extends Phaser.Physics.Arcade.Sprite {
  #angleSpeed = 0;

  constructor(scene, x, y) {
    super(scene, x, y, 'phaser-logo');
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.#angleSpeed = (Math.random() / 2) * Phaser.Math.Between(-1, 1);

    this.setCollideWorldBounds(true)
      .setBounce(1)
      .setInteractive()
      .setVelocityX(Phaser.Math.Between(-150, 150))
      .setVelocityY(Phaser.Math.Between(10, 300))
      .on('pointerdown', () => {});
  }

  update(time, delta) {
    this.setAngle(this.angle + this.#angleSpeed * delta);
  }
}
