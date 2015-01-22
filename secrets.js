// Encodes and Decodes text

var c;
var k;
var t;

function decode(key, cipher) {
	console.log('-decode event-');
	var text = 'Still being developed.\n\n' + cipher;
	return text;
	}

function encode(key, text) {
	console.log('-encode event-');
	var arrText = text.split('');
	console.log(arrText);
	var arrTextNum = arrText.map(function(x) {
		return x.charCodeAt(0)
		} );
	console.log(arrTextNum);
	var arrCipherNum = arrTextNum.map(function(x) {
		return x + 3
		} );
	var arrCipher = arrCipherNum.map(function(x) {
		return String.fromCharCode(x)
		} );
	console.log(arrCipher);
	var strCipher = arrCipher.join('');
	var cipher = 'Still being developed.\n\n' + strCipher;
	return cipher;
	}

function listenDecode() { // Updates ciphertext variable, invokes decoding function, then sets plaintext to the string returned
	c = document.getElementById('ciphertext').value;
	document.getElementById('plaintext').value = decode(k,c);
	}

function listenEncode() { // Updates plaintext variable, invokes encoding function, then sets ciphertext to the string returned
	t = document.getElementById('plaintext').value;
	document.getElementById('ciphertext').value = encode(k,t);
	}

function listenKey() { // Updates key variable
	k = document.getElementById('key').value;
	}

function returnInt(x) {
	return parseInt(x,10);
	}

function warnKey() { // Informs user to enter key before other data
	var key = document.getElementById('key').value;
	var keyIn = document.getElementById("key");
	if (!key || key == '') { // key does not exist or is empty
		keyIn.className = 'warn';
		setTimeout(function() { keyIn.removeAttribute('class'); }, 1000);
		keyIn.placeholder = 'Set key first';
		document.getElementById('key').focus();
		}
		else {
			return false;
			}
	}

document.getElementById('key').addEventListener('input', listenKey); // Listens for key change
document.getElementById('plaintext').addEventListener('input', listenEncode); // Listens for change in plaintext
document.getElementById('plaintext').addEventListener('focus', warnKey); // Listens for attempted input in plaintext to activate warning if key is not entered first
document.getElementById('ciphertext').addEventListener('input', listenDecode); // Listens for change in ciphertext
document.getElementById('ciphertext').addEventListener('focus', warnKey); // Listens for attempted input in ciphertext to activate warning if key is not entered first
