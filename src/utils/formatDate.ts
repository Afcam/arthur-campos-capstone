export const formatDate = (timestamp: string) =>
  new Date(timestamp).toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });

export function formatTimestamp(timestamp: string) {
  const currentTime = new Date();
  const previousTime = new Date(timestamp);

  const timeDiff = currentTime.getTime() - previousTime.getTime();
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  // Just prevent weird behavior with
  // if (timeDiff < 0) {
  //   return 'now';
  // }

  if (years >= 1) {
    return years === 1 ? '1 year ago' : `${years} years ago`;
  }

  if (months >= 1) {
    return months === 1 ? '1 month ago' : `${months} months ago`;
  }

  if (days >= 1) {
    return days === 1 ? '1 day ago' : `${days} days ago`;
  }

  if (hours >= 1) {
    return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
  }

  if (minutes >= 1) {
    return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
  }

  return seconds <= 1 ? 'now' : `${seconds} seconds ago`;
}
