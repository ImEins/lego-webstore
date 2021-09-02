/****************************************
 * Feedback
 ***************************************/

const Feedback = {};
const nbChamps = 9;

Feedback.validate = function(target) {
  target.classList.remove('is-invalid');
  target.classList.add('is-valid');
};

Feedback.invalidate = function(target) {
  target.classList.remove('is-valid', 'is-invalid');
};

Feedback.error = function(target) {
  target.classList.remove('is-valid');
  target.classList.add('is-invalid');
};

Feedback.progress = function() {
	let percent = (100/nbChamps)*$('.is-valid').length;
	percent = percent+"%";
	progression.style.width=percent;
};

