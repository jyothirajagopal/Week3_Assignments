function conditionalPromise() {
    return new Promise((resolve, reject) => {
         const randomNumber = Math.random();
         console.log(randomNumber)
           if (randomNumber > 0.5) {
                       resolve("Resolved successfully");
        } else {
           
            reject("Rejected");
        }
    });
}

conditionalPromise()
    .then((message) => {
       
        console.log("Resolved:", message);
    })
    .catch((message) => {
        
        console.log("Rejected:", message);
    });