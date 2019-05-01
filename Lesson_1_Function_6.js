function func21(num){
    
    let arrNum = num.split(' ');
    let thousands = 0 , millions = 0, billions  = 0;
    let newNum = 0, newNum1 = 0, newNum2 = 0, newNum3 = 0;

    for(let i = 0; i < arrNum.length; i++){
        
        switch(arrNum[i]){
                
            case 'один': newNum += 1; break;
            case 'одна': newNum += 1; break;
            case 'два': newNum += 2; break;
            case 'две': newNum += 2; break;
            case 'три': newNum += 3; break;
            case 'четыре': newNum += 4; break;
            case 'пять': newNum += 5; break;
            case 'шесть': newNum += 6; break;
            case 'семь': newNum += 7; break;
            case 'восемь': newNum += 8; break;
            case 'девять': newNum += 9; break;
            case 'ноль': newNum += 0; break;
           
            case  'десять': newNum += 10; break;
            case  'одиннадцать': newNum += 11; break;
            case  'двенадцать': newNum += 12; break;
            case  'тринадцать': newNum += 13; break;
            case  'четырнадцать': newNum += 14; break;
            case  'пятнадцать': newNum += 15; break;
            case  'шестнадцать': newNum += 16; break;
            case  'семнадцать': newNum += 17; break;
            case  'восемнадцать': newNum += 18; break;
            case  'девятнадцать': newNum += 19; break;
                
            case 'двадцать': newNum += 20; break;
            case 'тридцать': newNum += 30; break;
            case 'сорок': newNum += 40; break;
            case 'пятьдесят': newNum += 50; break;
            case 'шестьдесят': newNum += 60; break;
            case 'семьдесят': newNum += 70; break;
            case 'восемьдесят': newNum += 80; break;
            case 'девяносто': newNum += 90; break;
                
            case 'сто': newNum += 100; break;
            case 'двести': newNum += 200; break;
            case 'триста': newNum += 300; break;
            case 'четыреста': newNum += 400; break;
            case 'пятьсот': newNum += 500; break;
            case 'шестьсот': newNum += 600; break;
            case 'семьсот': newNum += 700; break;
            case 'восемьсот': newNum += 800; break;
            case 'девятьсот': newNum += 900; break;
                
            case  'тысяча': thousands += 1000; break;
            case  'тысячи': thousands += 1000; break;
            case  'тысяч': thousands += 1000; break;
                
            case  'миллион': millions += 1000000; break;
            case  'миллиона': millions += 1000000; break;
            case  'миллионов': millions += 1000000; break;
            
            case  'миллиард': billions += 1000000000; break;
            case  'миллиарда': billions += 1000000000; break;
            case  'миллиардов': billions += 1000000000; break;
        }
        
        if(arrNum[i] === 'миллиард' || arrNum[i] === 'миллиарда' || arrNum[i] === 'миллиардов' ){
            newNum *= billions;
            newNum2 = newNum;
            newNum = 0;
        }
          if(arrNum[i] === 'миллион' || arrNum[i] === 'миллиона' || arrNum[i] === 'миллионов' ){
            newNum *= millions;
            newNum1 = newNum;
            newNum = 0;
        }
          if(arrNum[i] === 'тысяча' || arrNum[i] === 'тысячи' || arrNum[i] === 'тысяч' ){
            newNum *= thousands;
            newNum3 = newNum;
            newNum = 0;
        }
    } 
    let nums = newNum1 + newNum2 + newNum3 + newNum;
    console.log(nums);
    
}

func21('пять миллиардов девятьсот сорок пять миллионов пятьсот пятьдесят семь тысяч сто двадцать три');