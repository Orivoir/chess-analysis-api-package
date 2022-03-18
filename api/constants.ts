export const LICHESS_OPENING_URL = "https://explorer.lichess.ovh/master";
export const LICHESS_CLOUD_EVAL_URL = "https://lichess.org/api/cloud-eval";
export const PATTERN_UCI_MOVE = /^((a|b|c|d|e|f|g|h)(1|2|3|4|5|6|7|8)){2}(n|b|r|q)?$/;

export const MIN_MULTI_PV = 1;
export const MAX_MULTI_PV = 20;
export const DEFAULT_MULTI_PV = MIN_MULTI_PV;

export const MIN_DEPTH = 2;
export const MAX_DEPTH = 60;
export const DEFAULT_DEPTH = 8;

export enum PROVIDERS {
  LICHESS_BOOK,
  LICHESS_CLOUD_EVAL,
  STOCKFISH
};

// https://explorer.lichess.ovh/master?fen=rnbqkbnr/ppp1pppp/8/3p4/8/5P2/PPPPP1PP/RNBQKBNR w KQkq - 0 2
