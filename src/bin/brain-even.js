#!/usr/bin/env node
import game from '../game';
import {
  rulesGame, getPositiveNaturalNumber, gameType, isEven,
} from './games/brain-even_module';

game(rulesGame, getPositiveNaturalNumber, gameType, isEven);
