function isPrime(...numbers) {//Fonksiyonla gönderilen sayıların asal olup olmadığını belirler
    for (let i = 0; i < numbers.length; i++) {//Buradaki for döngüsü sayesinde girilen sayıları teker teker döndürüyoruz
        let counter = 0;
        for (let j = 2; j < numbers[i]; j++) {//buradaki for döngüsü sayesinde ise sayının kendisi, bir ve iki hariç bütün sayılara bölüyoruz. Yani asal olup olmadığını kontrol ediyoruz
            if (numbers[i] % j == 0) {//Burada mod aldık. Eğer mod sıfır olursa o sayının asal olmadığını anlıyoruz
                counter++;//buraya girerse sayacımız bir artacak ve aşağıda sayının asal olmadığını belirten if koşuluna girecek
            }
        }
        if (counter > 0) {
            console.log(numbers[i] + " sayısı asal değildir.");
        }
        else {
            console.log(numbers[i] + " sayısı asal sayıdır.");
        }
    }
}
isPrime(5, 3, 9, 11, 13, 16, 55, 54735);//burada fonkisyona istediğimiz kadar sayı gönderebiliriz. 

console.log("<----------------------->");

function isFriendlyNumbers(num1, num2) {
    var totalNumberOneOfDivisors = 0;
    var totalNumberTwoOfDivisors = 0;
    for (let i = 0; i < num1; i++) {
        if (num1 % i == 0) {
            totalNumberOneOfDivisors += i;
        }
    }
    for (let i = 0; i < num2; i++) {
        if (num2 % i == 0) {
            totalNumberTwoOfDivisors += i;
        }
    }
    if (totalNumberOneOfDivisors == num2 &&
        totalNumberTwoOfDivisors == num1) {
        console.log(num1 + " ve " + num2 + " sayıları arkadaş sayılardır.");
    }
}

isFriendlyNumbers(220, 284);

console.log("<----------------------->");

function perfectNumbersUpToThousand() {
    for (let i = 1; i < 1000; i++) {
        var totalNumOneOfDivisors = 0;
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                totalNumOneOfDivisors += j;
            }
        }
        if (totalNumOneOfDivisors == i) {
            console.log(i + " sayısı mükemmel bir sayıdır.")
        }
    }
}
perfectNumbersUpToThousand();

console.log("<----------------------->");

function primeNumbersUpToThousand(num) {
    for (let i = 1; i < num; i++) {
        let counter = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                counter++;
            }
        }
        if (counter > 0) {
        }
        else {
            console.log(i + " sayısı asal sayıdır");
        }
    }
}

primeNumbersUpToThousand(1000); //Girilen sayıya kadar olan asal sayıları listeler

console.log("<----------------------->");
