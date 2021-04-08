function pad(value) {
    return String(value).padStart(2, '0');
}

class CountdownTimer {
    constructor({selector, targetDate}) {
        this.timerSelector = document.querySelector(`${selector}`);
        this.targetDate = targetDate;
    }
    createTimer() {
    
        
    const intervalId = setInterval(() => {
    const daysRef = this.timerSelector.querySelector('[data-value="days"]');
    const hoursRef = this.timerSelector.querySelector('[data-value="hours"]');
    const minutesRef = this.timerSelector.querySelector('[data-value="mins"]');
    const secsRef = this.timerSelector.querySelector('[data-value="secs"]');   


    const currentDate = new Date();
    let time = this.targetDate - currentDate;
            if (time < 0) {
                time = 0;
            
            clearInterval(intervalId)
                  
        }

    

    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    daysRef.textContent = `${days}`
    hoursRef.textContent = `${hours}`
    minutesRef.textContent = `${mins}`
    secsRef.textContent = `${secs}` 

        },1000)
    
}
}
    


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

const timer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Apr 14, 2021'),
});

timer.createTimer();
timer2.createTimer();
