import { writable } from 'svelte/store';

export const assetsArray = writable([
    {
        id : 1,
        url : 'https://picsum.photos/537/354',
        artist : 'Buse Nar Berber'
    },
    {
        id : 2,
        url : 'https://picsum.photos/533/354',
        artist : 'Murat Can Berber'
    }



]);