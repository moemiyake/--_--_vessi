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

// メニューボタンをクリックすると、メニューが開閉する
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



// === Q & A === //

// Qを押すと、Aが出てくる。
$(document).ready(function() {
    $('.q-question').on('click', e => {
        $(e.target).next().slideToggle(700);
    });
});

$(document).ready(function() {
    $('.q-openclose').on('click', function() {
        $(this).parent().next().slideToggle(700);
    });
});


//  ＋ → × , dispray: none → block; 
$(document).ready(function() {
    $('.q-question').on('click', function() {
        $(this).children().toggleClass('is-open');
        $(this).next().toggleClass('is-open');
    });
});

//★時間があったら、1つだけopen設定もやってみる。