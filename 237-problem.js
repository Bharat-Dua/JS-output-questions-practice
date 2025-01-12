// what would happen in the browser
let num = 0;

setInterval(() => {
  console.log(num++);
}, 100);

//* this code will keep calling and printing the valueof num increase by 1 but if we change the tab window of browser the JS engine will suspend the time if we come back to that tab then it again starts to run.  settimeout,setinterval

/* for knowledge purpose:- 
Your understanding is partially correct, but there’s more to it, so let me clarify in detail:

### Behavior of `setInterval` in the Browser

let num = 0;

setInterval(() => {
  console.log(num++);
}, 100);
```
1. **What Happens in Normal Conditions:**
   - The `setInterval` function schedules a task to run every 100 milliseconds (0.1 seconds).
   - Every 100 milliseconds, the `console.log(num++)` will execute, printing the value of `num` and incrementing it by 1.

2. **What Happens When You Switch Tabs (Tab Inactivity):**
   - In modern browsers, when the user **switches tabs or minimizes the browser**, the JavaScript engine running the `setInterval` may **pause or throttle the interval execution** to save resources.
   - The browser does this to optimize performance and battery life, especially on devices like laptops or mobile phones.

3. **When You Return to the Tab:**
   - When you return to the tab, the `setInterval` resumes, but it doesn’t compensate for the time elapsed during the tab's inactivity. It continues execution from where it left off.
   - As a result, **the interval remains consistent**, and no time is "made up" for the time the tab was inactive.

---

### Why Does This Happen?
Modern browsers implement this behavior as part of their optimization mechanisms:
- **Timers Throttling**: When the tab is inactive, `setInterval` is throttled or paused. In some cases, the timer might run at **reduced intervals (like once per second)**.
- **Battery and CPU Optimization**: Running unnecessary scripts in inactive tabs wastes CPU and battery life, especially on resource-constrained devices.

---


1. **Active Tab**:
   - If you stay on the tab, the output will look like:
     ```
     0
     1
     2
     3
     ...
     ```
   - The number increases by 1 every 100 milliseconds.

2. **Switching Tabs**:
   - If you switch tabs for, say, 10 seconds, and then come back:
     - The number will **not jump ahead** (e.g., from 10 to 110).
     - Instead, it will continue incrementing from where it paused when you return.

---

### Key Takeaways:
- **`setTimeout` and `setInterval` Throttling**: When the browser tab is inactive, the timers (`setTimeout`, `setInterval`) are throttled or paused to save resources.
- **No "Catch-Up" Behavior**: The timers don’t account for the time missed during inactivity.
- **Best Practice for Critical Time-Based Tasks**:
  - If you need precise time tracking (e.g., for animations or countdowns), you should use `Date.now()` or `performance.now()` to calculate elapsed time instead of relying on `setInterval`.

---

### Updated Code for Real-Time Tracking:
To ensure that missed time is accounted for:

let num = 0;
let startTime = Date.now();

setInterval(() => {
  let elapsedTime = Math.floor((Date.now() - startTime) / 100); // Calculate how many 100ms have passed
  console.log(elapsedTime); // Prints accurate count regardless of tab switching
}, 100);
```

This approach compensates for any missed intervals and ensures the output reflects the actual time elapsed.
*/
