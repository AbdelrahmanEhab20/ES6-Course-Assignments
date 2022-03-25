// SCRIPT

let Mypromise = new Promise(function (resolve, reject) {
    if (true) {
        resolve(`<b style="font-size: 30px;
        font-weight: bold;"> <br><br> WELCOMEE ABDOOO`);
    }
    else {
        //  setTimeout(() => {
        ///     reject("NOT WELCOME");
        // }, 4000);
    }
});


//Resolve And Reject CallBack Func
Mypromise.then(res => {
    setTimeout(() => {
        document.write(res);
    }, 3000);
}).then(display => {
    setTimeout(() => {
        document.write(`<br><br><img src="img/smiley.png">`)
    }, 6000);
}).then(Thank => {
    setTimeout(() => {
        document.write(`<b style="font-size: 30px;
        font-weight: bold;
        "><br><br>Thanks For Open Our Site`)
    }, 9000);

}).then(Redirect => {
    setTimeout(() => {
        document.write(`<b style="font-size: 30px;
        font-weight: bold;
        "><br><br>Few Seconds And You Will Be Redirected To another Page`)
    }, 12000);
    setTimeout(() => {
        window.open("Page2.html", "_blank", "width=400,height=400");
    }, 15000);
}).catch(err => {
    console.log("Rejected Is RUUUN");
    console.log(err);
});
