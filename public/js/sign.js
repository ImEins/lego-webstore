/****************************************
 * Events
 ***************************************/

document
  .querySelectorAll('input, select')
  .forEach(el => {
    el.onchange = function(event) {
      const target = event.target;
      if (Checker[target.id]()) {
        Feedback.validate(target);
      } 
      else if (target.value=="")
      {
		  Feedback.invalidate(target);
	  }
      else {
        Feedback.error(target);
      }
      Feedback.progress();
    }
  });

document.querySelector('#sign').onsubmit = function(event) {
	event.preventDefault();
    console.log('TODO: Tout vérifier avant d\'envoyer le formulaire');
	if ($('is-valid')==nbChamps)
	this.submit();
	else
	Feedback.error();
}


let tout = document.querySelector('#forceAll');
tout.classList.add('cacherBarreTexte');
let barre = document.querySelector('#forceBarre');
let texte = document.querySelector('#forceTexte');
let mdp = document.querySelector('#password');
mdp.onkeyup = ( event => {
	if (mdp.value=="")
	{
		tout.classList.add('cacherBarreTexte');
	}
	else
	{
		tout.classList.remove('cacherBarreTexte');
		if (Checker.passStrength()==0)
		{
			barre.style.width=33+"%";
			texte.innerText="Mot de passe invalide.";
			barre.classList.remove('bg-warning');
			barre.classList.remove('bg-success');
			texte.classList.remove('text-warning');
			texte.classList.remove('text-success');
			barre.classList.add('bg-danger');
			texte.classList.add('text-danger');
		}
		else if (Checker.passStrength()==1)
		{
			barre.style.width=66+"%";
			texte.innerText="Force du mot de passe faible.";
			barre.classList.remove('bg-danger');
			barre.classList.remove('bg-success');
			texte.classList.remove('text-danger');
			texte.classList.remove('text-success');
			barre.classList.add('bg-warning');
			texte.classList.add('text-warning');
		}
		else
		{
			barre.style.width=100+"%";
			texte.innerText="Force du mot de passe excellente.";
			barre.classList.remove('bg-danger');
			barre.classList.remove('bg-warning');
			texte.classList.remove('text-danger');
			texte.classList.remove('text-warning');
			barre.classList.add('bg-success');
			texte.classList.add('text-success');
		}	
	}
	
});
		
		
		
	
	
