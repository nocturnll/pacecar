import * as React from 'react';

import { Page } from './Page';

const causeOfDeath = (cause) =>
  Page.dialog(
    <>
      {cause}
      <p className="death-message">Game over</p>
      <p id="play-again">Play again?</p>
    </>,
  );

const atTheStart = Page.dialog(
  <>
    <p>
      It's a beautiful day at the West Cordovan Grand Prix. As the pace car driver, it is up to you to lead the pack safely around the entire course. Once you have all completed the first lap, the
      true race may begin.
    </p>
    <p>
      You are at the <b>starting</b> line. It's time to go.
    </p>
  </>,
).addChoice('Gas', 'You press down on the gas pedal.', () => startingToMove);

const startingToMove = Page.dialog(
  <>
    <p>Your car lurches forward and quickly picks up the pace. The racecars behind you roll to a cautious start.</p>
    <p>The course begins with a straightaway.</p>
  </>,
)
  .addChoice('Even more gas', 'You really put the pedal to the medal.', () => TBD)
  .addChoice('Brake', 'You slam on the brakes.', () => brakingInTheStraightaway);

const brakingInTheStraightaway = Page.dialog(
  <>
    <p>You hit the brake. Your car stops in the middle of the straightaway. The racecars behind you slam on their brakes. You can sense their confusion.</p>
    <p>You should keep going. This is no place to stop.</p>
  </>,
)
  .addChoice('Gas', 'You put your foot back on the gas.', () => TBD)
  .addChoice('Do nothing', 'You do nothing.', () => doingNothingOnTheStraightaway);

const doingNothingOnTheStraightaway = Page.dialog(
  <>
    <p>You sit in the car. It's a nice day. There's barely a cloud in the sky.</p>
    <p>
      You can hear confusion in the announcer's voice. The crowd is agitated. A car honks behind you. (These racecars come equipped with horns. It's standard issue these days, to scare the stray geese
      off of the racetrack.)
    </p>
  </>,
)
  .addChoice('Gas', 'You put your foot back on the gas.', () => TBD)
  .addChoice('Turn on the radio', 'You turn the radio on.', () => turnOnTheRadioOnTheStraightaway);

const turnOnTheRadioOnTheStraightaway = Page.dialog(
  <>
    <p>You turn on the radio. Are pacecars supposed to have radios? Yours does. It's tuned to the local Top 40 Pop station. </p>
    <p>The outside world falls away. It's just you, the car, the empty road ahead, and Ariana Grande.</p>
  </>,
)
  .addChoice('Gas', 'You put your foot back on the gas.', () => radioOnDrivingStraightaway)
  .addChoice('Do nothing', 'You do nothing.', () => radioOnDoingNothingStraightaway);

const radioOnDoingNothingStraightaway = Page.dialog(
  <>
    <p>"Imagine a world like that," croons Ariana. Indeed.</p>
    <p>There's a tap on your window. A man stands outside your car, gesticulating wildly.</p>
  </>,
)
  .addChoice('Roll down the window', 'You roll down the window.', () => TBD)
  .addChoice('Do nothing', 'You continue to do nothing.', () => radioOnManAtWindowStraightaway);

const radioOnManAtWindowStraightaway = Page.dialog(
  <>
    <p>You look at the man. The man looks at you.</p>
    <p>He pulls on your car door. It's locked. He bangs on the window. Nothing happens. You are safe in your car.</p>
  </>,
)
  .addChoice('Roll down the window', 'You roll down the window.', () => TBD)
  .addChoice('Do nothing', 'You continue to do nothing at all.', () => radioOnManAtWindowDoNothingStraightaway);

const radioOnManAtWindowDoNothingStraightaway = causeOfDeath(
  // death
  <>
    <p>
      You tap the steering wheel in time with the music. More men appear outside your windows. Ariana fades out and in her wake you can hear the crowd, the announcer, the other drivers -- they don't
      know what to make of you.
    </p>
    <p>I don't know what to make of you.</p>
  </>,
);

const radioOnDrivingStraightaway = Page.dialog(
  <>
    <p>Ariana hits a high note, and you hit the gas.</p>
    <p>The cars behind you start up again. Nearby, a booming, crackling voice reassures the crowd.</p>
    <p>You're still on a straightaway.</p>
  </>,
)
  .addChoice('Gas', 'You press harder on the gas pedal.', () => TBD)
  .addChoice('Turn right', 'You crank the steering wheel all the way to the right.', () => turnRightIntoWall);

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
