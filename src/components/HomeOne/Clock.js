import React from 'react';
const { useState, useEffect } = React;

const OctionCountdown = () => {

    const [countdownDate] = useState(new Date('12/25/2023').getTime());
    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const isMounted = React.useRef(true);

    useEffect(() => {
        setInterval(() => setNewTime(), 1000);
        if (isMounted.current) {
            return () => {
                isMounted.current = false;
            };
        }
    }, []);

    const setNewTime = () => {
        if (countdownDate) {
            const currentTime = new Date().getTime();

            const distanceToDate = countdownDate - currentTime;

            let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            let minutes = Math.floor(
                (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
            );
            let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

            const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            days = `${days}`;
            if (numbersToAddZeroTo.includes(hours)) {
                hours = `0${hours}`;
            } else if (numbersToAddZeroTo.includes(minutes)) {
                minutes = `0${minutes}`;
            } else if (numbersToAddZeroTo.includes(seconds)) {
                seconds = `0${seconds}`;
            } -

                setState({ days: days, hours: hours, minutes, seconds });
        }
    };


    return (
        <div className='countdown-wrapper'>
            <div className='time-section'>
                <div className='time'>{state.days || '0'}</div>
            </div>
            <div className='time-section'>
                <div className='time'>:</div>
            </div>
            <div className='time-section'>
                <div className='time'>{state.hours || '00'}</div>
            </div>
            <div className='time-section'>
                <div className='time'>:</div>
            </div>
            <div className='time-section'>
                <div className='time'>{state.minutes || '00'}</div>
            </div>
            <div className='time-section'>
                <div className='time'>:</div>
            </div>
            <div className='time-section'>
                <div className='time'>{state.seconds || '00'}</div>
            </div>
        </div>
    );
};

export default OctionCountdown;