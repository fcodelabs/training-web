const CalculateTimeElapsed = (submitTime: Date | null) => {
    if (!submitTime) return '';

    const currentTime = new Date();
    const elapsedMilliseconds = currentTime.getTime() - submitTime.getTime();
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);

    // Calculate minutes and remaining seconds
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;

    // Construct the time elapsed string
    let timeElapsedString = '';

    if (minutes > 0) {
        timeElapsedString += `${minutes} ${minutes === 1 ? 'min' : 'mins'}`;
    } else {
        timeElapsedString += '0 mins';
    }

    return timeElapsedString.trim();
};

export default CalculateTimeElapsed;