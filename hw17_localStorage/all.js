let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, "a", "b");
arr.splice(6, 0, "c");
arr.splice(8, 0, "e");
console.log (arr);


test.value = localStorage.getItem('key');
test.onchange = () => {
      localStorage.setItem('key', test.value)
    };

    console.log(test)