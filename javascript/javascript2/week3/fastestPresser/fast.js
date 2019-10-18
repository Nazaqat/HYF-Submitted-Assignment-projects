const input = document.querySelector('input');
const btn = document.querySelector('button');
const sText = document.getElementById('S-Text');
const lText = document.getElementById('L-Text');
const keyS = document.querySelector('.S');
const keyL = document.querySelector('.L');


const pressCounter = (x => {
	if (input.value) {
		if (x.code === 'KeyS') { totalS++; return (keyS.textContent = totalS);
		} 
		else if (x.code === 'KeyL') { totalL++; return (keyL.textContent = totalL);
		}
	}
});


function won() {
	if (totalS > totalL) {sText.textContent = 'S you won!';
	} 
	else if (totalL > totalS) {lText.textContent = 'L you won!';
	} 
	else if ((totalS = totalL)) {sText.textContent = 'Its a draw!';lText.textContent = 'Its a draw!';
	}
	document.removeEventListener('keypress', pressCounter);
}

let totalS = 0;
let totalL = 0;
btn.addEventListener('click', delay => {
	delay = input.value;
	console.log(delay);
	setTimeout(won, delay * 1000);
    document.addEventListener('keypress', pressCounter);
  

	const paraCountDown = document.getElementById('countDown');
	function myTimer() {
		delay--;
		paraCountDown.textContent = `${delay} seconds remaining`;
		if (delay === 0) {
			clearInterval(inter);
		}
	}
	const inter = setInterval(myTimer, 1000);

});

const restartBtn = document.getElementById('restart');
const refresh = () => {
	document.location.reload();
}
restartBtn.addEventListener('click', refresh);