import { addDays, compareAsc, format, startOfDay,addMonths,addYears } from 'date-fns'


const date = new Date();
console.log(date)
const tomorrow= addDays(date,1);
console.log(tomorrow)
console.log(startOfDay(date))
console.log(addMonths(date,1))
console.log(addYears(date,1))
// format(new Date(2014, 1, 11), 'yyyy-MM-dd')
// //=> '2014-02-11'

// const dates = [
//   new Date(1995, 6, 2),
//   new Date(1987, 1, 11),
//   new Date(1989, 6, 10),
// ]
// console.log(dates.sort(compareAsc));
