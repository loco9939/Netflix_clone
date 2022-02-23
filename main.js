// 버튼 UI 개발
// $('.net_ui').eq(0).click(function () {
//     $(".description").eq(0).slideToggle();
// });
// $('.net_ui').eq(1).click(function () {
//     $(".description").eq(1).slideToggle();
// });



console.log( $(".net_ui") ); // net_ui 전체
$(".net_ui").click(function() {

    console.log( $(this) ); // 클릭한 요소

    console.log( $(this).find(".description") ); // 클릭한 요소 내의 description

    $(this).find(".description").slideToggle();
});

// var slideToggle = function ( event, parent, target ) {
//     document.on(event, parent, function () {
//         $(target).slideToggle();
//     });
// }

// slideToggle('click','.net_ui','.description');