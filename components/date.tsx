import { FC } from 'react';
import { parseISO, format } from 'date-fns';

export const Date : FC<{dateString: string}> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'do LLLL yyyy')}</time>
}

export default Date;
