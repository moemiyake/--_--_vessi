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


// "SOUND"ボタンを押すと、#soundをフェードアウトする
$(document).ready(function() {
    $('.sound-button').on('click', () => {
        $('#sound').fadeOut(1000);
    });
});




// === ハンバーガーメニュー ===

// メニューボタンをクリックすると、メニューが開く
$(document).ready(function() {
    $('.header-navbtn').on('click', () => {
        $('body').toggleClass('is-nav-open');
    });
});

// リンクをクリックすると、メニューが閉じる
$(document).ready(function() {
    $('.sp-header-nav').on('click', 'a', () => {
        $('body').toggleClass('is-nav-open');
    });
});





