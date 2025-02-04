// === BGM ===

//オーディオを登録する
// const audio = new Audio("music/Singin_In_The_Rain.mp3");


//onボタンを連れてくる
// const on = document.querySelector("#on");
//offボタンを連れてくる
// const off = document.querySelector("#off");


// //ONボタンを押したら音が流れる
// on.addEventListener("click", () => {
//     // const audio = new Audio("../music/Singin In The Rain.mp3");
//     audio.play();
// });
// //OFFボタンを押したら音が止まる
// off.addEventListener("click", () => {
//     // const audio = new Audio("../music/Singin_In_The_Rain.mp3");
//     audio.pause();
// });


// // "SOUND"ボタンを押すと、#soundをフェードアウトする
// $(document).ready(function () {
//     $('.sound-button').on('click', () => {
//         $('#sound').fadeOut(1000);
//     });
// });




// // サウンドの on / off ボタンを作る
// $(function () {
// 	var isPlaying = false;
// 	$("#sound_btn").on("click", function () {
// 		if (isPlaying) {
// 			audio.pause();
// 		} else {
// 			audio.play();
// 		}
// 	});
// 	audio.onplaying = function() {
// 		isPlaying = true;
//         $("#sound_btn").children("img").attr("src", "img/icon/music-mute.png");
//         $("#sound_btn").addClass("playing");
// 	};
// 	audio.onpause = function() {
// 		isPlaying = false;
//         $("#sound_btn").children("img").attr("src", "img/icon/music-play.png");
//         $("#sound_btn").removeClass("playing");
// 	};
// });



// === BGM ===


//オーディオを登録する
const audio = new Audio("music/Singin_In_The_Rain.mp3");

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
$(document).ready(function () {
    $('.sound-button').on('click', () => {
        $('#sound').fadeOut(1000);
    });
});


// サウンドの on / off ボタンを作る
$(function () {
    let isPlaying = false;
    $("#sound_btn").on("click", function () {
        if (isPlaying) {
            console.log("isPlaying：", isPlaying);
            audio.pause();
        } else {
            console.log("isPlaying：", isPlaying);
            audio.play();
        }
    });
    audio.onplaying = function() {
        isPlaying = true;
    $("#sound_btn").children("img").attr("src", "img/icon/music-play.png");
    $("#sound_btn").addClass("playing");
    };
    audio.onpause = function() {
        isPlaying = false;
    $("#sound_btn").children("img").attr("src", "img/icon/music-mute.png");
    $("#sound_btn").removeClass("playing");
    };
});










// === ハンバーガーメニュー ===

// メニューボタンをクリックすると、メニューが開閉する
$(document).ready(function () {
    $('.header-navbtn').on('click', () => {
        $('body').toggleClass('is-nav-open');
    });
});

// リンクをクリックすると、メニューが閉じる
$(document).ready(function () {
    $('.sp-header-nav').on('click', 'a', () => {
        $('body').toggleClass('is-nav-open');
    });
});



// === PC メニュー === 

// メニュー　スクロールに連動したメニューのアクティブ化
$(document).ready(function () {
    // メニューリンクをクリックすると、スムーズスクロールする。
    $('.gnav-list li a').on('click', function (event) {

        //#idをクリックした時、ページの閲覧履歴を残さないようにする
        event.preventDefault();

        // すべてのメニューアイテムから 'active' クラスを削除
        $('.gnav-list li a').removeClass('active');

        // クリックされたメニューアイテムに 'active' クラスを追加
        $(this).addClass('active');

        // 対象のセクションへスクロール
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800, 'swing'
        );
    });


    // スクロール時にメニューアイテムとidを紐づける
    $(window).on('scroll', function () {
        var scrollPosition = $(window).scrollTop();
        var windowHeight = $(window).height();
        var offset = 220;  // 画面下から少しスクロールしたときのオフセット

        // 各セクションの位置をチェック
        $('section').each(function () {
            var sectionTop = $(this).offset().top;
            var sectionBottom = sectionTop + $(this).outerHeight();

            // スクロール位置とセクションの範囲を確認（オフセットを加える）
            if (scrollPosition + windowHeight > sectionTop + offset && scrollPosition < sectionBottom) {
                var id = $(this).attr('id');

                // すべてのメニューアイテムから 'active' クラスを削除
                $('.gnav-list a').removeClass('active');

                // 対応するメニューアイテムに 'active' クラスを追加
                $('.gnav-list a[href="#' + id + '"]').addClass('active');
            }

            // TOP画面に来たら、全てのメニューアイテムに 'active-top' クラスを追加
            if (scrollPosition > windowHeight) {
                $('.gnav-list a').removeClass('active-top');
            } else {
                $('.gnav-list a').addClass('active-top');
            }
        });
    });
});




// === ★ フェードイン ===
$('h2').fadeIn(1000);




// === Q & A === //

// Qを押すと、Aが出てくる。
$(document).ready(function () {
    $('.q-question').on('click', e => {
        $(e.target).next().slideToggle(700);
    });
});

$(document).ready(function () {
    $('.q-openclose').on('click', function () {
        $(this).parent().next().slideToggle(700);
    });
});


//  ＋ → × , dispray: none → block; 
$(document).ready(function () {
    $('.q-question').on('click', function () {
        $(this).children().toggleClass('is-open');
        $(this).next().toggleClass('is-open');
    });
});

//★時間があったら、1つだけopen設定もやってみる。



// === PRODUCTS ===

// スニーカー　スライドインアニメ
    // ウィンドウ内に「product-inner」の上部が150px表示されたら、クラス属性「scrollin」を追加する。
$(document).ready(function () {
    $(window).scroll(function () {
        $('.product-inner').each(function () {
            var elemPos = $(this).offset().top,
                scroll = $(window).scrollTop(),
                windowHeight = $(window).height();

            if (scroll > elemPos - windowHeight + 120) {
                $(this).addClass('scrollin');
            }
        });
    });
});


// === TECNOLOGY ===
// $(document).ready(function () {
//     $('.tecnology_body').scroll(function () {
//         $('tecnology-dt').fadeIn(400)
//     });
// });

//-------------------------------------------------------------
// 追加箇所

/**
 * マジックレイヤーのクリックイベント
 */
const magicLayerText = document.getElementById("text_magicLayer");
document.getElementById("shoesImg_magicLayer").addEventListener("click", () => {

        magicLayerText.classList.toggle('open');

});

/**
 * クッションのクリックイベント
 */
const cushionText = document.getElementById("text_cushion");
document.getElementById("shoesImg_cushion").addEventListener("click", () => {

        cushionText.classList.toggle('open');

});

/**
 * ソールのクリックイベント
 */
const soleText = document.getElementById("text_sole");
document.getElementById("shoesImg_sole").addEventListener("click", () => {

    soleText.classList.toggle('open');

});

/**
 * スクロールイベント
 */
// 前回のスクロール位置
let lastScrollY = window.scrollY;
// 下スクロールイベントフラグ
var scrollFlag = true;
window.addEventListener("scroll", () => {
    const tecnologyImg = document.querySelectorAll(".tecnology-inner");
    const tecnologyContainer = document.querySelector('.tecnology_scroll');
    // 現在の位置
    const currentScrollY = window.scrollY;
    // テクノロジー要素の位置
    const tecnologyPosition = tecnologyContainer.getBoundingClientRect();
    // クッション画像の位置
    const cushionPosition = tecnologyImg[1].getBoundingClientRect();
    // 画面の25%の位置
    const windowquarter = window.innerHeight / 4;
    // アニメーション開始位置
    const containerHalfway = tecnologyPosition.top + currentScrollY - windowquarter;

    // 各要素を離す
    if (currentScrollY >= containerHalfway && scrollFlag) {
        scrollFlag = false;
        tecnologyImg[0].style.transform = "translateY(-80px)";
        tecnologyImg[2].style.transform = "translateY(80px)";
    }
    if (currentScrollY < containerHalfway) {
        scrollFlag = true;
    }

    // 各要素の収束
    if (cushionPosition.top <= windowquarter && cushionPosition.bottom >= windowquarter) {
        tecnologyImg[0].style.transform = "translateY(0px)";
        tecnologyImg[2].style.transform = "translateY(0px)";
        // 表示されているテキストを閉じる
        magicLayerText.classList.remove('open');
        cushionText.classList.remove('open');
        soleText.classList.remove('open');
        scrollFlag = false;
    }

    // 前回のスクロール位置を更新
    lastScrollY = currentScrollY;

});

// ここまで
//-------------------------------------------------------------




// TOP ボタンの設定

// PC版 footer g-navを非表示にする 



// === FOOTER ===
    // TOPに戻るボタン
    //表示設定
$(function () {
    const pageTop = $("#totop");

    pageTop.hide(); // 最初はボタンを非表示にする
    $(window).scroll(function () {
      if ($(this).scrollTop() > $('#question').offset().top) { // #questionの位置までスクロールしたら表示
        pageTop.fadeIn(); // 100px以上スクロールしたらボタンをフェードイン
      } else {
        pageTop.fadeOut(); // 100px以下になったらボタンをフェードアウト
      }
    });

    //クリック時の設定
    pageTop.click(function () {
        //#idをクリックした時、ページの閲覧履歴を残さないようにする
        event.preventDefault();
        
      $("body,html").animate(
        {
          scrollTop: 0, // 上から0pxの位置に戻る
        },
        1500 // 1000ミリ秒かけて戻る
      );
      return false;
    });
  });

  