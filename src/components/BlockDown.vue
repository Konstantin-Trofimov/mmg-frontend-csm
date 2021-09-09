<template>
  <div class="block-down"  v-on:click="stud_click">
    <svg class="block-down__icon">
      <use href="@/assets/img/sprite.svg#block-down-icon"></use>
    </svg>

    <div class="block-down__items">
      <div class="block-down__item first--item">
        <p class="block-down__title">
          Трудоустройство <br />
          выпускников
        </p>

        <div class="block__down-wrap">
          <svg
              class="block-down__circle" width="4.167vw" height="4.167vw"
              viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="42.5" cy="42.5" r="37.5" stroke="#0E2D7B" stroke-width="6" stroke-dasharray="2 2"/>
            <path d="M42.6254 5.00014C51.8936 5.03114 60.8219 8.49319 67.6881 14.7185C74.5543 20.9437 78.872 29.4911 79.8082 38.7119C80.7444 47.9326 78.2329 57.1734 72.758 64.6517C67.2832 72.13 59.233 77.316 50.1602 79.2092C41.0875 81.1024 31.6351 79.5688 23.6263 74.9042C15.6176 70.2395 9.61996 62.7743 6.79039 53.9487C3.96082 45.123 4.49978 35.5622 8.30331 27.1104C12.1068 18.6587 18.9055 11.9149 27.3877 8.17984" stroke="#FB9B2B" stroke-width="9" stroke-dasharray="2 2"/>
            <circle cx="42.5" cy="42.5" r="28.5" stroke="#FB9B2B"/>
          </svg>

          <p class="block__down-val">91%</p>
        </div>

        <p class="block__down-label">QS WUR</p>
      </div>

      <div class="block-down__item second--item">
        <p class="block-down__title">Нагрузка преподавателей</p>

        <p class="block__down-label">Плановая <span>950182 <br> часов</span></p>

        <ProgressThird />

        <p class="block-down__percent">99%</p>
        <p class="block__down-label">Фактическая</p>
      </div>

      <div class="block-down__item third--item">


        <svg
            width="11.510vw"
            height="5.3vw"
            viewBox="0 0 229 109" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 14.5V6H9" stroke="#CDD6EE"/>
          <path d="M9.5 108.25L1 108.25L1 100.25" stroke="#CDD6EE"/>
          <path d="M186 99.75L186 108.25L178 108.25" stroke="#CDD6EE"/>
          <path d="M177.75 6L186.25 6L186.25 14" stroke="#CDD6EE"/>
          <rect x="14.25" y="51" width="4" height="53" fill="#217AFF"/>
          <rect x="35.25" y="33" width="4" height="71" fill="#217AFF"/>
          <rect x="55.25" y="24" width="4" height="80" fill="#217AFF"/>
          <rect x="75.25" y="41" width="4" height="63" fill="#217AFF"/>
          <rect x="96.25" y="41" width="4" height="63" fill="#217AFF"/>
          <rect x="117.25" y="28" width="4" height="76" fill="#217AFF"/>
          <rect x="138.25" y="28" width="4" height="76" fill="#217AFF"/>
          <rect x="159.25" y="28" width="4" height="76" fill="#217AFF"/>
          <rect x="20" y="90" width="4" height="14" fill="#FB9B2B"/>
          <rect x="9" y="84" width="4" height="19" fill="#D1CB33"/>
          <rect x="30" y="89" width="4" height="14" fill="#D1CB33"/>
          <rect x="50" y="85" width="4" height="18" fill="#D1CB33"/>
          <rect x="70" y="85" width="4" height="18" fill="#D1CB33"/>
          <rect x="91" y="85" width="4" height="18" fill="#D1CB33"/>
          <rect x="112" y="85" width="4" height="18" fill="#D1CB33"/>
          <rect x="133" y="85" width="4" height="18" fill="#D1CB33"/>
          <rect x="154" y="83" width="4" height="20" fill="#D1CB33"/>
          <rect x="41" y="90" width="4" height="14" fill="#FB9B2B"/>
          <rect x="61" y="90" width="4" height="14" fill="#FB9B2B"/>
          <rect x="81" y="90" width="4" height="14" fill="#FB9B2B"/>
          <rect x="102" y="90" width="4" height="14" fill="#FB9B2B"/>
          <rect x="123" y="90" width="4" height="14" fill="#FB9B2B"/>
          <rect x="144" y="90" width="4" height="14" fill="#FB9B2B"/>
          <rect x="165" y="87" width="4" height="17" fill="#FB9B2B"/>
          <rect x="8.25" y="103" width="170" height="1" fill="#0056D0"/>
          <rect x="16.9571" y="103.536" width="4" height="4" transform="rotate(-45 16.9571 103.536)" fill="#112054" stroke="#627DAE"/>
          <rect x="36.9571" y="103.536" width="4" height="4" transform="rotate(-45 36.9571 103.536)" fill="#112054" stroke="#627DAE"/>
          <rect x="56.9571" y="103.536" width="4" height="4" transform="rotate(-45 56.9571 103.536)" fill="#112054" stroke="#627DAE"/>
          <rect x="76.9571" y="103.536" width="4" height="4" transform="rotate(-45 76.9571 103.536)" fill="#112054" stroke="#627DAE"/>
          <rect x="97.9571" y="103.536" width="4" height="4" transform="rotate(-45 97.9571 103.536)" fill="#112054" stroke="#627DAE"/>
          <rect x="118.957" y="103.536" width="4" height="4" transform="rotate(-45 118.957 103.536)" fill="#112054" stroke="#627DAE"/>
          <rect x="139.957" y="103.536" width="4" height="4" transform="rotate(-45 139.957 103.536)" fill="#112054" stroke="#627DAE"/>
          <rect x="160.957" y="103.536" width="4" height="4" transform="rotate(-45 160.957 103.536)" fill="#112054" stroke="#627DAE"/>
          <g filter="url(#filter0_d)">
            <path d="M219 55.4259V1H169.351L164 7.5955V64H212.044L219 55.4259Z" fill="#112054"/>
            <path d="M219 0.5H219.5V1V55.4259V55.6032L219.388 55.7409L212.432 64.315L212.282 64.5H212.044H164H163.5V64V7.5955V7.41818L163.612 7.28048L168.963 0.684984L169.113 0.5H169.351H219Z" stroke="#217AFF"/>
          </g>
          <rect x="171.414" y="26.9497" width="5" height="5" transform="rotate(-45 171.414 26.9497)" stroke="#217AFF" stroke-width="2"/>
          <rect x="171.414" y="41.9497" width="5" height="5" transform="rotate(-45 171.414 41.9497)" stroke="#FB9B2B" stroke-width="2"/>
          <path d="M188.51 29.9V31H183.35V30.13L186.13 27.49C186.443 27.19 186.653 26.93 186.76 26.71C186.873 26.4833 186.93 26.26 186.93 26.04C186.93 25.7133 186.82 25.4633 186.6 25.29C186.38 25.1167 186.057 25.03 185.63 25.03C184.917 25.03 184.37 25.2733 183.99 25.76L183.08 25.06C183.353 24.6933 183.72 24.41 184.18 24.21C184.647 24.0033 185.167 23.9 185.74 23.9C186.5 23.9 187.107 24.08 187.56 24.44C188.013 24.8 188.24 25.29 188.24 25.91C188.24 26.29 188.16 26.6467 188 26.98C187.84 27.3133 187.533 27.6933 187.08 28.12L185.21 29.9H188.51ZM194.33 29.9V31H189.17V30.13L191.95 27.49C192.264 27.19 192.474 26.93 192.58 26.71C192.694 26.4833 192.75 26.26 192.75 26.04C192.75 25.7133 192.64 25.4633 192.42 25.29C192.2 25.1167 191.877 25.03 191.45 25.03C190.737 25.03 190.19 25.2733 189.81 25.76L188.9 25.06C189.174 24.6933 189.54 24.41 190 24.21C190.467 24.0033 190.987 23.9 191.56 23.9C192.32 23.9 192.927 24.08 193.38 24.44C193.834 24.8 194.06 25.29 194.06 25.91C194.06 26.29 193.98 26.6467 193.82 26.98C193.66 27.3133 193.354 27.6933 192.9 28.12L191.03 29.9H194.33ZM200.034 26.71C201.021 26.71 201.751 26.9033 202.224 27.29C202.698 27.67 202.934 28.19 202.934 28.85C202.934 29.27 202.831 29.65 202.624 29.99C202.418 30.33 202.108 30.6 201.694 30.8C201.281 31 200.771 31.1 200.164 31.1C199.664 31.1 199.181 31.03 198.714 30.89C198.248 30.7433 197.854 30.5433 197.534 30.29L198.084 29.28C198.344 29.4933 198.654 29.6633 199.014 29.79C199.381 29.91 199.758 29.97 200.144 29.97C200.604 29.97 200.964 29.8767 201.224 29.69C201.491 29.4967 201.624 29.2333 201.624 28.9C201.624 28.54 201.481 28.27 201.194 28.09C200.914 27.9033 200.431 27.81 199.744 27.81H198.054L198.414 24H202.524V25.09H199.514L199.364 26.71H200.034ZM208.705 29.9V31H203.545V30.13L206.325 27.49C206.639 27.19 206.849 26.93 206.955 26.71C207.069 26.4833 207.125 26.26 207.125 26.04C207.125 25.7133 207.015 25.4633 206.795 25.29C206.575 25.1167 206.252 25.03 205.825 25.03C205.112 25.03 204.565 25.2733 204.185 25.76L203.275 25.06C203.549 24.6933 203.915 24.41 204.375 24.21C204.842 24.0033 205.362 23.9 205.935 23.9C206.695 23.9 207.302 24.08 207.755 24.44C208.209 24.8 208.435 25.29 208.435 25.91C208.435 26.29 208.355 26.6467 208.195 26.98C208.035 27.3133 207.729 27.6933 207.275 28.12L205.405 29.9H208.705ZM211.816 23.9C212.776 23.9 213.519 24.2 214.046 24.8C214.579 25.4 214.846 26.26 214.846 27.38C214.846 28.1667 214.702 28.84 214.416 29.4C214.129 29.9533 213.726 30.3767 213.206 30.67C212.692 30.9567 212.096 31.1 211.416 31.1C211.056 31.1 210.716 31.0633 210.396 30.99C210.082 30.91 209.809 30.7967 209.576 30.65L210.056 29.67C210.402 29.8967 210.846 30.01 211.386 30.01C212.059 30.01 212.586 29.8033 212.966 29.39C213.346 28.9767 213.536 28.38 213.536 27.6V27.59C213.329 27.83 213.066 28.0133 212.746 28.14C212.426 28.26 212.066 28.32 211.666 28.32C211.206 28.32 210.792 28.2333 210.426 28.06C210.059 27.88 209.772 27.6267 209.566 27.3C209.359 26.9733 209.256 26.5967 209.256 26.17C209.256 25.7167 209.369 25.32 209.596 24.98C209.822 24.6333 210.129 24.3667 210.516 24.18C210.902 23.9933 211.336 23.9 211.816 23.9ZM211.916 27.3C212.336 27.3 212.676 27.1867 212.936 26.96C213.202 26.7333 213.336 26.4467 213.336 26.1C213.336 25.76 213.206 25.48 212.946 25.26C212.692 25.0333 212.339 24.92 211.886 24.92C211.479 24.92 211.149 25.03 210.896 25.25C210.642 25.4633 210.516 25.75 210.516 26.11C210.516 26.4767 210.642 26.7667 210.896 26.98C211.149 27.1933 211.489 27.3 211.916 27.3Z" fill="white"/>
          <path d="M186.42 40.89C187.067 40.97 187.56 41.19 187.9 41.55C188.24 41.91 188.41 42.36 188.41 42.9C188.41 43.3067 188.307 43.6767 188.1 44.01C187.893 44.3433 187.58 44.61 187.16 44.81C186.747 45.0033 186.24 45.1 185.64 45.1C185.14 45.1 184.657 45.03 184.19 44.89C183.73 44.7433 183.337 44.5433 183.01 44.29L183.57 43.28C183.823 43.4933 184.13 43.6633 184.49 43.79C184.857 43.91 185.233 43.97 185.62 43.97C186.08 43.97 186.44 43.8767 186.7 43.69C186.967 43.4967 187.1 43.2367 187.1 42.91C187.1 42.5833 186.973 42.33 186.72 42.15C186.473 41.9633 186.093 41.87 185.58 41.87H184.94V40.98L186.53 39.09H183.35V38H188.12V38.87L186.42 40.89ZM195.004 40.89C195.651 40.97 196.144 41.19 196.484 41.55C196.824 41.91 196.994 42.36 196.994 42.9C196.994 43.3067 196.891 43.6767 196.684 44.01C196.477 44.3433 196.164 44.61 195.744 44.81C195.331 45.0033 194.824 45.1 194.224 45.1C193.724 45.1 193.241 45.03 192.774 44.89C192.314 44.7433 191.921 44.5433 191.594 44.29L192.154 43.28C192.407 43.4933 192.714 43.6633 193.074 43.79C193.441 43.91 193.817 43.97 194.204 43.97C194.664 43.97 195.024 43.8767 195.284 43.69C195.551 43.4967 195.684 43.2367 195.684 42.91C195.684 42.5833 195.557 42.33 195.304 42.15C195.057 41.9633 194.677 41.87 194.164 41.87H193.524V40.98L195.114 39.09H191.934V38H196.704V38.87L195.004 40.89ZM199.937 40.71C200.923 40.71 201.653 40.9033 202.127 41.29C202.6 41.67 202.837 42.19 202.837 42.85C202.837 43.27 202.733 43.65 202.527 43.99C202.32 44.33 202.01 44.6 201.597 44.8C201.183 45 200.673 45.1 200.067 45.1C199.567 45.1 199.083 45.03 198.617 44.89C198.15 44.7433 197.757 44.5433 197.437 44.29L197.987 43.28C198.247 43.4933 198.557 43.6633 198.917 43.79C199.283 43.91 199.66 43.97 200.047 43.97C200.507 43.97 200.867 43.8767 201.127 43.69C201.393 43.4967 201.527 43.2333 201.527 42.9C201.527 42.54 201.383 42.27 201.097 42.09C200.817 41.9033 200.333 41.81 199.647 41.81H197.957L198.317 38H202.427V39.09H199.417L199.267 40.71H199.937ZM205.728 40.71C206.714 40.71 207.444 40.9033 207.918 41.29C208.391 41.67 208.628 42.19 208.628 42.85C208.628 43.27 208.524 43.65 208.318 43.99C208.111 44.33 207.801 44.6 207.388 44.8C206.974 45 206.464 45.1 205.858 45.1C205.358 45.1 204.874 45.03 204.408 44.89C203.941 44.7433 203.548 44.5433 203.228 44.29L203.778 43.28C204.038 43.4933 204.348 43.6633 204.708 43.79C205.074 43.91 205.451 43.97 205.838 43.97C206.298 43.97 206.658 43.8767 206.918 43.69C207.184 43.4967 207.318 43.2333 207.318 42.9C207.318 42.54 207.174 42.27 206.888 42.09C206.608 41.9033 206.124 41.81 205.438 41.81H203.748L204.108 38H208.218V39.09H205.208L205.058 40.71H205.728Z" fill="white"/>
          <rect x="171.414" y="55.9497" width="5" height="5" transform="rotate(-45 171.414 55.9497)" stroke="#D1CB33" stroke-width="2"/>
          <path d="M186.42 54.89C187.067 54.97 187.56 55.19 187.9 55.55C188.24 55.91 188.41 56.36 188.41 56.9C188.41 57.3067 188.307 57.6767 188.1 58.01C187.893 58.3433 187.58 58.61 187.16 58.81C186.747 59.0033 186.24 59.1 185.64 59.1C185.14 59.1 184.657 59.03 184.19 58.89C183.73 58.7433 183.337 58.5433 183.01 58.29L183.57 57.28C183.823 57.4933 184.13 57.6633 184.49 57.79C184.857 57.91 185.233 57.97 185.62 57.97C186.08 57.97 186.44 57.8767 186.7 57.69C186.967 57.4967 187.1 57.2367 187.1 56.91C187.1 56.5833 186.973 56.33 186.72 56.15C186.473 55.9633 186.093 55.87 185.58 55.87H184.94V54.98L186.53 53.09H183.35V52H188.12V52.87L186.42 54.89ZM194.214 54.71C195.201 54.71 195.931 54.9033 196.404 55.29C196.877 55.67 197.114 56.19 197.114 56.85C197.114 57.27 197.011 57.65 196.804 57.99C196.597 58.33 196.287 58.6 195.874 58.8C195.461 59 194.951 59.1 194.344 59.1C193.844 59.1 193.361 59.03 192.894 58.89C192.427 58.7433 192.034 58.5433 191.714 58.29L192.264 57.28C192.524 57.4933 192.834 57.6633 193.194 57.79C193.561 57.91 193.937 57.97 194.324 57.97C194.784 57.97 195.144 57.8767 195.404 57.69C195.671 57.4967 195.804 57.2333 195.804 56.9C195.804 56.54 195.661 56.27 195.374 56.09C195.094 55.9033 194.611 55.81 193.924 55.81H192.234L192.594 52H196.704V53.09H193.694L193.544 54.71H194.214ZM200.224 51.9C201.184 51.9 201.927 52.2 202.454 52.8C202.987 53.4 203.254 54.26 203.254 55.38C203.254 56.1667 203.11 56.84 202.824 57.4C202.537 57.9533 202.134 58.3767 201.614 58.67C201.1 58.9567 200.504 59.1 199.824 59.1C199.464 59.1 199.124 59.0633 198.804 58.99C198.49 58.91 198.217 58.7967 197.984 58.65L198.464 57.67C198.81 57.8967 199.254 58.01 199.794 58.01C200.467 58.01 200.994 57.8033 201.374 57.39C201.754 56.9767 201.944 56.38 201.944 55.6V55.59C201.737 55.83 201.474 56.0133 201.154 56.14C200.834 56.26 200.474 56.32 200.074 56.32C199.614 56.32 199.2 56.2333 198.834 56.06C198.467 55.88 198.18 55.6267 197.974 55.3C197.767 54.9733 197.664 54.5967 197.664 54.17C197.664 53.7167 197.777 53.32 198.004 52.98C198.23 52.6333 198.537 52.3667 198.924 52.18C199.31 51.9933 199.744 51.9 200.224 51.9ZM200.324 55.3C200.744 55.3 201.084 55.1867 201.344 54.96C201.61 54.7333 201.744 54.4467 201.744 54.1C201.744 53.76 201.614 53.48 201.354 53.26C201.1 53.0333 200.747 52.92 200.294 52.92C199.887 52.92 199.557 53.03 199.304 53.25C199.05 53.4633 198.924 53.75 198.924 54.11C198.924 54.4767 199.05 54.7667 199.304 54.98C199.557 55.1933 199.897 55.3 200.324 55.3ZM209.155 57.9V59H203.995V58.13L206.775 55.49C207.088 55.19 207.298 54.93 207.405 54.71C207.518 54.4833 207.575 54.26 207.575 54.04C207.575 53.7133 207.465 53.4633 207.245 53.29C207.025 53.1167 206.701 53.03 206.275 53.03C205.561 53.03 205.015 53.2733 204.635 53.76L203.725 53.06C203.998 52.6933 204.365 52.41 204.825 52.21C205.291 52.0033 205.811 51.9 206.385 51.9C207.145 51.9 207.751 52.08 208.205 52.44C208.658 52.8 208.885 53.29 208.885 53.91C208.885 54.29 208.805 54.6467 208.645 54.98C208.485 55.3133 208.178 55.6933 207.725 56.12L205.855 57.9H209.155Z" fill="white"/>
          <path d="M173.18 8H173.91V13.8L178.39 8H179.06V15H178.33V9.21L173.85 15H173.18V8ZM185.772 9.7C186.266 9.7 186.709 9.81333 187.102 10.04C187.502 10.2667 187.816 10.5833 188.042 10.99C188.269 11.3967 188.382 11.8567 188.382 12.37C188.382 12.8833 188.269 13.3433 188.042 13.75C187.816 14.1567 187.502 14.4767 187.102 14.71C186.709 14.9367 186.266 15.05 185.772 15.05C185.306 15.05 184.882 14.95 184.502 14.75C184.122 14.5433 183.812 14.26 183.572 13.9C183.339 13.54 183.202 13.1267 183.162 12.66H181.962V15H181.252V9.74H181.962V12.01H183.172C183.226 11.5567 183.369 11.1567 183.602 10.81C183.842 10.4567 184.149 10.1833 184.522 9.99C184.896 9.79667 185.312 9.7 185.772 9.7ZM185.772 14.43C186.132 14.43 186.456 14.3433 186.742 14.17C187.036 13.9967 187.266 13.7533 187.432 13.44C187.599 13.1267 187.682 12.77 187.682 12.37C187.682 11.97 187.599 11.6133 187.432 11.3C187.266 10.9867 187.036 10.7467 186.742 10.58C186.456 10.4067 186.132 10.32 185.772 10.32C185.412 10.32 185.086 10.4067 184.792 10.58C184.506 10.7467 184.279 10.9867 184.112 11.3C183.946 11.6133 183.862 11.97 183.862 12.37C183.862 12.77 183.946 13.1267 184.112 13.44C184.279 13.7533 184.506 13.9967 184.792 14.17C185.086 14.3433 185.412 14.43 185.772 14.43ZM194.175 9.74V15H193.465V10.37H190.945L190.875 11.67C190.822 12.7633 190.695 13.6033 190.495 14.19C190.295 14.7767 189.939 15.07 189.425 15.07C189.285 15.07 189.115 15.0433 188.915 14.99L188.965 14.38C189.085 14.4067 189.169 14.42 189.215 14.42C189.489 14.42 189.695 14.2933 189.835 14.04C189.975 13.7867 190.069 13.4733 190.115 13.1C190.162 12.7267 190.202 12.2333 190.235 11.62L190.325 9.74H194.175ZM198.454 11.6C199.114 11.6067 199.614 11.7533 199.954 12.04C200.3 12.3267 200.474 12.74 200.474 13.28C200.474 13.84 200.287 14.27 199.914 14.57C199.547 14.87 199.014 15.0167 198.314 15.01L196.194 15V9.74H196.904V11.58L198.454 11.6ZM198.274 14.47C198.76 14.4767 199.127 14.38 199.374 14.18C199.627 13.9733 199.754 13.6733 199.754 13.28C199.754 12.8933 199.63 12.6067 199.384 12.42C199.137 12.2333 198.767 12.1367 198.274 12.13L196.904 12.11V14.45L198.274 14.47Z" fill="white"/>
          <defs>
            <filter id="filter0_d" x="163" y="0" width="66" height="75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="5" dy="6"/>
              <feGaussianBlur stdDeviation="2"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.0897222 0 0 0 0 0.241933 0 0 0 0 0.633333 0 0 0 0.12 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
          </defs>
        </svg>

        <div class="block-graph__items">
          <div class="block-graph__item">
            <div class="block-graph__inf">
              <svg class="block-graph__icon" width="0.833vw" height="0.833vw">
                <use href="@/assets/img/sprite.svg#block-graph-icon1"></use>
              </svg>
              <span>Бакалавры</span>
            </div>
          </div>

          <div class="block-graph__item">
            <div class="block-graph__inf">
              <svg class="block-graph__icon" width="0.833vw" height="0.833vw">
                <use href="@/assets/img/sprite.svg#block-graph-icon2"></use>
              </svg>
              <span>Специалисты</span>
            </div>
          </div>

          <div class="block-graph__item">
            <div class="block-graph__inf">
              <svg class="block-graph__icon" width="0.833vw" height="0.833vw">
                <use href="@/assets/img/sprite.svg#block-graph-icon3"></use>
              </svg>
              <span>Магистры</span>
            </div>
          </div>
        </div>
      </div>

      <div class="block-down__item fourth--item">
        <div class="block-down__lists">
          <div class="block-down__list">
            <span>Очное</span>

            <div class="progress-fourth-line" style="width: 100%" data-text="24 201"></div>
            <!-- <ProgressFourth /> -->
          </div>

          <div class="block-down__list">
            <span>Очно-заочное</span>

            <div class="progress-fourth-line" style="width: 12%" data-text="3 543"></div>
            <!-- <ProgressFourth /> -->
          </div>

          <div class="block-down__list">
            <span>Заочное</span>

            <div class="progress-fourth-line" style="width: 23%" data-text="6 183"></div>
            <!-- <ProgressFourth /> -->
          </div>
        </div>

        <div class="block-down__lists">
          <div class="block-down__list">
            <span>Бюджет</span>

            <div class="progress-fourth-line" style="width: 16%" data-text="7 838"></div>
            <!-- <ProgressFourth /> -->
          </div>

          <div class="block-down__list">
            <span>Внебюджет</span>

            <div class="progress-fourth-line" style="width: 100%" data-text="26 089"></div>
            <!-- <ProgressFourth /> -->
          </div>
        </div>
      </div>

    </div>

    <CalendarSingle/>

  </div>
</template>

<script>
import ProgressFourth from './ProgressFourth.vue'
import ProgressThird from './ProgressThird'
import CalendarSingle from './widgets/calendar/CalendarSingle.vue'

export default {
  components: {
    ProgressThird,
    ProgressFourth,
    CalendarSingle
  },
  methods: {
    stud_click: function() {
      this.connection.send('stud_click')
    },
  },
  created() {
    const ws_url = 'ws://195.211.102.43:8999'
    this.connection = new WebSocket(ws_url)

    this.connection.onerror = error => {
      console.log(error)
    }
  },
}
</script>

<style lang="scss" scoped>

.progress-fourth-line {
  background-color: #217aff;
  height: 0.208vw;
  position: relative;
  display: flex;
  justify-content: flex-end;

  &:after {
    content: '';
    position: absolute;
    right: -0.3vw;
    top: 50%;
    width: 0.521vw;
    height: 0.521vw;
    transform: translateY(-50%);
    background: url('../assets/img/triangle.svg') no-repeat center/contain;
  }

  &:before {
    content: attr(data-text);
    font-size: 0.521vw;
    position: relative;
    top: -0.8vw;
  }
}

.block-down {
  cursor: pointer;
}

.block-down__graph {
  width: 9.635vw;
  height: 5.313vw;
}

.block-down__lists {
  width: 11.5vw;
  padding-bottom: 0.469vw;
  margin-bottom: 0.4vw;
  position: relative;

  &:first-of-type:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1.042vw;
    right: 0;
    border-bottom: 1px dashed rgba(33, 122, 255, 0.7);
  }
}

.block-down__list {
  display: flex;
  align-items: center;
  line-height: 1vw;

  span {
    font-size: 0.677vw;
    flex: 0 0 auto;
    width: 4.167vw;
    text-align: right;
    margin-right: 0.208vw;
  }
}

.block-graph {
  position: absolute;
  top: 1.2vw;
  left: 0.3vw;
}

.block-graph__items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 11.5vw;
  transform: translate(-0.8vw, 0.1vw);
}

.block-graph__item {
  padding: 0 0.417vw;
}

.block-graph__inf {
  display: flex;
  align-items: center;
  font-size: 0.677vw;
  line-height: 0.833vw;
  letter-spacing: 0.03em;
}

.block-graph__icon {
  margin-right: 0.521vw;
  flex: 0 0 auto;
}

.block-down {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 41.198vw;
  height: 8.542vw;
  z-index: 1;
  bottom: 2vw;
}

.block-down__percent {
  font-size: 1.146vw;
  line-height: 1.042vw;
  color: #217aff;
  margin-bottom: 0.104vw;
  padding-top: 0.2vw;
}

.block__down-label {
  letter-spacing: 0.1em;
  text-transform: uppercase;
  //font-size: 0.469vw;
  font-size: 0.7vw;
  line-height: 0.829vw;
  //line-height: 0.729vw;
  color: #627dae;

  span {
    font-size: 0.677vw;
    line-height: 0.833vw;
    letter-spacing: 0.03em;
    text-transform: none;
    color: #fff;
    position: absolute;
    padding-left: 3px;
  }
}

.block__down-wrap {
  position: relative;
}

.block__down-val {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.146vw;
  line-height: 1.042vw;
  color: #f79a2d;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2.969vw;
    height: 2.969vw;
    transform: translate(-50%, -50%);
    border: 1px solid #fb9b2b;
    border-radius: 50%;
  }
}

.block-down__icon {
  width: 41.198vw;
  height: 8.542vw;
}

.block-down__title {
  font-size: 0.677vw;
  line-height: 0.833vw;
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: 0.321vw;
}

.block-down__items {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
}

.block-down__item {
  display: flex;
  flex-direction: column;
  position: relative;
}

.first--item {
  padding-left: 1.5vw;
  padding-top: 0.8vw;
  padding-right: 0.938vw;

  &:before {
    content: '';
    position: absolute;
    top: 1.6vw;
    bottom: 0.8vw;
    right: 0;
    border: 1px dashed rgba(33, 122, 255, 0.7);
  }
}

.second--item {
  padding-top: 1.3vw;
  padding-left: 0.781vw;
  margin-right: 1.4vw;
}

.third--item {
  padding-top: 1.2vw;
}

.block-down__circle {
  margin-left: auto;
  margin-right: auto;
}

.fourth--item {
  padding-top: 1vw;
}
</style>
