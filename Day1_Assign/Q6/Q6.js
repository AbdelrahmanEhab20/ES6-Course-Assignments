// Script
var tips = [
    'Dream Big....',
    'Stay Curious....',
    'Surround Yourself With Great People...',
    'Use Failure to Motivate You to Succeed....',
    'Be Different....',
    'Read About Super-Successful People....',
    'Take Action Now And Change YourSelf......',
    'Take Responsibility for Your Life....',
    'Help Other People....',
    'Do What You Love,Do What You Love..........']

function* printTips(tips) {
    for (let element of tips) {
        yield element;
    }
}
let calltips = printTips(tips);
calltips.next().value;
function ClickmeTips() {
    ShowTip = setInterval(() => {

        document.getElementById("newtip").innerHTML = calltips.next().value;
        if (calltips.next().value == undefined) {
            Clear(ShowTip);
            document.getElementById("newtip").innerHTML = `<br><br><hr>Thanks For Visiting Our Site`;
        }
    }, 2000);

}

function Clear(x) {
    clearInterval(x);
}
