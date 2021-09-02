console.log('Hello world :) !');


let quantite = document.querySelector('#quantite');
quantite.innerText = 1;

const moins = document.querySelector('#moins');
const plus = document.querySelector('#plus');
moins.onclick = ( event => {
	if (quantite.innerText > 1)
	{
		quantite.innerText--;
	}
});

plus.onclick = ( event => {
	quantite.innerText++;
});


let gdeImage = document.querySelector('#gdeImage');
const miniatures = document.querySelectorAll('.miniature');
let courant = miniatures[0];
courant.classList.add('bordureBleue');
miniatures.forEach ( element => {
	element.onclick = ( event => {
		courant.classList.remove('bordureBleue');
		gdeImage.src = element.src;
		element.classList.add('bordureBleue');
		courant = element;
		
	});
});

class Avis {
	constructor(date, avis){
		this.date = date;
		this.avis = avis;
	}
}

let id = document.querySelector('#avis');
id.onclick = ( event => {
	id.onkeydown = ( e => {
		if (e.keyCode==13)
		{
			let ajd = new Date;
			const a = new Avis(ajd.getDate()+'/'+(ajd.getMonth()+1)+'/'+ajd.getFullYear(), id.value);
			id.value = '';
			console.log(a);
			return a;
		}
	});
});
