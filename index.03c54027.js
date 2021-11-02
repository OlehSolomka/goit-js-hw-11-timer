class CountdownTimer{timerId=null;constructor({selector:t,targetDate:e}){this.selector=t,this.targetDate=e,this.days=document.querySelector(`${this.selector} [data-value="days"]`),this.hours=document.querySelector(`${this.selector} [data-value="hours"]`),this.mins=document.querySelector(`${this.selector} [data-value="mins"]`),this.secs=document.querySelector(`${this.selector} [data-value="secs"]`)}pad(t){return String(t).padStart(2,"0")}getTimerValues(t){return{days:this.pad(Math.floor(t/864e5)),hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}updatetimer({days:t,hours:e,mins:s,secs:r}){this.days.textContent=`${t}`,this.hours.textContent=`${e}`,this.mins.textContent=`${s}`,this.secs.textContent=`${r}`}startTimer(){this.timerId=setInterval((()=>{const t=Date.now(),e=this.targetDate-t;if(e<0)return this.stopTimer(this.timerId);this.updatetimer(this.getTimerValues(e))}),250)}stopTimer(t){clearInterval(t),alert("HAPPY BIRTHDAY")}}const awersomeTimer=new CountdownTimer({selector:"#timer-1",targetDate:new Date("Jul 24 2022 00:00:00")});awersomeTimer.startTimer();const awersomeTimer2=new CountdownTimer({selector:"#timer-2",targetDate:new Date("Aug 14 2022 00:00:00")});awersomeTimer2.startTimer();
//# sourceMappingURL=index.03c54027.js.map
