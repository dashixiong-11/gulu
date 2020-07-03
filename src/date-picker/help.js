const help = {
   visibleDay(year, month) {
      let firstDayOfMonth = new Date(year, month - 1, 1)
      let firstDayOfMonthWeek = firstDayOfMonth.getDay()
      let firstOfVisibleDay = firstDayOfMonth - firstDayOfMonthWeek * 3600 * 24 * 1000
      let array = []
      for (let i = 0; i < 42; i++) {
         array.push(new Date(firstOfVisibleDay + i * 3600 * 24 * 1000));
      }
      return array;
   },
   addMonth(date, n) {
      const [_1, month, _2] = getYearMonthDay(date);
      const newMonth = month + n -1;
      const copy = new Date(date);
      copy.setMonth(newMonth);
      return copy;
   },
   addYear(date, n) {
      const [year] = getYearMonthDay(date);
      const newYear = year + n;
      const copy = new Date(date);
      copy.setFullYear(newYear);
      return copy;
   },
   padLeft(number){
      if(typeof number !== 'number'){
         throw new Error('wrong param')
      }
      return (number >= 10 ? '' : '0') + number
   },
   range(begin, end) {
      let array = [];
      for (let i = begin; i < end; i++) {
         array.push(i);
      }
      return array;
   },
   getYearMonthDay
}

function getYearMonthDay(date){
   let year = date.getFullYear()
   let month = date.getMonth()+1
   let day = date.getDate()
   return [ year,month,day ]
}

export default help