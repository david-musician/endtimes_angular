/* global angular */
angular.module("BibleEndtimes", [])
    .controller("MainController", ["$scope", function($scope){
        
        var mc = this;
        
        mc.hello = "Hello World!";
        
        /* Begin navigation */
        mc.homeView = true;
        mc.aboutView = false;
        mc.downloadView = false;
        mc.contactView = false;
        mc.miscView = false;
        mc.donateView = false;
        
        mc.home = function home(){
            // http://stackoverflow.com/questions/4210798/how-to-scroll-to-top-of-page-with-javascript-jquery
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            
            mc.homeView = true;
            mc.aboutView = false;
            mc.downloadView = false;
            mc.contactView = false;
            mc.miscView = false;
            mc.donateView = false;
        };
        
        mc.about = function about(){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            
            mc.homeView = false;
            mc.aboutView = true;
            mc.downloadView = false;
            mc.contactView = false;
            mc.miscView = false;
            mc.donateView = false;
        };
        
        mc.download = function download(){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            
            mc.homeView = false;
            mc.aboutView = false;
            mc.downloadView = true;
            mc.contactView = false;
            mc.miscView = false;
            mc.donateView = false;
        };
        
        mc.contact = function contact(){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            
            mc.homeView = false;
            mc.aboutView = false;
            mc.downloadView = false;
            mc.contactView = true;
            mc.miscView = false;
            mc.donateView = false;
        };
        
        mc.misc = function misc(){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            
            mc.homeView = false;
            mc.aboutView = false;
            mc.downloadView = false;
            mc.contactView = false;
            mc.miscView = true;
            mc.donateView = false;
        };
        
        mc.donate = function donate(){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            
            mc.homeView = false;
            mc.aboutView = false;
            mc.downloadView = false;
            mc.contactView = false;
            mc.miscView = false;
            mc.donateView = true;
        };
        
        mc.date = new Date();
    }])
    
    .directive("siteNav", ['$sce', function($sce){
        return {
            restrict: 'E',
            
            scope: true,
            
            templateUrl: $sce.trustAsResourceUrl('common/directives/siteNav/siteNav.template.html')
        };
    }])
    
    .directive("homeView", ['$sce', function($sce){
        return {
            restrict: 'E',
            
            scope: true,
            
            templateUrl: $sce.trustAsResourceUrl('views/directives/home.view.html')
        };
    }])
    
    .directive("aboutView", ['$sce', function($sce){
        return {
            restrict: 'E',
            
            scope: true,
            
            templateUrl: $sce.trustAsResourceUrl('views/directives/about.view.html')
        };
    }])
    
    .directive("downloadView", ['$sce', function($sce){
        return {
            restrict: 'E',
            
            scope: true,
            
            templateUrl: $sce.trustAsResourceUrl('views/directives/download.view.html')
        };
    }])
    
    .directive("contactView", ['$sce', function($sce){
        return {
            restrict: 'E',
            
            scope: true,
            
            templateUrl: $sce.trustAsResourceUrl('views/directives/contact.view.html')
        };
    }])
    
    .directive("miscView", ['$sce', function($sce){
        return {
            restrict: 'E',
            
            scope: true,
            
            templateUrl: $sce.trustAsResourceUrl('views/directives/misc.view.html')
        };
    }])
    
    .directive("donateView", ['$sce', function($sce){
        return {
            restrict: 'E',
            
            scope: true,
            
            templateUrl: $sce.trustAsResourceUrl('views/directives/donate.view.html')
        };
    }])
    
    .directive("siteFooter", ['$sce', function($sce){
        return {
            restrict: 'E',
            
            scope: true,
            
            templateUrl: $sce.trustAsResourceUrl('common/directives/siteFooter/siteFooter.template.html')
        };
    }])