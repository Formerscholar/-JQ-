$(function () {
  var mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay: {
      delay: 1800,
      disableOnInteraction: true,
    },
  })

  let eleArr = ['.babar_item', '.news_title_item', '.body_title_items', '.video_left_body_tidings>span', '.video_right_nav_items']
  let classArr = ['active', 'news_active', 'actives', 'activess', 'active']

  mouse(eleArr, classArr)

  function mouse(ele, className) {
    for (let index = 0; index < ele.length; index++) {
      $(ele[index]).mouseenter(function () {
        $(this).addClass(className[index]).siblings().removeClass(className[index]);
      })
    }
  }
})