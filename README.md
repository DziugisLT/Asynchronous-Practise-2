# Asynchronous-Practise-2

**Tasks:**

**PART 1**

1. Create a function 'createImage' which receives 'imgPath' as an input.
This function returns a promise which creates a new image (use
document.createElement('img')) and sets the .src attribute to the
provided image path
2. When the image is done loading, append it to the DOM element with the
'images' class, and resolve the promise. The fulfilled value should be the
image element itself. In case there is an error loading the image (listen for
the'error' event), reject the promise

**PART 2**

3. Consume the promise using .then and also add an error handler
4. After the image has loaded, pause execution for 2 seconds using the 'wait'
function 
```
const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};
```
5. After the 2 seconds have passed, hide the current image (set display CSS
property to 'none'), and load a second image (Hint: Use the image element
returned by the 'createImage' promise to hide the current image. You will
need a global variable for that)
6. After the second image has loaded, pause execution for 2 seconds again
7. After the 2 seconds have passed, hide the current image

**Test data:** Images in the img folder. Test the error handler by passing a wrong
image path. Set the network speed to “Fast 3G” in the dev tools Network tab,
otherwise images load too fast
