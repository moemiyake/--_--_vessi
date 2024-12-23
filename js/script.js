// === BGM ===

//オーディオを登録する
const audio = new Audio("../music/01 Overture.mp3");


//onボタンを連れてくる
const on = document.querySelector("#on");
//offボタンを連れてくる
const off = document.querySelector("#off");


//ONボタンを押したら音が流れる
on.addEventListener("click", () => {
    audio.play();
});
//OFFボタンを押したら音が止まる
off.addEventListener("click", () => {
    audio.pause();
});



// === Swiper ===
// ★写真を一定の速度で走らせ続けたい

// slide1
// ・自動再生させる
const slide1 = new Swiper('#slide1', {
    loop: true,
    speed: 5000,
    autoplay:  {
        delay: 0,
    },
    
});

// ・ドラックしたときの調整
const slide1y = new Swiper('#slide1', {
  freeMode: {
    enabled: true,
    momentum: false,
  },
  
  on: {
    touchEnd: (swiper) => {
      swiper.slideTo(swiper.activeIndex + 1);
    }
  }
});


// slide2
// ・自動再生させる(逆再生)
const slide2 = new Swiper('#slide2', {
    loop: true,
    speed: 5000,
    autoplay:  {
        delay: 0,
        reverseDirection: true,
    },
    
});

// ・ドラックしたときの調整
const slide2y = new Swiper('#slide2', {
  freeMode: {
    enabled: true,
    momentum: false,
  },
  
  on: {
    touchEnd: (swiper) => {
      swiper.slideTo(swiper.activeIndex + 1);
    }
  }
});


// slide3
const slide3 = new Swiper('#slide3', {
    reverseDirection: true, 
    loop: true,
    speed: 5000,
    autoplay:  {
        delay: 0,
    },
    
});

// ・ドラックしたときの調整
const slide3y = new Swiper('#slide3', {
  freeMode: {
    enabled: true,
    momentum: false,
  },
  
  on: {
    touchEnd: (swiper) => {
      swiper.slideTo(swiper.activeIndex + 1);
    }
  }
});