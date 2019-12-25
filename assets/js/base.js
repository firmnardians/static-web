$(window).scroll(function() {
    var scroll = $(window).scrollTop();
      $(".zoom img").css({
          transform: 'translate3d(-50%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/5)/100+')',
          "-webkit-filter": "blur(" + (scroll/200) + "px)",
          filter: "blur(" + (scroll/200) + "px)"
      });
  });
  
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  
  function switchTheme(e) {
      if (e.target.checked) {
          document.documentElement.setAttribute('data-theme', 'dark');
      }
      else {
          document.documentElement.setAttribute('data-theme', 'light');
      }    
  }
  
  toggleSwitch.addEventListener('change', switchTheme, false);
  
  function switchTheme(e) {
      if (e.target.checked) {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark'); //add this
      }
      else {
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light'); //add this
      }    
  }
  
  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
  
  if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
  
      if (currentTheme === 'dark') {
          toggleSwitch.checked = true;
      }
  }
  
function showSumber(){
    document.getElementById('cardSumber').style.display="block";
}

document.getElementById('loading');
window.addEventListener('load', function(){
    loading.style.display="none";
});
document.getElementById('myoverlay');
window.addEventListener('load', function(){
    myoverlay.style.display="none";
});
  
  $('.variable-width').slick({
    dots: false,
    speed: 300,
    infinite: false,
    variableWidth: true,
    autoplay: false,
    centerMode: true,
    autoplaySpeed: 2000,
    lazyLoad: 'ondemand'
  });

  $('.project').slick({
    dots: false,
    centerMode: true,
    speed: 300,
    infinite: false,
    variableWidth: true,
    autoplay: false,
    autoplaySpeed: 2000,
    lazyLoad: 'ondemand'
});