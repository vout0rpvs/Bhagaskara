var bhaga = angular.module('bhagaskaraApp',['ngAnimate']);
bhaga.service('anchorSmoothScroll', function(){

    this.scrollTo = function(eID) {

        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }

        function currentYPosition() {
            if (self.pageYOffset) return self.pageYOffset;
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }
    };

});

bhaga.controller('bhagaController',['$scope','$location','anchorSmoothScroll',function($scope,$location,anchorSmoothScroll){
    $scope.dotimage = '../images/Ellipse.png';
    $scope.slides = [
      {'title':'Anne Hattaway','Job':'CEO/Marketing Guru','src':'../images/hathaway.jpg','index':'0'},
      {'title':'George Michael','Job':'Human Resources','src':'../images/george.jpg','index':'0'},
      {'title':'Salma Hayek','Job':'Immigration support','src':'../images/salma.jpg','index':'0'},
      {'title':'Not George Michael','Job':'Cleaning','src':'../images/george.jpg','index':'1'},
      {'title':'One More','Job':'CEO/Marketing Guru','src':'../images/hathaway.jpg','index':'1'},
      {'title':'Oleh Fedoryshyn','Job':'Front-end developer','src':'../images/art.jpg','index':'1'},
      {'title':'Something','Job':'Just be there','src':'../images/paperplane.png','index':'2'},
      {'title':'Someone else','Job':'CEO/Marketing Guru','src':'../images/hathaway.jpg','index':'2'},
      {'title':'Oleh Fedoryshyn','Job':'Tester','src':'../images/art.jpg','index':'2'},

    ];
    $scope.skills = [
      {'name':'WEB DESIGN','knowledge':'90%','visual':'../images/webdesign.png'},
      {'name':'GRAPHIC DESIGN','knowledge':'70%','visual':'../images/graphic-design.png'},
      {'name':'HTML/CSS','knowledge':'75%','visual':'../images/htmlcss.png'},
      {'name':'UI/UX','knowledge':'85%','visual':'../images/uiux.png'},
    ];
    $scope.numbers=[
      {'number':'365','subtext':'Lorem ipsum'},
      {'number':'98%','subtext':'Lorem ipsum'},
      {'number':'69','subtext':'Lorem ipsum'},
      {'number':'1,642','subtext':'Lorem ipsum'},
    ];
    $scope.quotes=[
      {'quote':'“Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum. Duis mollis, est non commodo luctus, nisi erat ”','by':'Lesale Christopher, Pinterest','image':'../images/heart-grey.png'},
      {'quote':'“Abite nummi, ego vos mergam, ne mergar a vobis ”','by':'Leonardo, Italy','image':'../images/cup.png'},
      {'quote':'“Aequam memento rebus in arduis servare mentem, non secus in bonis ab insolenti temperatam laetitia ”','by':'Cherchill, UK','image':'../images/diamond.png'},
      {'quote':'“Avarus animus nullo satiatur lucro ”','by':'Makiavelli, Venice','image':'../images/phone.png'},
    ]

    $scope.portfolio = [
      {'source':'../images/portfolio/field.png','name':'Neque Porro Quisquam','apps':'apps','icons':'icons','web':'ui'},
      {'source':'../images/portfolio/tunnel.jpg','name':'Neque Porro Quisquam','apps':'apps','web':'ui'},
      {'source':'../images/portfolio/bigcity.jpg','name':'Neque Porro Quisquam','apps':'apps','web':'ui'},
      {'source':'../images/portfolio/harbor.jpg','name':'Neque Porro Quisquam','apps':'apps','web':'ui'},
      {'source':'../images/portfolio/ocean.jpg','name':'Neque Porro Quisquam','apps':'apps','icons':'icons','web':'ui'},
      {'source':'../images/portfolio/bench.jpg','name':'Neque Porro Quisquam','web':'ui'},
      {'source':'../images/portfolio/ocean.jpg','name':'Neque Porro Quisquam','icons':'icons','web':'ui'},
      {'source':'../images/portfolio/tunnel.jpg','name':'Neque Porro Quisquam','icons':'icons','web':'ui'},
      {'source':'../images/portfolio/bench.jpg','name':'Neque Porro Quisquam','web':'ui'},
    ]
    $scope.gotoElement = function(eID){
      $location.hash('contact');
      anchorSmoothScroll.scrollTo(eID);
    }
    $scope.currentIndex = 0;
    $scope.setcurrentSlideIndex = function(index){
      $scope.currentIndex = index;
    };
    $scope.isCurrentIndex = function(index){
      return $scope.currentIndex === index;
      inrow++;
    };
    $scope.prevSlide = function () {
    $scope.currentIndex--;
    if ($scope.currentIndex<0){
      $scope.currentIndex=2;
    };
    };
    $scope.nextSlide = function () {
    $scope.currentIndex++;
    if ($scope.currentIndex>2){
      $scope.currentIndex=0;
    };
    };

    $scope.Index = 0;
    $scope.setSlideIndex = function (index) {
        $scope.Index = index;
        $scope.dotimage = '../images/Ellipse_Active.png';
    };
    $scope.isSlideIndex = function (index) {
        return $scope.Index === index;
    };
}])
