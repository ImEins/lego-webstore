console.log('ok');

let mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];


let choixJour = document.querySelector('#choixJour');
for (let i=1 ; i<=31 ; i++)
{
	const j = document.createElement('option');
	j.innerText = i;
	j.value = i;
	choixJour.appendChild(j);
}

let choixMois = document.querySelector('#choixMois');
for (let i=0 ; i<mois.length ; i++)
{
	const m = document.createElement('option');
	m.innerText = mois[i];
	m.value = i+1;
	choixMois.appendChild(m);
}

let choixAnnee = document.querySelector('#choixAnnee');
for (let i=new Date().getFullYear() ; i>=1900 ; i--)
{
	const a = document.createElement('option');
	a.innerText = i;
	a.value = i;
	choixAnnee.appendChild(a);
}




