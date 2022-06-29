let kalimat = 'level';

const reverseWord = (word) => { 
   const arrWord = word.split('');

   return arrWord.reverse().join('');
}

const checkPalindrome = () => {
    const balikKalimat = reverseWord(kalimat);

    console.log(kalimat === balikKalimat);

    if(kalimat === balikKalimat) console.log(`Kata/Kalimat ${kalimat}, adalah Palindrome`);
    else console.log(`Kata/Kalimat ${kalimat}, bukan Palindrome`);
}

checkPalindrome();


