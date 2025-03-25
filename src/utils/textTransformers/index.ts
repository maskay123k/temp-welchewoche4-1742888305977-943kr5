// Main entry point for text transformers
import type { StyleCategory } from './types';
import { fancyStyle } from './styles/fancy';
import { bubbleStyle } from './styles/bubble';
import { squareStyle } from './styles/square';
import { decorativeStyle } from './styles/decorative';
import { monospaceStyle } from './styles/monospace';
import { doubleStruckStyle } from './styles/double';
import { serifStyle } from './styles/serif';
import { boldStyle } from './styles/bold';
import { reversedStyle } from './styles/reversed';
import { alternatingStyle } from './styles/alternating';
import { spacedStyle } from './styles/spaced';
import { bracketsStyle } from './styles/brackets';
import { scriptStyle } from './styles/script';
import { smallCapsStyle } from './styles/smallcaps';
import { upsideDownStyle } from './styles/upsidedown';
import { circleNumbersStyle } from './styles/circles';
import { fullWidthStyle } from './styles/fullwidth';
import { frakturStyle } from './styles/fraktur';
import { lineStyle } from './styles/line';
import { messyStyle } from './styles/messy';
import { fireStyle } from './styles/fire';
import { stringyStyle } from './styles/stringy';
import { squigglesStyle } from './styles/squiggle';
import { barsStyle } from './styles/bars';
import { birdyStyle } from './styles/birdy';
import { cloudyStyle } from './styles/cloudy';
import { stopStyle } from './styles/stop';
import { dotAboveStyle } from './styles/dotabove';
import { ringStyle } from './styles/ring';
import { sadStyle } from './styles/sad';
import { happyStyle } from './styles/happy';
import { arrowBelowStyle } from './styles/arrowbelow';
import { xAboveBelowStyle } from './styles/xabove';
import { plusBelowStyle } from './styles/plusbelow';
import { asterixBelowStyle } from './styles/asterixbelow';
import { bridgeAboveBelowStyle } from './styles/bridgeabovebelow';
import { bridgeBelowStyle } from './styles/bridgebelow';
import { bridgeAboveStyle } from './styles/bridgeabove';
import { stinkyStyle } from './styles/stinky';
import { grassStyle } from './styles/grass';
import { checkedStyle } from './styles/checked';
import { doubleBudStyle } from './styles/doublebud';
import { budStyle } from './styles/bud';
import { rippleStyle } from './styles/ripple';
import { infiniteStyle } from './styles/infinite';
import { waveStyle } from './styles/wave';
import { doublePinsStyle } from './styles/doublepins';
import { pinsStyle } from './styles/pins';
import { swapStyle } from './styles/swap';
import { eyeStyle } from './styles/eye';
import { zigzagStyle } from './styles/zigzag';
import { lightningStyle } from './styles/lightning';
import { underStyle } from './styles/under';
import { overStyle } from './styles/over';
import { doubleUnderStyle } from './styles/doubleunder';
import { belowStyle } from './styles/below';
import { slashStyle } from './styles/slash';
import { tildeStrikethroughStyle } from './styles/tildestrikethrough';
import { strikethroughStyle } from './styles/strikethrough';
import { blackSquareStyle } from './styles/blacksquare';
import { h4k3rStyle } from './styles/hakr';
import { tinyCapsStyle } from './styles/tinycaps';
import { zalgoStyle } from './styles/zalgo';
import { soHotStyle } from './styles/sohot';
import { highAboveStyle } from './styles/highabove';
import { sorcererStyle } from './styles/sorcerer';
import { noisyStyle } from './styles/noisy';
import { boldItalicStyle } from './styles/bolditalic';
import { italicStyle } from './styles/italic';
import { symbolsStyle } from './styles/symbols';
import { smoothStyle } from './styles/smooth';
import { handwritingStyle } from './styles/handwriting';
import { weirdStyle } from './styles/weird';
import { boldScriptStyle } from './styles/boldscript';
import { blackBubbleStyle } from './styles/blackbubble';
import { rusifyStyle } from './styles/rusify';
import { blockStyle } from './styles/block';
import { mangaStyle } from './styles/manga';
import { flakyStyle } from './styles/flaky';
import { fantasyStyle } from './styles/fantasy';
import { boldFrakturStyle } from './styles/boldfraktur';
import { doubleInkStyle } from './styles/doubleink';
import { antrophobiaStyle } from './styles/antrophobia';
import { currencyStyle } from './styles/currency';




// Export text styles grouped by category
export const textStyles: StyleCategory[] = [
  {
    name: 'Basic Styles',
    styles: [
      fancyStyle,
      bubbleStyle,
      squareStyle,
      serifStyle,
      boldStyle,
      scriptStyle,
      italicStyle,
      h4k3rStyle,
      symbolsStyle,
      tinyCapsStyle,
      highAboveStyle,
      sorcererStyle,
      noisyStyle,
      boldItalicStyle,
      smoothStyle,
      handwritingStyle,
      weirdStyle,
      boldScriptStyle,
      blackBubbleStyle,
      rusifyStyle,
      blockStyle,
      mangaStyle,
      flakyStyle,
      fantasyStyle,
      boldFrakturStyle,
      doubleInkStyle,
      antrophobiaStyle,
      currencyStyle
    ]
  },
  {
    name: 'Mathematical Styles',
    styles: [
      monospaceStyle,
      doubleStruckStyle,
      smallCapsStyle
    ]
  },
  {
    name: 'Decorative Styles',
    styles: [
      decorativeStyle,
      bracketsStyle,
      spacedStyle,
      circleNumbersStyle,
      fullWidthStyle,
      frakturStyle,
      lineStyle,
      messyStyle,
      fireStyle,
      stringyStyle,
      squigglesStyle,
      barsStyle,
      birdyStyle,
      cloudyStyle,
      stopStyle,
      dotAboveStyle,
      ringStyle,
      sadStyle,
      happyStyle,
      arrowBelowStyle,
      xAboveBelowStyle,
      plusBelowStyle,
      asterixBelowStyle,
      bridgeBelowStyle,
      bridgeAboveStyle,
      stinkyStyle,
      grassStyle,
      checkedStyle,
      doubleBudStyle,
      budStyle,
      rippleStyle,
      infiniteStyle,
      waveStyle,
      doublePinsStyle,
      pinsStyle,
      swapStyle,
      eyeStyle,
      zigzagStyle,
      lightningStyle,
      underStyle,
      overStyle,
      doubleUnderStyle,
      belowStyle,
      slashStyle,
      tildeStrikethroughStyle,
      strikethroughStyle,
      blackSquareStyle,
      zalgoStyle,
      soHotStyle
    ]
  },
  {
    name: 'Text Effects',
    styles: [
      reversedStyle,
      alternatingStyle,
      upsideDownStyle
    ]
  }
];

// Export individual styles for direct access
export {
  fancyStyle,
  bubbleStyle,
  squareStyle,
  decorativeStyle,
  monospaceStyle,
  doubleStruckStyle,
  serifStyle,
  boldStyle,
  reversedStyle,
  alternatingStyle,
  spacedStyle,
  bracketsStyle,
  scriptStyle,
  smallCapsStyle,
  upsideDownStyle,
  circleNumbersStyle,
  fullWidthStyle
};
