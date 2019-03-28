/**
 * Fibonacci 数列
 */

 // 递归常规版本
 {
    function Fibonacci (n) {
        if ( n <= 2 ) {return 1};
      
        return Fibonacci(n - 1) + Fibonacci(n - 2);
      }  
 }

 // 递归优化版本
 {
    function Fibonacci() {
        this.obj = {};
        this.count = 0;
    }
    Fibonacci.prototype.getF = function(n) {
        this.count ++;
        if ( n <= 2 ) {return 1};
        if (this.obj.hasOwnProperty(n)) {
            return this.obj[n];
        }
        const ret = this.getF(n - 1) + this.getF(n -2);
        this.obj[n] = ret;
        return ret;
    }
    
    var f = new Fibonacci();
    f.getF(45);
}

// for 循环版本1

{
    function fibonacci(n) {
        if (n === 1 || n === 2) {
            return 1;
        }
        let one = 1;
        let two = 1;
        let temp = null;
        for(let i = 3; i <= n; i++) {
            temp = one + two;     // 累加前两个数的和
            one = two;
            two = temp;
        }
        return temp;
    }
    console.log(fibonacci(40));
}

// for 循环版本2 利用正推法
// 可以看出，每一个新的f(n)，是前两个旧的f(n-1)和f(n-2)之和，一路递归下去，最终都将递归到f(0)和f(1)上来。
// 反过来想，我们不倒着f(n),f(n-1),f(n-2)这么计算，而是f(0),f(1),f(2)…f(n)这么正向计算，岂不是更快么？

{
    function fibonacci(n){
        if (n === 1 || n === 2) {
            return 1;
        }
        const arr = [];
        arr[1]=1;
        arr[2]=1;
        for(let i = 3;i <= n; i++){
            arr[i] = arr[i-1] + arr[i-2];
         }
        return arr[n];
     }
     
}

/*
 数组求和递归版本
*/

{
    function sum(arr) {
        const total = function(arr, l) {
            if(l == arr.length) {
                return 0;
            }
            return arr[l] + total(arr, l + 1);
        }
        return total(arr, 0);
    }
    sum([1,2,3,4,5,6,9,10]);
}
