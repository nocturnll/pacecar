import * as React from 'react';

import { Page } from './Page';

const causeOfDeath = (cause) =>
  Page.dialog(
    <>
      {cause}
      <p className="death-message">You died :rip:</p>
      <p id="play-again">Play Again</p>
    </>,
  );

const atTheStart = Page.dialog(
  <p>
    You are at the <b>begin</b> line. It's time to go.
  </p>,
)
  .addChoice('Gas', 'You press down on the gas pedal.', () => startingToMove)
  .addChoice('Do nothing', 'You do nothing', () => TBD);

const startingToMove = Page.dialog(
  <>
    <p>Your car lurches forward. You quickly pick up the pace. The racecars behind you follow slowly.</p>
    <p>It's a straightaway.</p>
  </>,
)
  .addChoice('Even more gas', 'You really put the pedal to the medal.', () => TBD)
  .addChoice('Brake', 'You slam on the brakes.', () => brakingInTheStraightaway)
  .addChoice('Turn right', 'You turn the wheel as hard as you can to the right.', () => turnRightIntoWall);

const brakingInTheStraightaway = Page.dialog(
  <>
    <p>You hit the brake. Your car stops in the middle of the straightaway. The racecars behind you slam on their brakes. You can sense their confusion.</p>
    <p>You should keep going. This is no place to stop.</p>
  </>,
)
  .addChoice('Gas', 'You put your foot back on the gas.', () => TBD)
  .addChoice('Do nothing', 'You do nothing.', () => TBD);

const turnRightIntoWall = causeOfDeath(
  <>
    <p>You crank the wheel as far as you can to the right at 60 miles per hour.</p>
    <p>"Imagine a world like that," Ariana croons as your car careens into a wall.</p>
    <p>"Imagine a world like that," she repeats, your car flipping end-over-end into the crowd.</p>
    <p>Imagine.</p>
  </>,
);

const TBD = Page.dialog(
  <p>
    There's nothing here.
    <br />
    Moooore Features Coming Soon To a Pace Car Near You!
  </p>,
);

export const firstPage = atTheStart;
