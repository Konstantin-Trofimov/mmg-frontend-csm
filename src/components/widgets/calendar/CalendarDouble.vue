<template>
    <div class="calendar-double" :style="padding">
        <div class="calendar-double__month">
            <div class="calendar-double__value calendar-double__value_month">
                {{day}}.{{month}}.{{year}}
            </div>
            <div class="calendar-double__progress-bar">
                <svg 
                    width="5.208vw"
                    height="0.625vw"
                    viewBox="0 0 100 12" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 0H0.5L11.5 12H15.5L4.5 0Z"    fill="#FB9B2B" :fill-opacity="monthProgressBar[0]"/>
                    <path d="M10.5 0H6.5L17.5 12H21.5L10.5 0Z"  fill="#FB9B2B" :fill-opacity="monthProgressBar[1]"/>
                    <path d="M16.5 0H12.5L23.5 12H27.5L16.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[2]"/>
                    <path d="M22.5 0H18.5L29.5 12H33.5L22.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[3]"/>
                    <path d="M28.5 0H24.5L35.5 12H39.5L28.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[4]"/>
                    <path d="M34.5 0H30.5L41.5 12H45.5L34.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[5]"/>
                    <path d="M40.5 0H36.5L47.5 12H51.5L40.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[6]"/>
                    <path d="M46.5 0H42.5L53.5 12H57.5L46.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[7]"/>
                    <path d="M52.5 0H48.5L59.5 12H63.5L52.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[8]"/>
                    <path d="M58.5 0H54.5L65.5 12H69.5L58.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[9]"/>
                    <path d="M64.5 0H60.5L71.5 12H75.5L64.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[10]"/>
                    <path d="M70.5 0H66.5L77.5 12H81.5L70.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[11]"/>
                    <path d="M76.5 0H72.5L83.5 12H87.5L76.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[12]"/>
                    <path d="M82.5 0H78.5L89.5 12H93.5L82.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[13]"/>
                    <path d="M88.5 0H84.5L95.5 12H99.5L88.5 0Z" fill="#FB9B2B" :fill-opacity="monthProgressBar[14]"/>
                </svg>
            </div>
        </div>
        <div class="calendar-double__year">
            <div class="calendar-double__value calendar-double__value_year" 
                :style="lineHeightRight">
                {{yearRatio}}% год
            </div>
            <div class="calendar-double__progress-bar">
                <svg 
                    width="5.208vw"
                    height="0.625vw"
                    viewBox="0 0 99 12" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 0H15.5L4.5 12H0.5L11.5 0Z"   fill="#FB9B2B" :fill-opacity="yearProgressBar[0]"/>
                    <path d="M17.5 0H21.5L10.5 12H6.5L17.5 0Z"  fill="#FB9B2B" :fill-opacity="yearProgressBar[1]"/>
                    <path d="M23.5 0H27.5L16.5 12H12.5L23.5 0Z" fill="#FB9B2B" :fill-opacity="yearProgressBar[2]"/>
                    <path d="M29.5 0H33.5L22.5 12H18.5L29.5 0Z" fill="#FB9B2B" :fill-opacity="yearProgressBar[3]"/>
                    <path d="M35.5 0H39.5L28.5 12H24.5L35.5 0Z" fill="#FB9B2B" :fill-opacity="yearProgressBar[4]"/>
                    <path d="M41.5 0H45.5L34.5 12H30.5L41.5 0Z" fill="#FB9B2B" :fill-opacity="yearProgressBar[5]"/>
                    <path d="M47.5 0H51.5L40.5 12H36.5L47.5 0Z" fill="#FB9B2B" :fill-opacity="yearProgressBar[6]"/>
                    <path d="M53.5 0H57.5L46.5 12H42.5L53.5 0Z" fill="#FB9B2B" :fill-opacity="yearProgressBar[7]"/>
                    <path d="M59.5 0H63.5L52.5 12H48.5L59.5 0Z" fill="#FB9B2B" :fill-opacity="yearProgressBar[8]"/>
                    <path d="M65.5 0H69.5L58.5 12H54.5L65.5 0Z" fill="#FB9B2B" :fill-opacity="yearProgressBar[9]"/>
                    <path d="M71.5 0H75.5L64.5 12H60.5L71.5 0Z" fill="#FB9B2B" :fill-opacity="yearProgressBar[10]"/>
                    <path d="M77.5 0H81.5L70.5 12H66.5L77.5 0Z" fill="#FB9B2B" :fill-opacity="yearProgressBar[11]"/>
                    <path d="M83.5 0H87.5L76.5 12H72.5L83.5 0Z" fill="#FB9B2B" :fill-opacity="yearProgressBar[12]"/>
                    <path d="M89.5 0H93.5L82.5 12H78.5L89.5 0Z" fill="#FB9B2B" :fill-opacity="yearProgressBar[13]"/>
                    <path d="M95.5 0H99.5L88.5 12H84.5L95.5 0Z" fill="#FB9B2B" :fill-opacity="yearProgressBar[14]"/> 
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
    import calendar from '@/mixins/calendar';

    export default {
        name: 'CalendarDouble',
        mixins: [calendar],
        props: {
            padding: {
                type: Object,
                 default: function () {
                    return  {padding: '0 0.76vw'}
                } 
            },
            lineHeightRight:  {
                type: Object,
                 default: function () {
                    return  {lineHeight:  '0.872vw'}
                } 
            }
        },
        methods: {
            setYearProgressBar() {
                const progressLength = Math.round((100 - this.yearRatio) * 0.15);
            
                this.setProgressBar(this.yearProgressBar, progressLength, this.minOpacity)
            }
        },
        computed: {
            yearRatio() {
                const dayFirst = new Date(this.date.getFullYear(), 0, 0);
                const diff = this.date - dayFirst;
                const day = 1000 * 60 * 60 * 24;
                const dayNum = Math.floor(diff / day);
                const ratio =  Math.floor((dayNum / 365) * 100); 

                return ratio
            } 
        },
        created() {
            this.setProgressBar(this.monthProgressBar, 15, this.minOpacity);
            this.setProgressBar(this.yearProgressBar, 15, this.maxOpacity);
            this.setMonthProgressBar();
            this.setYearProgressBar();
        }
    }
</script>

<style lang="scss">

    .calendar-double {
        position: absolute;
        bottom: 0.4vw;
        width: 100%;
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
            color: #fb9b2b;
            &_month {
                line-height: 1.042vw;
            }
            &_year {
                text-align: right;
                padding-right: 0.53vw;
                line-height: 0.872vw;   
            }
        }
    }
</style>