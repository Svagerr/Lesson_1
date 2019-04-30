/* Условные операторы */
// Задача 1
function func0(a, b){
    if(a%2 === 0){
        console.log(a*b);
    } else {
        console.log(a+b);
    }
};
//func0();

// Задача 2
function func1(x, y){
    if(x > 0 && y > 0){
        console.log('one');
    } else if(x < 0 && y > 0){
        console.log('two');
    } else if(x < 0 && y < 0){
        console.log('three'); 
    } else {
        console.log('four');
    }
};
//func1();

// Задача 3
function func2(a, b, c){
    let sum = 0;
    if(a > 0){
        sum += a;
    }
    if(b > 0){
        sum += b;
    }
    if(c > 0){
        sum += c;
    }
    console.log(sum);
};
//func2();

// Задача 4
function func3(a, b, c){
    if((a*b*c) > (a+b+c)){
        console.log((a*b*c)+3);
    } else {
        console.log((a+b+c)+3);
    }
};
//func3();

// Задача 5
function func4(a){
    switch(true){
        case a > -1 && a < 20: console.log('F'); break;
        case a > 19 && a < 40: console.log('E'); break;
        case a > 39 && a < 60: console.log('D'); break;
        case a > 59 && a < 76: console.log('C'); break;
        case a > 74 && a < 90: console.log('B'); break;
        case a > 89 && a < 101: console.log('A'); break;
    }
}
//func4(90);

/* Циклы */
// Задача 1
function func5(number){
    let sum = 0;
    for(let i = 0; i <= number; i++){
        if(i%2 === 0){
            sum += i;
        }
    }
    console.log(sum);
}
//func5(100);

// Задача 2
function func7(number){
    let rez ='';
    for(let i = 2; i < number; i++){
        if(number%i === 0){
            rez = '-';
            break;
        } else {
            rez = '+';
        }
    }
    console.log(rez);
}
//func7(13);

// Задача 3 ---------------------------------


// Задача 4
function func9(number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial *= i;
        if(number === 0){
            factorial = 1;
        }
    }
    console.log(factorial);
}
//func9(0);

// Задача 5 
function func10(number){
    let sum = 0;
    for(let i = number; i > 0; i = i / 10){
        i.toFixed(0);
        sum = sum + (i%10);
    }
    console.log(sum.toFixed(0));
}
//func10(123456789);

// Задача 6
function func11(number){
    let sum = 0;
    for(let i = number; i > 0; i = Math.floor(i / 10)){
        sum = sum * 10 + (i%10);
    }
    console.log(sum);
}
//func11(12345678901);

/*Одномерные массивы*/
// Задача 1
function func12(arr){
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] <= min){   
           min = i;
        }
    }
    console.log(min);
}
//func12([2,1,3,4, -5, 0])

// Задача 2
function func13(arr){
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= max){   
           max = arr[i];
        }
    }
    console.log(max);
}
//func13([2,1,3,4, -5, 0])

// Задача 3
function func14(arr){
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] <= min){   
           min = i;
        }
    }
    console.log(min);
}
//func14([2,1,3,4, -5, 5])

// Задача 4
function func15(arr){
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= max){   
           max = i;
        }
    }
    console.log(max);
}
//func15([2,1,3,4, -5, 0])

// Задача 5
function func151(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(i%2 != 0){
            sum += arr[i];
        }
    }
    console.log(sum);
}
//func151([1,2,3,4,5]);

// Задача 6
function func16(arr){
  let newArr = arr.reverse();
    console.log(newArr);
}
//func16([1,2,3,4,5]);

// Задача 7
function func17(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%2 !== 0){
            sum += 1;
        }
    }
    console.log(sum);
}
//func17([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Задача 8
function func18(arr){
    let Lenght = arr.length;
    let x = (Lenght/2).toFixed(0);
    let newArr = arr.slice(x, Lenght);
    let newArr1 = arr.slice(0, x);
    let arrNew = newArr.concat(newArr1);
    console.log(arrNew);
}
//func18([1,2,3,4,5,6])

// Задача 9
function Bubble(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i ; j++){
            if(arr[j] > arr[j+1]){
                let a = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = a;
            }
        }
    }
    console.log(arr);
}
// Bubble([4,5,3,2,7,8,9,34,25,0,-5]); 

function Select(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let Nmin = i;
        let min = arr[i];
        for(let j = i + 1; j < arr.length; j++){
            while(min > arr[j]){
                min = arr[j];
                Nmin = j;                
            }
            arr[Nmin] = arr[i];
            arr[i] = min;
        }
    }
    console.log(arr);
}
// Select([9,8,7,6,5,4,3,2,1,0,-1,-5]);  

function Insert(arr){
    for(let i = 1; i < arr.length; i++){
        let x = arr[i];
        let j = i - 1;
        while(j >= 0 && x <= arr[j]){
            arr[j+1] = arr[j];
            j = j - 1;
        } 
            arr[j + 1] = x;
        
    }
    console.log(arr);
}
//Insert([1,7,2,-4]);

/*Функции*/
// Задача 1
function func19(a){
    let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    for(let i = 0; i < arr.length; i++){
    }
    console.log(arr[a-1]);
}
//func19(7);

// Задача 2
function func20(num){
    let str = new String(num);
    let arrNum = str.split('');
    let arr0 = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    let arr1 = ['десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    let arr2 = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестдесят', 'семдесят', 'восемдесят', 'девяносто'];
    let arr3 = ['сто', 'двесте', 'триста', 'четыреста', 'пятсот', 'шестсот', 'семсот', 'восемсот', 'девятсот'];
    
    if(arrNum.length == 3 && arrNum[1] == 1){
         console.log(arr3[arrNum[0] - 1] + " " + arr1[arrNum[2]]);
    } else if(arrNum.length == 3){
         console.log(arr3[arrNum[0] - 1] + " " + arr2[arrNum[1] - 2] + " " + arr0[arrNum[2] - 1]);
    } else if(arrNum.length == 2 && arrNum[0] == 1){
         console.log(arr1[arrNum[1]]);
    } else if(arrNum.length == 2 && arrNum[0] != 1){
         console.log(arr2[arrNum[0] - 2] + ' ' + arr0[arrNum[1] - 1]);
    } else if(arrNum.length == 1){
         console.log(arr0[arrNum[0] - 1])
    }
}
//func20(432);

// Задача 3
function func21(num){
    
    let arrNum = num.split(' ');
    let newNum = 0;    

        switch(arrNum[0]){
            case 'сто': newNum += 100; break;
            case 'двесте': newNum += 200; break;
            case 'триста': newNum += 300; break;
            case 'четыреста': newNum += 400; break;
            case 'пятсот': newNum += 500; break;
            case 'шестсот': newNum += 600; break;
            case 'семсот': newNum += 700; break;
            case 'восемсот': newNum += 800; break;
            case 'девятсот': newNum += 900; break;
        } //сотые
        
        switch(arrNum[1] || arrNum[0]){
            case 'двадцать': newNum += 20; break;
            case 'тридцать': newNum += 30; break;
            case 'сорок': newNum += 40; break;
            case 'пятьдесят': newNum += 50; break;
            case 'шестдесят': newNum += 60; break;
            case 'семдесят': newNum += 70; break;
            case 'восемдесят': newNum += 80; break;
            case 'девяносто': newNum += 90; break;
    }  //десятые

        switch(arrNum[1] || arrNum[0]){
            case  'десять': newNum += 10; break;
            case  'одинадцать': newNum += 11; break;
            case  'двенадцать': newNum += 12; break;
            case  'тринадцать': newNum += 13; break;
            case  'четырнадцеть': newNum += 14; break;
            case  'пятнадцать': newNum += 15; break;
            case  'шестнадцать': newNum += 16; break;
            case  'семнадцать': newNum += 17; break;
            case  'восемнадцать': newNum += 18; break;
            case  'девятнадцать': newNum += 19; break;
    }  // десять. одинадцать...

        switch(arrNum[2] || arrNum[1] || arrNum[0]){
            case 'один': newNum += 1; break;
            case 'два': newNum += 2; break;
            case 'три': newNum += 3; break;
            case 'четыре': newNum += 4; break;
            case 'пять': newNum += 5; break;
            case 'шесть': newNum += 6; break;
            case 'семь': newNum += 7; break;
            case 'восемь': newNum += 8; break;
            case 'девять': newNum += 9; break;
            case 'ноль': newNum += 0; break;
    }  // простые   
    
    console.log(newNum);
    
}

//func21('сто шестдесят пять');

// Задача 4 
function func22(x1,y1,x2,y2){
    let d = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    console.log(d);
}
//func22(1, 1, 4, 4);

