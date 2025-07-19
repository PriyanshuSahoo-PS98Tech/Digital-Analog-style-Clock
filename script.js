// ==============================
// CLOCK UPDATE FUNCTION (1s interval)
// ==============================
setInterval(() => {
    // ====== Grabbing DOM Elements ======
    let hh = document.getElementById('hh');       // hour arc
    let mm = document.getElementById('mm');       // minute arc
    let ss = document.getElementById('ss');       // second arc
    let sec_dot = document.querySelector('.sec_dot');
    let min_dot = document.querySelector('.min_dot');
    let hr_dot = document.querySelector('.hr_dot');
    let hr = document.getElementById('hr');        // hour needle
    let mn = document.getElementById('mn');        // minute needle
    let sc = document.getElementById('sc');        // second needle

    // ====== Current Time ======
    let h = new Date().getHours() % 12;
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    // ====== Arc Fill Animations ======
    hh.style.strokeDashoffset = 510 - (510 * (h + m / 60)) / 12; // hour arc adjusted with minutes
    mm.style.strokeDashoffset = 630 - (630 * m) / 60;            // minute arc
    ss.style.strokeDashoffset = 760 - (760 * s) / 60;            // second arc

    // ====== Dot Rotations (glow circles) ======
    sec_dot.style.transform = `rotateZ(${s * 6}deg)`;             // 6 degrees per second
    min_dot.style.transform = `rotateZ(${m * 6}deg)`;             // 6 degrees per minute
    hr_dot.style.transform = `rotateZ(${h * 30 + m * 0.5}deg)`;   // 30 deg/hr + 0.5 deg/min

    // ====== Needle Rotations ======
    hr.style.transform = `rotateZ(${h * 30 + m * 0.5}deg)`;
    mn.style.transform = `rotateZ(${m * 6 + s * 0.1}deg)`;        // add 0.1 deg/sec for smoothness
    sc.style.transform = `rotateZ(${s * 6}deg)`;

}, 1000);


// =============== PREVIOUS VERSION ===============
// Kept for reference - did not calculate hour arc precisely

// This part of js code is only for the green dot movement not the green arc.
        /*setInterval(() => {
            let hh = document.getElementById('hh');
            let mm = document.getElementById('mm');
            let ss = document.getElementById('ss');
            let sec_dot = document.querySelector('.sec_dot');
            let min_dot = document.querySelector('.min_dot');
            let hr_dot = document.querySelector('.hr_dot');
            let hr = document.getElementById('hr');
            let mn = document.getElementById('mn');
            let sc = document.getElementById('sc');

            let h = new Date().getHours() % 12;
            let m = new Date().getMinutes();
            let s = new Date().getSeconds();

            hh.style.strokeDashoffset = 510 - (510 * h) / 12;   //This part was fixed.
            // 12 hrs clock
            mm.style.strokeDashoffset = 630 - (630 * m) / 60;
            // 60 minutes
            ss.style.strokeDashoffset = 760 - (760 * s) / 60;
            // 60 seconds

            sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
            // 360 / 60 seconds = 6
            min_dot.style.transform = `rotateZ(${m * 6}deg)`;
            // 360 / 60 minutes = 6
            hr_dot.style.transform = `rotateZ(${h * 30 + m * 0.5}deg)`;
            // 30 degrees per hour

            hr.style.transform = `rotateZ(${h * 30 + m * 0.5}deg)`;
            // Because 360 / 12 = 30deg per hour, and 0.5 deg per minute
            mn.style.transform = `rotateZ(${m * 6 + s * 0.1}deg)`;
            // 360 / 60 = 6deg per min, and 0.1 deg per second
            sc.style.transform = `rotateZ(${s * 6}deg)`;
        }, 1000);*/