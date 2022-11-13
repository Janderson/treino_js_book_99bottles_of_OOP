import { downTo } from './helpers';

class Bottles {
    verse(number){
        let phrase = "";
        switch (number){
            default:
                phrase =
                `${number} bottles of beer on the wall, ` +
                `${number} bottles of beer.\n` +
                'Take one down and pass it around, ' +
                `${number-1} bottles of beer on the wall.\n`;
                return phrase;
            case 2:
                phrase =
                `${number} bottles of beer on the wall, ` +
                `${number} bottles of beer.\n` +
                'Take one down and pass it around, ' +
                `${number-1} bottle of beer on the wall.\n`;
                return phrase;
            case 1:
                phrase =
                `${number} bottle of beer on the wall, ` +
                '1 bottle of beer.\n' +
                'Take it down and pass it around, ' +
                'no more bottles of beer on the wall.\n';
                return phrase;
            case 0:
                phrase =
                'No more bottles of beer on the wall, ' +
                'no more bottles of beer.\n' +
                'Go to the store and buy some more, ' +
                '99 bottles of beer on the wall.\n';
                return phrase;
            }
    }

    verses(start, end){
        let str_list = downTo(start, end).map(it => this.verse(it))
        return str_list.join("\n");
    }

    song(){
        return this.verses(99,0);
    }
}

export {Bottles}