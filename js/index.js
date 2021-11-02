class CountdownTimer {
  timerId = null;
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.days = document.querySelector(`${this.selector} [data-value="days"]`);
    this.hours = document.querySelector(
      `${this.selector} [data-value="hours"]`
    );
    this.mins = document.querySelector(`${this.selector} [data-value="mins"]`);
    this.secs = document.querySelector(`${this.selector} [data-value="secs"]`);
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
  getTimerValues(timeDiff) {
    const days = this.pad(Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(
      Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
    );
    const secs = this.pad(Math.floor((timeDiff % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
  updatetimer({ days, hours, mins, secs }) {
    this.days.textContent = `${days}`;
    this.hours.textContent = `${hours}`;
    this.mins.textContent = `${mins}`;
    this.secs.textContent = `${secs}`;
  }
  startTimer() {
    this.timerId = setInterval(() => {
      const currentDate = Date.now();
      const timeDiff = this.targetDate - currentDate;
      if (timeDiff < 0) return this.stopTimer(this.timerId);
      this.updatetimer(this.getTimerValues(timeDiff));
    }, 250);
  }
  stopTimer(id) {
    clearInterval(id);
    alert("HAPPY BIRTHDAY");
  }
}


const awersomeTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 24 2022 00:00:00"),
});
awersomeTimer.startTimer();
const awersomeTimer2 = new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("Aug 14 2022 00:00:00"),
});
awersomeTimer2.startTimer();
