const deliverydays=(days)=>{
    for (let i = 0; i < days.length; i++) {
        switch (days[i]) {
            case "Monday":
                console.log("Deliver creaning schedule");
                break;
            case "Tuesday":
                console.log("Deliver  research schedule");
                break;
            case "Friday":
                console.log("Deliver learning schedule (Read books and learn UX/UI design, PM and Python)");
                break;
            default:
                console.log("delivery not found");
        }
    }
    }
    deliverydays(["Monday","Sunday","Tuesday","Friday"]);
    
    
    const bookStatus=(books)=>{
        for (let i = 0; i < books.length; i++) {
            switch (books[i]) {
                case "Available":
                    console.log("ready to lend");
                break;
            default:
                console.log("checked");
            }   
        }
    }
    bookStatus(["Available","not available"]);
    
    
    const getCustomerAges = (ages) => {
        for (let i = 0; i < ages.length; i++) {
            if (ages[i] >= 18) {
                console.log(`the customer is an adult`);
            }
            else if(ages[i]<18 && ages[i]>10){
                  console.log(`the customer is minor`);
        }
            else{
                console.log(`Your not enough to be our customer`);
            }
        } 
    }
    getCustomerAges([3,10,30,18]);
    
    
    let i=5;
    while(i>0){
        i--
        console.log(i)
    }


    
    
    let feedback=["amaizing","pretty good","you deserve excellence"];
    const printFeedBack=(feedback)=>{
       let i=0;
        do{
            console.log(`You did ${feedback} job`);
            feedback++;
        }
        while (i<=feedback.length);
    }
    printFeedBack(feedback);


    
    const loginFeedback=(loginfeedbacks)=>{
        loginfeedbacks.forEach((loginfeedback)=>{
            switch(loginfeedback){
                case 'logged in':
                    console.log("Welcome back");
                    break;
                    case 'not login':
                        console.log("please log in");
                        break;
                        default:
                            console.log("login again");
                        break;  
            }
        })
    }
    loginFeedback(["not login","please log in","logged in"]);
    
    const priorityOfTickets=(tickets)=>{
        tickets.forEach((ticket)=>{
            switch(ticket){
                case 'high':
                    console.log("your priority is 1");
                    break;
                case 'medium':
                        console.log("your priority is 2");
                    break;
                default:
                            console.log("your priority is 3");
                    break;  
            }
        })
    }
    priorityOfTickets(["low","high","medium"])
    
    
    const CountDown=(quiz)=>{
    let c=10;
    while (c>=1){
        c--;
        console.log(`this is the ${c}`);
    }
    }
    CountDown(10);