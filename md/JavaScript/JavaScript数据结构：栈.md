#### 什么是栈
栈（stack）又名堆栈，它是一种运算受限的线性表。限定仅在表尾进行插入和删除操作的线性表。这一端被称为栈顶，相对地，把另一端称为栈底。向一个栈插入新元素又称作进栈、入栈或压栈，它是把新元素放到栈顶元素的上面，使之成为新的栈顶元素；从一个栈删除元素又称作出栈或退栈，它是把栈顶元素删除掉，使其相邻的元素成为新的栈顶元素。简单地说，后进先出（last in first out ,LIFO）。

#### JavaScript实现（基于数组）
````js
//基于数组实现
    function Stack(){
        this.items = []
    }

    //push:添加一个元素到栈顶
    Stack.prototype.push=function(element){
        this.items.push(element)
    }

    //pop:移除栈顶的元素，同时返回被移除的元素
    Stack.prototype.pop=function(){
        return this.items.pop()
    }

    //peek:返回栈顶的元素，不对栈做任何修改
    Stack.prototype.peek=function(){
        return this.items[this.items.length-1]
    }

    //isEmpty:判断栈是否为空
    Stack.prototype.isEmpty=function(){
        return this.items.length===0
    }

    //size:返回栈里元素的个数
    Stack.prototype.size=function(){
        return this.items.length
    }

    //toString:将栈结构以字符串形式返回
    Stack.prototype.toString=function(){
        return this.items.join(' ')
    }

    let stack = new Stack()
    stack.push(1)
    stack.push(2)
    console.log(stack.peek(),stack.isEmpty(),stack.toString())
````
####应用：十进制转二进制
````
    function dec2bin(number){
        let s = new Stack()
        while (number / 2!=0){
            s.push(number % 2)
            number = Math.floor(number/2)
        }
        let str = ''
        while(!s.isEmpty()){
            str+=s.pop()
        }
        return str
    }
    console.log(dec2bin(10))
````
