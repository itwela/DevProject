Vue.config.devtools = true;

Vue.component('card', {
  template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @touchmove="handleTouchMove"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
      ref="card">
      <div class="card"
        :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  props: ['dataImage'],
  data() {
    return {
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      touchX: 0,
      touchY: 0,
      mouseLeaveDelay: null
    };
  },
  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    touchPX() {
      return this.touchX / this.width;
    },
    touchPY() {
      return this.touchY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 30 || this.touchPX * 30;
      const rY = this.mousePY * -30 || this.touchPY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * -40 || this.touchPX * -40;
      const tY = this.mousePY * -40 || this.touchPY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      }
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`
      }
    }
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width/2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height/2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    },
    handleTouchMove(e) {
      const touch = e.touches[0];
      this.touchX = touch.pageX - this.$refs.card.offsetLeft - this.width/2;
      this.touchY = touch.pageY - this.$refs.card.offsetTop - this.height/2;
    },
    handleTouchStart() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleTouchEnd() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.touchX = 0;
        this.touchY = 0;
      }, 1000);
    }
  }
});

const app = new Vue({
  el: '#app'
});