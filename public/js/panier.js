console.log('Hello world :) !');
	

const a = document.querySelectorAll('.prixbis');

let total = () => {
	let tabQte = document.querySelectorAll('.qtebis');
	let tabPrix = document.querySelectorAll('.prixtri');
	let total = 0;
	for (let i=0 ; i<tabQte.length ; i++)
	{
		total += (parseFloat(tabQte[i].innerText) * parseFloat(tabPrix[i].innerText));
	}
	return total;
}

let tva = () => {
	return parseFloat(prixPanier.innerText)*0.15;
}

let prixPanier = document.querySelector('#prixPanier');
prixPanier.innerText = total();
let tvaPanier = document.querySelector('#tvaPanier');
tvaPanier.innerText=tva();
let totalPanier = document.querySelector('#totalPanier');
totalPanier.innerText = parseFloat(prixPanier.innerText)+parseFloat(tvaPanier.innerText);
		

const suppr=document.querySelectorAll('.suppr');
suppr.forEach(el => {
	el.onclick = ( event => {
		let qte = el.parentNode.previousElementSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.nextElementSibling;
		if (qte.innerText > 1)
		{
			qte.innerText--;
		}
		else
		{
			el.parentNode.parentNode.parentNode.remove()
		}
		console.log(qte);
		prixPanier.innerText = total();
		tvaPanier.innerText=tva();
		totalPanier.innerText = parseFloat(prixPanier.innerText)+parseFloat(tvaPanier.innerText);
	});
});

