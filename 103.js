results_ = document.querySelector('#ContentPlaceHolder1_dtgResults');
form_ = document.querySelector('#form1');
head_ = document.querySelector('html>head');
body_ = document.querySelector('html>body');
body_.appendChild(results_);
form_.remove();
head_.remove();