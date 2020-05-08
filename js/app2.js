!function(){
	"use strict";
	angular.module("Global",[]).controller("GlobalLinksCtrl",function($scope,$http){
		$scope.searchOpen=1
		,$scope.campusesOpen=!1
		// ,$http.get("https://www.nsuok.edu/nsuHome.aspx?mid=3620&standalone=true&type=data&popUp=true").success(function(data){
		// 	$scope.links=data,
		// 	console.log(data)
		// })
		,$scope.toggleSearch=function(){
			$scope.searchOpen=!$scope.searchOpen
			,console.log("toggle search")
		}
		,$scope.toggleCampuses=function(){
			$scope.campusesOpen=!$scope.campusesOpen
		}
	})
	// ,angular.module("Global",["Global.globalLinks"])
	// ,angular.module("SiteFooter.footerLeft",[]).controller("FooterLeftCtrl",function($scope,$http){
	// 	$http.get("https://www.nsuok.edu/nsuHome.aspx?mid=3552&standalone=true&type=data&popUp=true").success(function(data){
	// 		$scope.footerLeftLinks=data,
	// 		console.log(data)
	// 	})
	// })
	// ,angular.module("SiteFooter.footerMiddle",[]).controller("FooterMiddleCtrl",function($scope,$http){
	// 	$http.get("https://www.nsuok.edu/nsuHome.aspx?mid=3553&standalone=true&type=data&popUp=true").success(function(data){
	// 		$scope.footerMiddleLinks=data,
	// 		console.log(data)
	// 	})
	// })
	// ,angular.module("SiteFooter.footerRight",[]).controller("FooterRightCtrl",function($scope,$http){
	// 	$http.get("https://www.nsuok.edu/nsuHome.aspx?mid=3554&standalone=true&type=data&popUp=true").success(function(data){
	// 		$scope.footerRightLinks=data,
	// 		console.log(data)
	// 	})
	// })
	// ,angular.module("SiteFooter.socialMedia",[]).controller("SocialMediaCtrl",function($scope,$http){
	// 	$http.get("https://www.nsuok.edu/nsuHome.aspx?mid=4309&standalone=true&type=data&popUp=true").success(function(data){
	// 		$scope.socialLinks=data,
	// 		console.log(data)
	// 	})
	// })
	// ,angular.module("SiteFooter",["SiteFooter.footerLeft","SiteFooter.footerMiddle","SiteFooter.footerRight","SiteFooter.socialMedia"])
	// ,angular.element(document).ready(function(){
	// 	angular.bootstrap(document.getElementById("siteFooter"),["SiteFooter"])
	// })
	// ,angular.module("GlobalFooter.globalFooterLinks",[]).controller("GlobalFooterCtrl",function($scope,$http){
	// 	$http.get("https://www.nsuok.edu/nsuHome.aspx?mid=3555&standalone=true&type=data&popUp=true").success(function(data){
	// 		$scope.globalFooterLinks=data
	// 		,console.log($scope.globalFooterLinks)
	// 	})
	// })
	// ,angular.module("GlobalFooter",["GlobalFooter.globalFooterLinks"])
	// ,angular.element(document).ready(function(){
	// 	angular.bootstrap(document.getElementById("globalFooter"),["GlobalFooter"])
	// })
}();