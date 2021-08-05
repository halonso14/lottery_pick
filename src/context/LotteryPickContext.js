import { createContext } from 'react';
import { generateLottryPick } from '../lib/utils/LotteryPickGenerator';

const initState = [generateLottryPick()];

const LotteryPickContext = createContext(initState);

export default LotteryPickContext;
