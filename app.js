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
        component: 'home',
    })
    $stateProvider.state({
        name: 'songDetails',
        url: '/music/:id',
        component: 'songDet',
    })

    $stateProvider.state({
        name: 'friendDetails',
        url: '/friends/:id',
        component: 'friendDet',
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

app.component('songDet', {
    templateUrl: "songDet.html",
    controller: "songDetController",
});

app.component('friendDet', {
    templateUrl: "friendDet.html",
    controller: "friendDetController",
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
        $scope.friends = friendsMusic.frands().length;
    $scope.dittys = friendsMusic.dittys().length;
});
//this controller needs scope to $scope, $stateParams and friendsMusic
app.controller("songDetController", function ($scope, $stateParams, friendsMusic) {
    console.log('loady loady load4'),
        // get the song specified in the route
        $scope.song = friendsMusic.getSongDets($stateParams.id);
    //     //use route parameters
    //     //use to specify which song to get deets on
    //     //use to get id numbers

});

app.controller("friendDetController", function ($scope, $stateParams, friendsMusic) {
    console.log('loady loady load4'),
        $scope.friend = friendsMusic.getFriendDets($stateParams.id);
    //     //use route parameters
    //     //use to specify which song to get deets on
    //     //use to get id numbers

});




app.factory('friendsMusic', function () {
    let songs = [
        { id: "0", title: "Tom's Diner", artist: "Suzanne Vega", release: "1992", onAlbum: "99.9F", length: "3:22" },
        { id: "1", title: "Paradise By the Dashboard", artist: "Meatloaf", release: "1978", onAlbum: "Bat Out of Hell", length: "10:23" },
        { id: "2", title: "12 Days of Christmas", artist: "Relient K", release: "2001", onAlbum: "Xmas in Old Town", length: "5:45" },
        { id: "3", title: "A Grand Old Flag", artist: "American Greats", release: "1963", onAlbum: "Amurica", length: "2:56" },
        { id: "4", title: "Indiana Jones Theme", artist: "John Williams", release: "1984", onAlbum: "Movie Sounds Galore", length: "4:43" },
        { id: "5", title: "Do You Hear What I Hear?", artist: "Bing Crosby", release: "1958", onAlbum: "Christmas on your Face", length: "6:00" },
    ];
    let friends = [
        { id: "0", name: "Luke", faves: "42", weight: "450lbs", social: "234-56-5764", zip: "28204", bloodType: "A+" },
        { id: "1", name: "Tron", faves: "666", weight: "85lbs", social: "236-89-5674", zip: "29635", bloodType: "O-" },
        { id: "2", name: "Eric", faves: "2", weight: "350", social: "234-56-7890", zip: "29284", bloodType: "B-" },
        { id: "3", name: "Scott", faves: "34", weight: "56", social: "432-76-0987", zip: "23453", bloodType: "AB+" },
    ]; //give id numbers *unique*

    return {
        frands: function () { return friends; },
        dittys: function () { return songs; },
        home: function () { return home; },
        // Get the song with id = 'id'
        getSongDets: function (id) {
            for (let i = 0; i < songs.length; i++) {
                if (songs[i].id === id) {
                    return songs[i];
                }
            }
        },
       
        getFriendDets: function (id) {
            for (let i = 0; i < friends.length; i++) {
                if (friends[i].id === id) {
                    return friends[i];
                }
            }
        },
    }
    });


app.factory("UNAP", function(){
    let UNAPS = [];
    
    return{
        login: function (userName, password){ 
            UNAPS.push({
                username: username,
                password: password,
            });
            console.log(UNAPS);
        return UNAPS
        },

    }

});

app.controller("UNAPController", function($scope,$stateParams){
    $scope.login = function(){
        $scope.UNAPS = UNAP.login($scope.username, $scope.password);
    }
});