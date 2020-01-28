#!/usr/bin/env node
import game from '../game';
import {
  rulesGame, makeExpression, gameType, calculateExpression,
} from './games/brain-calc_module';

game(rulesGame, makeExpression, gameType, calculateExpression);
