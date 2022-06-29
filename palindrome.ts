let kalimat = 'katak';

const reverseWord = (word) => {    
    console.log(word.length);

   const arrWord = word.split('');

   return arrWord.reverse().join('');
}

const checkPalindrome = () => {
    const balikKalimat = reverseWord(kalimat);

    if(kalimat === balikKalimat) console.log('Ya');
    else console.log('Bukan');
}

checkPalindrome();


