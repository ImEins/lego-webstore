/****************************************
 * Checker functions
 ***************************************/

const Checker = {};

Checker.lastname = function() {
  const lastname = document.querySelector('#lastname');
  return lastname.value.length >= 2;
};

Checker.firstname = function() {
  const firstname = document.querySelector('#firstname');
  return firstname.value.length >= 2;
};

Checker.email = function() {
  const email = document.querySelector('#email');
  let s = email.value;
  let at = s.split('@');
  let pt = s.split('.');
  return (at.length==2 && at[0]!="" && at[1]!="" && pt.length==2 && pt[0]!="" && pt[1]!="");
};

Checker.choixJour = function() {
	const day = document.querySelector('#choixJour').value;
	const month = document.querySelector('#choixMois').value;
	const year = document.querySelector('#choixAnnee').value;
	if ((day==31) && (month==2 || month==4 || month==6 || month==9 || month==11))
	return false;
	else if (month==2 && (day>29 || (day==29 && !isLeapYear(year))))
	return false;
	return true;
}

Checker.choixMois = Checker.choixJour;
Checker.choixAnnee = Checker.choixJour;

Checker.password = function() {
  const password = document.querySelector('#password');
  return password.value.length >= 6;
};

Checker.passwordbis = function() {
  const password = document.querySelector('#password');
  const passwordbis = document.querySelector('#passwordbis');
  return this.password() && password.value == passwordbis.value;
};

Checker.passStrength = function() {
	if (!this.password())
	return 0;
	else
	{
		const password = document.querySelector('#password');
		var regex = '((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]))';
		if (password.value.match(regex))
		return 2;
		return 1;
	}
};

let confirmer = document.querySelector('#confirmer');
confirmer.value=0;
confirmer.onclick = ( event => {
	if (confirmer.value==1)
	confirmer.value=0;
	else
	confirmer.value=1;
});

Checker.confirmer = function() {
	return (confirmer.value==1);
}
		
isLeapYear = function(year) {
	return (year%400==0 || (year%4==0 && year%100!=0));
};


