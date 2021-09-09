<template>
    <div class="calendar-single">
        <div class="calendar-single__month">
            <div class="calendar-single__value">
                {{day}}.{{month}}.{{year}}
            </div>
            <div class="calendar-single__month-progress-bar">
                <svg 
                    width="5.208vw"
                    height="0.625vw"
                    viewBox="0 0 99 12" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 0H15.5L4.5 12H0.5L11.5 0Z"   fill="#FB9B2B" :fill-opacity="monthProgressBar[14]"/>
                    <path d="M17.5 0H21.5L10.5 12H6.5L17.5 0Z"  fill="#FB9B2B" :fill-opacity="monthProgressBar[13]"/>
                    <path d="M23.5 0H27.5L16.5 12H12.5L23.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[12]"/>
                    <path d="M29.5 0H33.5L22.5 12H18.5L29.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[11]"/>
                    <path d="M35.5 0H39.5L28.5 12H24.5L35.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[10]"/>
                    <path d="M41.5 0H45.5L34.5 12H30.5L41.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[9]"/>
                    <path d="M47.5 0H51.5L40.5 12H36.5L47.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[8]"/>
                    <path d="M53.5 0H57.5L46.5 12H42.5L53.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[7]"/>
                    <path d="M59.5 0H63.5L52.5 12H48.5L59.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[6]"/>
                    <path d="M65.5 0H69.5L58.5 12H54.5L65.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[5]"/>
                    <path d="M71.5 0H75.5L64.5 12H60.5L71.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[4]"/>
                    <path d="M77.5 0H81.5L70.5 12H66.5L77.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[3]"/>
                    <path d="M83.5 0H87.5L76.5 12H72.5L83.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[2]"/>
                    <path d="M89.5 0H93.5L82.5 12H78.5L89.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[1]"/>
                    <path d="M95.5 0H99.5L88.5 12H84.5L95.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[0]"/> 
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
    import calendar from '@/mixins/calendar';

    export default {
        name: 'CalendarSingle',
        mixins: [calendar],
        created() {
            this.setProgressBar(this.monthProgressBar, 15, this.minOpacity);
            this.setMonthProgressBar();
        }
    }
</script>

<style lang="scss">

    .calendar-single {
        position: absolute;
        bottom: 0.4vw;
        right: 0.8vw;
        display: flex;
        justify-content: space-between;
        z-index: 2;
        &__progress-bar {
            width: 5.208vw;
            height: 0.625vw;
        }
        &__value {
            font-weight: 700;
            font-size: 0.521vw;
            text-align: right;
            color: #fb9b2b;
            line-height: 1.042vw;
            padding-right: 0.5vw;
        }
    }
</style>