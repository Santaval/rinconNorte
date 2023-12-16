const timer = (dateStart, plusMinutes) => {
  const targetDate = new Date(dateStart).getTime() + plusMinutes * 60 * 1000;

  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    return {
        days,
        hours,
        minutes,
        seconds
    }
};

export default timer;
