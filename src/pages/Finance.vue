<template>
	<main class="layout">
		<div class="fin-block" id="f_click" v-on:click="f_click">
			<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" class="test">
				<path d="M51.5 38V38.2071L51.3536 38.3536L38.3536 51.3536L38.2071 51.5H38H1H0.5V51V11V10.7929L0.646446 10.6464L10.6464 0.646447L10.7929 0.5H11H51H51.5V1V38Z" stroke="#217AFF" stroke-opacity="0.4"/>
				<path d="M32.6657 17C35.2923 18.9086 37 22.0048 37 25.5C37 31.299 32.299 36 26.5 36C20.701 36 16 31.299 16 25.5C16 22.0048 17.7077 18.9086 20.3343 17" stroke="#217AFF" stroke-width="2"/>
				<path d="M26.5 13V27" stroke="#217AFF" stroke-width="2"/>
			</svg>
		</div>

    <img src="@/assets/img/finance.svg" alt="" width="100vw">  
	</main>
</template>

<script>
export default {
    
    
	name: 'Sciense',
  data() {
    return {
      showSciense:false,
    }
  },
	components: {
	},
  methods: {
          f_click: function() {
        
            this.connection.send('f_click') 
        },

    handler() {
     console.log("click");
     }
  },
  created() {
     
        const ws_url = 'ws://195.211.102.43:8999'
        this.connection = new WebSocket(ws_url)
        
        this.connection.onerror = (error) => {
          console.log(error)
        }

        this.connection.onmessage = (e) => {
          console.log(e.data)
          if (e.data =="f_click")
          {
              console.log(e);
              this.showSciense = true;
          }
        
              
        }
     
        
  },
}
</script>

<style lang="scss">

</style>
