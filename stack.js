//Creates a node containing the data and a reference to the next item
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    pop() {
        if(this.top === null) {
            return;            
        }
        const oldTop = this.top;
        this.top = this.top.next; 
        return oldTop;                        
    }
    reset() {
        this.top = null;
    }

    push(data) {
        if (this.top === null) {
         this.top = new _Node(data, null);
            return this.top;
        }
        //(this.top != null so data-> old top, this.top here)
        let tempNode = this.top;
        this.top = new _Node(data, tempNode);
        return this.top;
    }

    display() {
        // for debugging aid;
        let output = 'Top of Stack:';
        let currentStack = this.top; 
        if(this.top===null) {
            // console.log("Empty Stack!");
            return;
        }
        while(currentStack !==null) {
            output += currentStack.data.toString() + ', ';//extra for readability
            currentStack = currentStack.next;
        }
        output = output.slice(0, output.length -2);
        output += ':Bottom of Stack.';
        console.log(output);
        return;
    }
    peek() {
        if(this.top === null) {
            // console.log("Empty Stack- no top!");
            return null;
        }
        console.log(`Top of Stack:${this.top.data.toString()}`);
        return this.top.data;
    }
    
   
}//end stack here
// class Queue(){}
// class _Q_Node(){}

function main(){
    function isPalindrome(s){
        //input: 'hannah' is a palindrome
        s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
        /*
        let temp = s;
        // hannah, hannnnnn s[0],while s.length >0 ->done
        let temp = temp.slice(1)
        as we push in we let input += the pushes
        done?
        let output = '';
        as we pop out let out += the pops
        done?
        is s === output?
        */
        //output: return true or false
        if(s.length === 0){
            //handles empty or invalid input:
            return false;
        }
        for(let temp=s; temp.length>0; temp=temp.slice(1)){// i-- -> i = i -1
            // take temp[0] and push that into the stack
            myStack.push(temp[0]);
        }
        //here we have a stack of the string
        let output ='';
        for(let temp=s; temp.length>0; temp=temp.slice(1)){
           output += myStack.pop().toString();
        }
        //myStack.display();
        if(s === output) {
            return true;
        }
        return false;
    }

    function parentheses(mathExpression) {
        /*  [012345678901234...n]// 
            '(1+2) + ((3+4)+ 19 ' ---> report location of open (before 3)
            loop through and make sure that each opening ( has a closing ) 
            1+(2 + 3  <---- report location of open (before 2)
            '(1+2) + 3+4) + (5 +6)' <-- report location after 4 ie the )
            ()()()
            (())
            (()  or )() or (())) or () () )
            keep track of open/closed parenthese <- location -> node data (stack)
            open/ closed parentheses are the nodes data --> location.   
            */
           for(i= 0; i < mathExpression.length; i++) {
               if(mathExpression[i] === '(' ){
                   let newObj = {
                       parentheses: mathExpression[i], 
                       location: i 
                   };
                   myStack.push(newObj);

               }
               if(mathExpression[i] === ')') {
                   let newobj = {
                       parentheses: mathExpression[i], 
                       location: i
                   }
                //    console.log(myStack.peek())
                    if(myStack.peek() === null) {
                        const resultString = `Extra ")" at ${i}`;
                        myStack.reset(); 
                        return resultString;
                    }

                    if(myStack.peek().parentheses.toString() === '(') {
                        myStack.pop();
                    }  
               }
            }

            if(myStack.peek() !== null ) {
                const resultString = `Extra "${myStack.top.data.parentheses}" at ${myStack.top.data.location}`;
                myStack.reset(); 
                return resultString;

            }
            else {
                return "All parentheses have a match!"
            }
    }

    function sort(stack) {
        /*
        takes in 2,6,3,9 and outputs --> 2,3,6,9
        Create new Stack
        pops values off initial Stack and pushes them onto new stack.
            -peeking the value in the new Stack to make sure it is > current value
                    * 6 > 3 or 6 < 9 or the stack is null 
                    * if null push value into new Stack 
                    * if current < value of new stack push onto new stack 
                    * if current > value of new stack pop peeked value of new stack, push it onto old stack
                    * peek next value of new stack, if current < value of new stack --> push current onto new stack
                    * otherwise, repeat steps above. 
                    
            -if oldStack === null --> return new Stack 
        */
       
      
        if(!stack.top) {
            return "The Stack is Empty!";
        }
        let newStack = new Stack(); 

        while(stack.top) {
            console.log('loop started');
           let currentValue = stack.peek();
            if(!newStack.top) { // <--- newStack is empty
                console.log('newstack is empty');
                newStack.push(stack.pop()); // <---- newStack =6
            }

            else if(currentValue < newStack.peek()) { // <---- 6 < 9 newStack = 9
                console.log('current < newstack top');
                newStack.push(stack.pop()); // <---- newStack = 6,9
            }
            else if(currentValue > newStack.peek()) { // <---- 6 > 3 
                console.log('current > newstack top');
                stack.push(newStack.pop()); // <---- newStack = ?
                    if(!newStack.top) {
                        console.log('1 newstack is now empty');
                        newStack.push(stack.pop()); // <--- 6 is newStack
                    }
                    else if(currentValue < newStack.peek()) { // <---current value = 6, newStack = 9
                        console.log('1 stack nested < new');
                        newStack.push(stack.pop());
                    }
                    else if(currentValue > newStack.peek()){
                        console.log('1 stack nested > new');
                        stack.push(newStack.pop());
                    }
            }
            console.log('end, relooping here');
        }

        console.log('loop ended');
        
        return newStack;
}
    
    let myStack = new Stack();
    // myStack.peek();
    // myStack.push('Kirk');
    // myStack.push('Spock');
    // myStack.push('McCoy');
    // myStack.push('Scotty');
    myStack.display();
    //let test = myStack.pop();
    //console.log(test);
    // myStack.display();
    // console.log(myStack.peek());
    // console.log(isPalindrome("dad"));
    // console.log(isPalindrome("A man, a plan, a canal: Panama"));
    // console.log(isPalindrome("1001"));
    // console.log(isPalindrome("Tauhida"));
    // console.log(parentheses('()('));
    // console.log(parentheses('(1+2)(3+4)'));
    // console.log(parentheses('(4+3(8+9)'));
    // console.log(parentheses('()()('));
    // console.log(parentheses('(()())'));
    // console.log(parentheses('3+2)+4(1+2)+3)'));
    // myStack.push(5);
    // myStack.push(9);
    // myStack.push(1);
    myStack.push(4);
    myStack.push(9);
    myStack.display();
    const newNew = sort(myStack);
    newNew.display();
    console.log("done");
}
main();

/*fsfs
*jdsfsfs
ssfsfsdsad
*/