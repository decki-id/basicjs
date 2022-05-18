var start = true;

while (start) {
    cubeOne = prompt('Enter the first cube:');

    if (cubeOne != null) {
        cubeTwo = prompt('Enter the second cube:');

        if (cubeTwo != null) {
            function cubesTotalVolume(cubeOne, cubeTwo) {
                var cubeOneVolume = cubeOne * cubeOne * cubeOne,
                    cubeTwoVolume = cubeTwo * cubeTwo * cubeTwo,
                    result = cubeOneVolume + cubeTwoVolume;
                return result;
            }

            totalVolume = cubesTotalVolume(cubeOne, cubeTwo);

            alert('The first cube\'s side is ' + cubeOne + ' centimeters long.\nThe second cube\'s side is ' + cubeTwo + ' centimeters long.\nSo, the total volume is: ' + totalVolume + ' centimeters.');

            start = confirm('Again?');
        } else {
            start = false;
        }
    } else {
        start = false;
    }
}