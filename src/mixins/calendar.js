export default {
    data() {
        return {
            date: new Date(),
            currentMonth: new Date().getMonth(),
            currentDay: new Date().getDate(),
            year: new Date().getFullYear(),
            monthProgressBar: [],
            yearProgressBar: [],
            minOpacity: 0.2,
            maxOpacity: 1
        }
    },
    methods: {
        setProgressBar(progressBar, length, val) {
            for (let i = 0; i < length; i++) {
                progressBar[i] = val;
            }
        },

        setMonthProgressBar() {
            const dayLast = new Date(this.year, this.currentMonth + 1, 0).getDate();
            const ratio = 15 / dayLast;
            const progressLength = Math.round(this.currentDay * ratio); 

            this.setProgressBar(this.monthProgressBar, progressLength, this.maxOpacity);
        },

        addZeroBeforeValue: val => val < 10 ? '0' + val : val
    },
    computed: {
        month() {
            return this.addZeroBeforeValue(this.currentMonth + 1);
        },

        day() {
            return this.addZeroBeforeValue(this.currentDay);
        }
    }
}