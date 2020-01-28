#!/usr/bin/env node
import { game } from '..';
import {
  rulesGame, makeExpression, gameType, calculateExpression,
} from './games/brain-calc_module';

game(rulesGame, makeExpression, gameType, calculateExpression);
