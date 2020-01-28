#!/usr/bin/env node
import game from '../game';
import {
  rulesGame, makeQuestion, gameType, isPrime,
} from './games/brain-prime_module';

game(rulesGame, makeQuestion, gameType, isPrime);
