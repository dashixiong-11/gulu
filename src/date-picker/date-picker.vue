<template>
   <div class="gulu-date-picker">
      <g-popover position="bottom" ref="pop">
         <g-input v-model="formattedValue"></g-input>
         <template slot="content">
            <div class="gulu-date-picker-pop">
               <template v-if="type === 'day'">
                  <div class="gulu-date-picker-nav">
                  <span v-if=" mode === 'year' ||'day'"
                        class="gulu-date-picker-nav-navItem gulu-date-picker-nav-prevYear" @click="previousYear">
                     <g-icon name="doubleLeft"></g-icon>
                  </span>
                     <span v-if=" mode === 'day'"
                           class="gulu-date-picker-nav-navItem gulu-date-picker-nav-prevMonth" @click="previousMonth">
                     <g-icon name="left"></g-icon>
                  </span>
                     <div>
                        <span v-show="mode === 'day' || mode === 'month'" @click="clickYear(display.year)"
                              class="gulu-date-picker-nav-year"> {{display.year}}年</span>
                        <span v-show="mode === 'day'" @click="clickMonth" class="gulu-date-picker-nav-month">{{help.padLeft(display.month)}}月</span>
                        <span v-show="mode === 'year'" @click="clickYear(display.year)"
                              class="gulu-date-picker-nav-year"> {{tenYears[0]}}年 - {{tenYears[1]}}年</span>
                     </div>
                     <span v-if=" mode ===  'day'"
                           class="gulu-date-picker-nav-navItem gulu-date-picker-nav-nextMonth" @click="nextMonth">
                           <g-icon name="right"></g-icon>
                      </span>
                     <span v-if="mode === 'year' || 'day'"
                           class="gulu-date-picker-nav-navItem gulu-date-picker-nav-nextYear" @click="nextYear">
                     <g-icon name="doubleRight"></g-icon>
                  </span>
                  </div>
                  <div class="gulu-date-picker-panels">
                     <div v-show="mode === 'day'">
                        <div class="gulu-date-picker-weekdays">
                           <span class="gulu-date-picker-weekday" v-for="(i,index) in week" :key="index">{{i}}</span>
                        </div>
                        <div class="gulu-date-picker-row" v-for="(i,index) in help.range(0,6)" :key="index">
                     <span
                           @click="selectDay(getVisibleDay(i,j))"
                           :class="{
                        currentMonth:isCurrentMonth(getVisibleDay(i,j)),
                        selected:isSelectedDay(getVisibleDay(i,j)),
                        today:isToday(getVisibleDay(i,j))
                     }"
                           class="gulu-date-picker-cell" v-for="j in help.range(1,8)">
                        {{getVisibleDay(i,j) && getVisibleDay(i,j).getDate()}}
                     </span>
                        </div>
                        <div class="gulu-date-picker-actions" @click="redirect">
                           今天
                        </div>
                     </div>
                     <div v-show="mode === 'month'">
                        <div class="gulu-date-picker-month">
                           <div class="gulu-date-picker-month-row" v-for="(i,index) in help.range(0,3)" :key="index">
                           <span
                                 :class="{isThisMonth:isThisMonth(getVisibleMonth(i,j))}"
                                 @click="selectedMonth(getVisibleMonth(i,j))"
                                 class="gulu-date-picker-month-cell" v-for=" (j,index) in help.range(1,5)" :key="index">
                              {{month[getVisibleMonth(i,j)-1]}}
                           </span>
                           </div>
                        </div>
                     </div>
                     <div v-show="mode === 'year'">
                        <div class="gulu-date-picker-year">
                           <div class="gulu-date-picker-year-row" v-for="(i,index) in help.range(0,3)" :key="index">
                              <span
                                    @click="selectedYear(tenYears[getVisibleYear(i,j)])"
                                    :class="{isThisYear:isThisYear(tenYears[getVisibleYear(i,j)])}"
                                    class="gulu-date-picker-year-cell" v-for="(j,index) in help.range(0,4)">
                                 {{tenYears[getVisibleYear(i,j)]}}
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </template>
            </div>
         </template>
      </g-popover>

   </div>

</template>

<script>
   import GInput from '../input'
   import GPopover from '../popover'
   import GIcon from '../icon'
   import help from "./help"

   export default {
      name: "GuluDatePicker",
      components: {GInput, GPopover, GIcon},
      data() {
         let [year, month] = help.getYearMonthDay(this.value || new Date())
         return {
            help,
            week: ['日', '一', '二', '三', '四', '五', '六'],
            month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            display: {year, month},
            mode: 'day'
         }
      },
      props: {
         value: {
            type: Date
         },
         type: {
            type: String,
            default: 'day'
         }
      },
      computed: {
         formattedValue() {
            if (!this.value) {
               return ""
            }
            const [year, month, day] = help.getYearMonthDay(this.value)
            return `${year}-${this.help.padLeft(month)}-${this.help.padLeft(day)}`
         },
         visibleDays() {
            return help.visibleDay(this.display.year, this.display.month)
         },
         tenYears() {
            let array = []
            let stringArray = `${this.display.year}`.split('')
            for(let i=0; i<=9; i++){
               stringArray.splice(3,1,`${i}`)
               let copy = JSON.parse(JSON.stringify(stringArray))
               let x = copy.join('')
               array.push(x)
            }

            return array
         }
      },
      mounted() {
      },
      methods: {
         getVisibleDay(row, col) {
            return this.visibleDays[row * 7 + col - 1]
         },
         getVisibleMonth(row, col) {
            return row * 4 + col
         },
         getVisibleYear(row,col){
            return row * 4 + col
         },
         isCurrentMonth(date) {
            let [year, month] = date && help.getYearMonthDay(date)
            return this.display.year === year && this.display.month === month
         },
         selectDay(date) {
            console.log(date)
            if (this.isCurrentMonth(date)) {
               this.$emit('value', date)
            }
            this.$refs.pop.close()
         },
         isThisMonth(date) {
            let [y, m] = [new Date().getFullYear(), new Date().getMonth() + 1]
            let [y1, m1] = [this.display.year, date]
            return y === y1 && m === m1
         },
         isThisYear(date){
            let d = Number(date)
            return this.display.year === d
         },
         selectedYear(date){
            this.display.year = new Date(date, 1).getFullYear()
            this.mode = 'month'
         },
         selectedMonth(month) {
            this.display.month = month
            this.mode = 'day'
         },
         isToday(date) {
            let [year, month, day] = date && help.getYearMonthDay(date)
            return new Date().getFullYear() === year && new Date().getMonth() + 1 === month && new Date().getDate() === day
         },
         isSelectedDay(date) {
            if (!this.value) {
               return false
            }
            let [y, m, d] = help.getYearMonthDay(date)
            let [y2, m2, d2] = help.getYearMonthDay(this.value)
            return y === y2 && m === m2 && d === d2
         },
         previousYear() {
            const oldDate = new Date(this.display.year, this.display.month - 1)
            const newDate = help.addYear(oldDate, -1)
            const [year, month] = help.getYearMonthDay(newDate)
            this.display = {year, month}
         },
         previousMonth() {
            const oldDate = new Date(this.display.year, this.display.month - 1)
            const newDate = help.addMonth(oldDate, -1)
            const [year, month] = help.getYearMonthDay(newDate)
            this.display = {year, month}
         },
         nextYear() {
            const oldDate = new Date(this.display.year, this.display.month - 1)
            const newDate = help.addYear(oldDate, 1)
            const [year, month] = help.getYearMonthDay(newDate)
            this.display = {year, month}
         },
         nextMonth() {
            const oldDate = new Date(this.display.year, this.display.month - 1)
            const newDate = help.addMonth(oldDate, 1)
            const [year, month] = help.getYearMonthDay(newDate)
            this.display = {year, month}
         },
         redirect(){
            this.display.year = new Date().getFullYear()
            this.display.month = new Date().getMonth() + 1
            this.display.day = new Date().getDate()
            this.selectDay(new Date())
         },
         clickMonth() {
            this.mode = 'month'
         },
         clickYear() {
            this.mode = 'year'
         }
      }
   }

</script>

<style scoped lang="scss">
   @import "../../styles/var";

   .gulu-date-picker {
      &-pop {
         user-select: none;
         width: 350px;
      }

      &-month {
         &-row {
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 2em 0;
         }

         &-cell {
            margin: 0 1em;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 64px;
            height: 32px;

            &:hover {
               cursor: pointer;
               color: $blue;
            }

            &.isThisMonth {
               color: $blue;
               font-weight: bold;
            }
         }
      }
      &-year{
         &-row{
            display:flex;
            align-items: center;
         }
         &-cell{
            width: 25%;
            margin: 1em auto;
            padding: .5em 1em;
            cursor: pointer;
            &.isThisYear{
               color: $blue;
               font-weight: bold;
            }
            &:hover{
               color: $blue;
            }
         }
      }

      &-nav {
         display: flex;
         align-items: center;

         &-navItem {
            font-size: 14px;
            color: rgba(0, 0, 0, .25);
         }

         &-navItem:hover {
            color: black;
         }

         &-prevYear {
            margin-right: 1em;
         }

         &-nextYear {
            margin-left: 1em;
         }

         &-year {
            margin-right: 1em;
         }

         &-year:hover {
            color: $blue;
         }

         &-month:hover {
            color: $blue;
         }

         > div {
            margin: auto;
         }
      }

      &-panels {
      }

      &-actions {
         border-top: 1px solid $grey;
         padding-top: 8px;
         color: $blue;
         text-align: center;
      }

      &-weekdays {
         margin: 8px 0;
         display: flex;
         align-items: center;
         justify-content: space-between;

      }

      &-weekday {
         width: 32px;
         height: 32px;
         display: inline-flex;
         align-items: center;
         justify-content: center;
      }

      &-row {
         display: flex;
         align-items: center;
         justify-content: space-between;
         margin-bottom: 8px;
      }

      &-cell {
         cursor: no-drop;
         color: #ddd;
         display: inline-flex;
         align-items: center;
         justify-content: center;
         width: 32px;
         height: 32px;
         border-radius: 4px;

         &.today {
            border: 1px solid $blue;
         }

         &.currentMonth {
            color: black;
            cursor: pointer;

            &:not(.selected):hover {
               background: $grey;
            }
         }

         &.selected {
            background: $blue;
            color: white;
         }
      }
   }

</style>