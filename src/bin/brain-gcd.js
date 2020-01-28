#!/usr/bin/env node
import { game } from '..';
import {
  rulesGame, makeQuestion, gameType, getGCD,
} from './games/brain-gcd_module';

game(rulesGame, makeQuestion, gameType, getGCD);
