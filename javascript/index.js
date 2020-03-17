	//call Stack is LIFO(Last in First out)
	//the event loop continuously check if any function need to execute.

	function xyz(){
		let b=10+9;
		console.log(xyz);
		console.log(b);
	}

	function abc(){
		let e=10+3;
		console.log(abc);
		console.log(e);
		return xyz();
	}

	function main(){
		let y=17+10;
		console.log(main);
		console.log(y);
		return abc();
	}

	main();

	document.getElementById('demo').innerHTML="The Event loop every iteration checking call stack,if there something in the call stack  and execute it"

	//this is normally how the stack work
	//in event loop the will working tollay differnt 
	//if any Web Apis function in call stack that function 
	//moved to Browser Api ..
	//after the call stack is finished all function the brpwser Api function moved into 
	//Queuing function execution

	//how defer a function untill the stack is clear
	//adding message in queue
	//in browser ,message are added anytime an event occue and there is evntlistener attached to it


	function name(){
		setTimeout(function(){
			console.log("afer function");
			alert("that added message is pushed in stack")
		},5000);
		alert("the message added in queue");
	}
	name();


	//when setTimeout() is called the browser is start the timer.
	//once the timer expires the callback function put in Message Queue

		console.log("start the test case");

		setTimeout(cd,3000);//here the setTimeout passed to browser Api first after the 3seconds

		function cd(){//the callb ack function pushed into queue once check the stack is empty the function will execute
			console.log("test case1 is pushed in queue");
		}
	//once the timer zero mean after delay which message will pushed in  queue
	//then that message cwill pushed to stack and executing ..

	//in loop gives priority to the call stack,if stack is empty pickup the queue message//


	console.log("start the case");

	setTimeout(function(){
		console.log("The first setTimeout() function")
	});//has default value is Zero;

	console.log("under process ");

	setTimeout(function(){
		console.log("The second setTimeout() function");
	},10000);
	console.log("Finished the case");


	//the start test case will be execute after the first setTimeout() function
