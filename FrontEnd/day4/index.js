setInterval(() => {
    d = new Date();
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    milli = d.getMilliseconds();
    hr_rotation = hr / 12 * 360;
    min_rotation = min / 60 * 360;
    sec_rotation = ((sec + (milli / 1000)) / 60) * 360;
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1);