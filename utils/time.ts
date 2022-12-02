const parseFutureMilliseconds = (ms: number) => {
    let seconds = ms / 1000;
    const hours = seconds / 3600;
    seconds = seconds % 3600;
    const minutes = seconds / 60 ;
    seconds = seconds % 60;
    return hours.toFixed(0) + ":" + minutes.toFixed(0) + ":" + seconds.toFixed(0);
}

export {parseFutureMilliseconds}