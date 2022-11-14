import { downTo } from './helpers';

class Bottles {
    container(number){
        if (number===1){
            return "bottle";
        } else {
            return "bottles";
        }
    }
    verse(number){
        let phrase = "";
        switch (number){
            case 1:
                phrase =
                `${number} ${this.container(number)} of beer on the wall, ` +
                `${number} ${this.container(number)} of beer.\n` +
                'Take it down and pass it around, ' +
                `no more ${this.container(number-1)} of beer on the wall.\n`;
                return phrase;
            case 0:
                phrase =
                `No more ${this.container(number)} of beer on the wall, ` +
                `no more ${this.container(number)} of beer.\n` +
                'Go to the store and buy some more, ' +
                `99 ${this.container(number-1)} of beer on the wall.\n`;
                return phrase;
            default:
                phrase =
                `${number} ${this.container(number)} of beer on the wall, ` +
                `${number} ${this.container(number)} of beer.\n` +
                'Take one down and pass it around, ' +
                `${number-1} ${this.container(number-1)} of beer on the wall.\n`;
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