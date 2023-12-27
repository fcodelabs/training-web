
export function calculateMinutesDifference(startTime: Date, endTime: Date): number {

    const timeDifference = endTime.getTime() - startTime.getTime();
    return Math.floor(timeDifference / (60 * 1000));
    
  }