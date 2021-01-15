/*1. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие:
    isAdult(20); // true
    isAdult(4); // false
    */

//1

function isAdult(userAge) {
  if (typeof userAge !== 'number') {
    return null;
  }

  return userAge >= 18;
}
const result1 = isAdult('99');
console.log(result1);


/*2. Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым:
  checkMultiplicity(25, 5) // true
  checkMultiplicity(15, 3) // true
  checkMultiplicity(15, 5) // true
  checkMultiplicity(15, 4) // false
  */
  
 
//2

function checkMultiplicity(numFirst, numSecond) {
  if (typeof numFirst !== 'number' || typeof numSecond !== 'number') {
    return null;
  }

  const divisionReminder = numFirst % numSecond;

  if (divisionReminder === 0){
    return true;
  }
  return false;
}

const result2 = checkMultiplicity(8, -4);
console.log(result2);

/*3. Проверка возможности треугольника. Создать функцию которая принимает длины треугольника;
 функция возвращает true если треугольник возможен и false если нет
*/

//3

function isTriangleReal(sideOne, sideTwo, sideThree) {
  if (
    typeof sideOne !== 'number' ||
    typeof sideTwo !== 'number' ||
    typeof sideThree !== 'number' 
  ){
    return null;
  }

  if (
    (sideOne > 0)&&
    (sideTwo > 0)&&
    (sideThree > 0)&&
    (sideOne + sideTwo > sideThree)&&
    (sideOne + sideThree > sideTwo)&&
    (sideThree + sideTwo > sideOne)
  ){
    return true;
  }
  return false;
}

const result4_1 = isTriangleReal(2, 1, 2);
console.log(result4_1);

/*4. Написать функции расчета площадей (поверхности) следующих фигур/тел:
 ромб, цилиндр, треугольника, прямоугольника
 */

//4.1
function rhombusSquare(rhombusDiagonal_1, rhombusDiagonal_2) {
  if ((rhombusDiagonal_1 > 0) & (rhombusDiagonal_2 > 0)) {
    return (rhombusDiagonal_1 * rhombusDiagonal_2) / 2;
  }
  return null;
}

const rhombusSquareResult = rhombusSquare(2, 1);
console.log(rhombusSquareResult);

//4.2
function cylinderSquare(cylinderRadius, cylinderHeight) {
  if ((cylinderRadius > 0) && (cylinderHeight > 0)) {
    return 2 * Math.PI * cylinderRadius * (cylinderHeight + cylinderRadius);
  }
  return null;
}

const cylinderSquareResult = cylinderSquare(2, 1);
console.log(cylinderSquareResult);

//4.3
function triangleSquare(sideFirst, sideSecond, sideThird) {
  const triangleCheck = isTriangleReal(sideFirst, sideSecond, sideThird);
  if (!triangleCheck) {
    return null;
  }
  const halfPerimeter = (sideFirst + sideSecond + sideThird) / 2;
  return (
    ((halfPerimeter - sideFirst) *
     (halfPerimeter - sideSecond) *
     (halfPerimeter - sideThird) *
     halfPerimeter) **
    (1/2) 
  );
}
const triangleSquareResult = triangleSquare(7, 5, 6);
console.log(triangleSquareResult);

//4.4
function rectangleSquare(rectangleSideFirst, rectangleSideSecond) {
  if ((rectangleSideFirst > 0) & (rectangleSideSecond > 0)){
    return rectangleSideFirst * rectangleSideSecond;
  }
  return null;
}

const rectangleSquareResult = restangleSquare(2, 8);
console.log(rectangleSquareResult);






  


  


 

