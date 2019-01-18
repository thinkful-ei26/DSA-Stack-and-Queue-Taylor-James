//Creates a node containing the data and a reference to the next item
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor(){
        this.top = null;
    }
    pop() {
        if(this.top === null) {
            return;            
        }
        const oldTop = this.top;
        this.top = this.top.next; 
        return oldTop.data;                        
    }

    push(data){
        if (this.top === null){
         this.top = new _Node(data, null);
            return this.top;
        }
        //(this.top != null so data-> old top, this.top here)
        this.top = new _Node(data, this.top);
    }

    display(){
        // for debugging aid;
        let output = 'Top of Stack:';
        let currentStack = this.top; 
        if(this.top===null){
            console.log("Empty Stack!");
            return;
        }
    while(currentStack !==null){
        output += currentStack.data.toString() + ', ';//extra for readability
        currentStack = currentStack.next;
    }
    output = output.slice(0, output.length -2);
    output += ':Bottom of Stack.';
    console.log(output);
    return;
    }
    peek(){
        if(this.top === null){
            console.log("Empty Stack- no top!");
            return;
        }
        console.log(`Top of Stack:${this.top.data.toString()}`);
        return;
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
            keep track of open/closed parenthese <- location -> node data (stack)
            open/ closed parentheses are the nodes data --> location.   
            
        */
    }
    function sort(){}
    
    let myStack = new Stack();
    // myStack.peek();
    // myStack.push('Kirk');
    // myStack.push('Spock');
    // myStack.push('McCoy');
    // myStack.push('Scotty');
    // myStack.display();
    //let test = myStack.pop();
    //console.log(test);
    // myStack.display();
    // myStack.peek();
    // console.log(isPalindrome("dad"));
    // console.log(isPalindrome("A man, a plan, a canal: Panama"));
    // console.log(isPalindrome("1001"));
    // console.log(isPalindrome("Tauhida"));
    console.log("done");
}
main();

/*fsfs
*jdsfsfs
ssfsfsdsad
*/