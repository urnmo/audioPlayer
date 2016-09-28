let app = angular.module('AudioApp', ['ui.router']);


app.config(function ($stateProvider) {
    $stateProvider.state({
        name: 'music',
        url: '/music',
        // template: '<h2>"music"</h2>',
        component: 'music',
    })

    $stateProvider.state({
        name: 'friends',
        url: '/friends',
        // template: '<h2>"frand"</h2>',
        component: 'friends',
    })

    $stateProvider.state({
        name: 'home',
        url: '/home',
        component: home.html,
    })
});

app.component('friends', {
    templateUrl: "friends-list.html",
    controller: "friendsController",
});

app.component('music', {
    templateUrl: "music-list.html",
    controller: "musicController",
});

app.component('home', {
    templateUrl: "home.html",
    controller: "homeController",
});

app.controller("musicController", function ($scope, friendsMusic) {
    console.log('loady loady load'),
        $scope.songs = friendsMusic.dittys();
});

app.controller("friendsController", function ($scope, friendsMusic) {
    console.log('loady loady loadm2'),
        $scope.friends = friendsMusic.frands();
});

app.controller("homeController", function ($scope, friendsMusic) {
    console.log('loady loady load3'),
        $scope.home = friendsMusic.frands().length;
        $scope.home = friendsMusic.songs().length;
});

app.factory('friendsMusic', function () {
    let songs = [
        { title: "Tom's Diner", artist: "Suzanne Vega" },
        { title: "Paradise By the Dashboard", artist: "Meatloaf" },
        { title: "12 Days of Christmas", artist: "Relient K" },
        { title: "A Grand Old Flag", artist: "American Greats" },
        { title: "Indiana Jones Theme", artist: "John Williams" },
        { title: "Do You Hear What I Hear?", artist: "Bing Crosby" },
    ];
    let friends = [
        { name: "Luke", faves: "42" },
        { name: "Tron", faves: "666"},
        { name: "Eric", faves: "2" },
        { name: "Scott" , faves: "34" },
    ];
    return {
        frands: function () {return friends; },
        dittys: function () {return songs; },
        home: function () {return home; },
    }
});