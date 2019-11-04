import { SAY_HELLO } from './actionsTypes';

export const updateSayHello = status => {
    return {
        type: SAY_HELLO,
        status
    };
};