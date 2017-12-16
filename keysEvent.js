var keys = {
	"left": 37,
	"right": 39,
	"up": 38,
	"down": 40
};

var keyDown = 0;

var setKey = function(keyCode) {
	keyDown = keyCode;
};

var clearKey = function(keyCode) {
	keyDown = 0;
};

var isKeyDown = function(keyName) {
	return keyDown == keys[keyName];
};

function keyDowned() {

  for (key in keys) {
    if (keyDown == keys[key]) {
      return key;
    }
  }
  return -1;
}

function createVirtualKeyboard() {
	window.onkeydown = function(e) {
		setKey(e.keyCode);
	};

	window.onkeyup = function(e) {
		clearKey(e.keyCode);
	};
}

function deleteVirtualKeyboard() {
	window.onkeydown = function(e) {
		clearKey(e.keyCode);
	};
}
