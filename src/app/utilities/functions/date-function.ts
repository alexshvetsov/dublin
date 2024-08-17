import { SelectOption } from '../models/select-option';

export function getLastTuesday(): Date {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  
    // Calculate the number of days to subtract to get to the previous Tuesday
    const daysToSubtract = (dayOfWeek === 0 ? 6 : dayOfWeek - 2);
  
    const lastTuesday = new Date(today);
    lastTuesday.setDate(today.getDate() - daysToSubtract);
    lastTuesday.setHours(0, 0, 0, 0); // Set time to 00:00:00
  
    return lastTuesday;
  }
  
  
export function getLastFiveTuesdays(): SelectOption[] {
  const tuesdays: SelectOption[] = [];
  let currentTuesday = getLastTuesday();

  for (let i = 0; i < 5; i++) {
    tuesdays.push({
      value: new Date(currentTuesday),
      label: new Date(currentTuesday),
    });
    currentTuesday.setDate(currentTuesday.getDate() - 7);
  }

  return tuesdays;
}
