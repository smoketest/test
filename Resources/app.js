// /*
 // * A master detail view, utilizing a native table view component and platform-specific UI and navigation. 
 // * A starting point for a navigation-based application with hierarchical data, or a stack of windows. 
 // * Requires Titanium Mobile SDK 1.8.0+.
 // * 
 // * In app.js, we generally take care of a few things:
 // * - Bootstrap the application with any data we need
 // * - Check for dependencies like device type, platform version or network connection
 // * - Require and open our top-level UI component
 // *  
 // */
// 
// //bootstrap and check dependencies
// if (Ti.version < 1.8 ) {
	// alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
// }
// else if (Ti.Platform.osname === 'mobileweb') {
	// alert('Mobile web is not yet supported by this template');
// }
// else {
	// //determine platform and form factor and render approproate components
	// var osname = Ti.Platform.osname,
		// version = Ti.Platform.version,
		// height = Ti.Platform.displayCaps.platformHeight,
		// width = Ti.Platform.displayCaps.platformWidth;
// 	
	// //considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	// //yourself what you consider a tablet form factor for android
	// var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
// 	
	// //require and open top level UI component
	// var Window;
	// if (isTablet) {
		// Window = require('ui/tablet/ApplicationWindow');
	// }
	// else {
		// if (osname === 'android') {
			// Window = require('ui/handheld/android/ApplicationWindow');
		// }
		// else {
			// Window = require('ui/handheld/ios/ApplicationWindow');
		// }
	// }
	// new Window().open();
// }




// /**
 // * We are going to demonstrate how to use the Ti.StyledLabel module
 // * in two different scenarios:
 // *
 // * 1. First, by loading in some HTML from text.html and displaying it to you.
 // * 2. Second, by loading in some tweets, formatting them, and displaying them.
 // */
// var win = Ti.UI.createWindow({
    // backgroundColor: '#fff'
// });
// var scroll = Ti.UI.createScrollView({
    // contentHeight: 'auto',
    // layout: 'vertical'
// });
// win.add(scroll);
// 
// var StyledLabel = require('ti.styledlabel');
// 
// function linkClickListener(evt) {
    // if (evt.url) {
        // alert('You clicked ' + evt.url);
    // }
// }
// 
// /**
 // * This is the first example. It loads some HTML from a file, sticks it in
 // * the "html" property of our label, and shows it to the user. It also shows
 // * to buttons that control the "filteredTags" and "filteredTagsMode" properties
 // * of the label to let you limit what HTML is displayed to the user.
 // */
// var onlyAllowLinks = Ti.UI.createButton({
    // title: 'Only Allow Links',
    // height: 60
// });
// onlyAllowLinks.addEventListener('click', function() {
    // label.filteredTags = ['a'];
    // label.filteredTagsMode = StyledLabel.INCLUDE_SPECIFIED_TAGS_ONLY;
// });
// scroll.add(onlyAllowLinks);
// 
// var everythingButLinks = Ti.UI.createButton({
    // title: 'Allow Everything But Links',
    // height: 60
// });
// everythingButLinks.addEventListener('click', function() {
    // label.filteredTags = ['a'];
    // label.filteredTagsMode = StyledLabel.EXCLUDE_SPECIFIED_TAGS;
// });
// scroll.add(everythingButLinks);
// 
// var label = StyledLabel.createLabel({
    // // html: Ti.Filesystem.getFile('text.html').read().text,
    // html: "<style> p {font-family: arial; font-size: 14px;} .tagName {font-weight: bold; color: #FFF;}</style><p>Fusce sed nunc ante. Sed facilisis dictum diam molestie rhoncus. Morbi luctus, velit non ultricies egestas, nisi tortor rhoncus justo, sit amet dignissim leo eros id nulla. Suspendisse elementum, ipsum vitae ullamcorper tempor, felis velit varius sem, vitae ultrices enim felis a tortor. Donec vulputate sem eget dolor accumsan sit amet mattis elit tempus. Vivamus convallis sollicitudin nibh a ullamcorper. Suspendisse dignissim, dui interdum molestie eleifend, elit est bibendum ligula, eget sollicitudin dui odio at dui. Maecenas in tincidunt odio. Donec mattis nulla in tellus aliquam eget fermentum massa congue. Morbi sit amet urna a nisi lacinia vestibulum at a orci. Sed rutrum consequat diam quis vulputate. Donec sodales quam sed ante porta ultricies.Duis commodo, eros et dictum aliquam, tortor eros pellentesque ligula, vitae aliquam libero elit quis libero. Duis ultricies commodo libero ut facilisis. Fusce eleifend velit ut nisi eleifend vel vulputate erat adipiscing. Curabitur id purus eu lectus hendrerit ullamcorper. Pellentesque id tellus eu mauris tempus porttitor sed vitae dolor. Fusce id odio eu odio cursus pellentesque et id nulla. Curabitur nec diam ut odio vestibulum scelerisque. Maecenas sit amet velit a nulla pretium venenatis. Integer sit amet magna non neque lobortis blandit vitae id est. Vivamus semper, velit vel vehicula aliquam, arcu nulla lacinia nisl, id vestibulum nisi turpis quis urna. Suspendisse potenti. Nulla sagittis massa sed est fermentum ut venenatis dolor mollis. Nullam pretium ullamcorper pretium. Vestibulum ut diam felis. Fusce placerat nibh mollis metus ullamcorper a facilisis diam placerat. Integer a nisl risus.Nulla non pharetra mi. Integer pellentesque placerat nunc at facilisis. Curabitur venenatis velit vel mauris lobortis ut scelerisque sapien luctus. Vestibulum non nisl fringilla mauris laoreet sodales. Mauris lorem est, cursus vel porttitor ac, aliquam quis justo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus pretium sapien vitae orci venenatis blandit. Aliquam erat volutpat. Nulla sodales porttitor quam vel egestas. Aliquam elementum, nisl a sodales gravida, massa odio malesuada ligula, a ultricies diam metus sit amet lorem. Cras a nisi vel elit dignissim interdum sit amet sed eros. Donec porta scelerisque scelerisque.Cras vitae lectus quam, ut molestie dolor. Quisque ut porta metus. Aliquam risus risus, mollis vel euismod elementum, porttitor vel purus. Nam aliquam sodales mauris, gravida euismod tellus luctus id. Fusce et metus vitae ligula vehicula imperdiet. Nulla mi mauris, tristique sit amet fermentum vel, ultrices in lacus. Cras enim sem, lacinia at lobortis nec, vehicula ut nisl. Vestibulum vestibulum imperdiet dolor, eu sollicitudin eros consectetur rutrum. Phasellus metus dui, pharetra egestas consequat ac, dictum nec est. Suspendisse quis odio nisi, ac imperdiet ligula. Praesent condimentum hendrerit neque, pulvinar semper dui faucibus eu. Donec sit amet sapien nibh, sed pretium massa.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur pharetra, ante id rutrum sollicitudin, mauris nulla ornare velit, sed euismod velit mauris sed odio. Nullam a eros non velit rhoncus semper in vitae mi. In et mi quis lacus consequat mattis non quis tellus. Phasellus tempus augue ac lacus porta blandit. In eget iaculis tellus. Donec sed dui id lectus accumsan semper. Aenean vehicula tincidunt iaculis. Proin dictum vestibulum dolor id venenatis. In hac habitasse platea dictumst.</p",
    // height: 'auto',
    // backgroundColor: '#fff',
    // borderColor: '#ccc', borderWeight: 1,
    // bottom: -1
// });
// label.addEventListener('click', linkClickListener);
// scroll.add(label);
// 
// /**
 // * Our second example is a bit more complicated, but only just -- we're going to
 // * grab some tweets from Twitter, parse them in to HTML, and then then show them
 // * to the user.
 // */
// var baseCSS = '<style type="text/css">' +
    // 'a { color: #099; }' +
    // '</style>';
// 
// function parseTweetToHTML(text) {
    // var urlRegex = /((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;
    // var hashTagRegex = /#([^ ]+)/gi;
    // var mentionRegex = /@([^ ]+)/gi;
    // return text
        // .replace(urlRegex, '<a href="$1">$1</a>')
        // .replace(hashTagRegex, '<a href="http://twitter.com/#!/search?q=%23$1">#$1</a>')
        // .replace(mentionRegex, '<a href="http://twitter.com/#!/search?q=%40$1">@$1</a>');
// }
// 
// var http = Ti.Network.createHTTPClient({
    // onload: function() {
        // try {
            // var tweets = JSON.parse(this.responseText);
            // if (!tweets || !tweets.length) {
                // alert('No tweets found!');
                // return;
            // }
            // for (var key in tweets) {
                // var tweet = tweets[key];
                // var tweetView = Ti.UI.createView({
                    // height: 'auto',
                    // backgroundColor: '#fff',
                    // borderColor: '#ccc', borderWeight: 1
                // });
                // tweetView.add(Ti.UI.createImageView({
                    // left: 5, top: 5,
                    // width: 48, height: 48,
                    // image: tweet.user.profile_image_url
                // }));
                // var label = StyledLabel.createLabel({
                    // left: 70, top: 5, bottom: 5, right: 5,
                    // height: 'auto',
                    // html: baseCSS + '<span>' + parseTweetToHTML(tweet.text) + '</span>'
                // });
                // label.addEventListener('click', linkClickListener);
                // tweetView.add(label);
                // scroll.add(tweetView);
            // }
        // }
        // catch (err) {
            // alert(err);
        // }
    // },
    // onerror: function(evt) {
        // alert(evt);
    // }
// });
// http.open('GET', 'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=appcelerator&include_rts=1');
// http.send();
// 
// win.open();
// // Test

var test = require('/lib/module1/test');

test.start();
setTimeout(function(){
	test.stop();
}, 5000);
