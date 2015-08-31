$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("mVz4K6B03921kHE4EibKrZGHwZn8fD7TqSOVPfX6", "X2eKtf2y2NPD4LYZTMb0zXTVtTymGgtPm6xrStbJ");
    
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});