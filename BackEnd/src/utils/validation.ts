export const validateBooking = (data: any) => {
  const errors: string[] = [];

  if (!data.fullName || data.fullName.trim() === '') errors.push('Full name is required');
  if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) errors.push('Valid email is required');
  if (!data.phone || !/^\+?\d{7,15}$/.test(data.phone)) errors.push('Valid phone is required');
  if (!data.checkIn || !data.checkOut) errors.push('Check-in and Check-out dates are required');
  if (new Date(data.checkIn) > new Date(data.checkOut)) errors.push('Check-in must be before Check-out');
  if (!data.guests || data.guests < 1) errors.push('Guests number must be at least 1');
  if (!data.roomType) errors.push('Room type is required');

  return errors;
};
