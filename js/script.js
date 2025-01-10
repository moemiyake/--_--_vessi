// === BGM ===

//オーディオを登録する
const audio = new Audio("../music/Singin' In The Rain.mp3");


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

            if (scroll > elemPos - windowHeight + 150) {
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
