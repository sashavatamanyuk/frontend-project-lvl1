#!/usr/bin/env node
import game from '../game';
import {
  rulesGame, makeQuestion, gameType, getHiddenNumber,
} from '../games/brain-progression_module';

game(rulesGame, makeQuestion, gameType, getHiddenNumber);
