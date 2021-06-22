import {
    ALL,
    NUMBERS,
    LETTERS,
    CAPITAL_LETTERS,
} from '../consts/filters';

const numbers = [1, 2, 3, 4];
const letters = ['a', 'b', 'c', 'd'];
const capitalLetters = ['A', 'B', 'C', 'D'];

const fetchData = async (filter) => {
    switch(filter) {
        case undefined: 
        case ALL: {
            return [
                ...numbers,
                ...letters,
                ...capitalLetters
            ];
        }
        case NUMBERS: {
            return numbers;
        }
        case LETTERS: {
            return letters;
        }
        case CAPITAL_LETTERS: {
            return capitalLetters;
        }
        default: {
            return [];
        }
    }
}

export default fetchData;
