let dateEl = document.getElementById('date');
let currdateEl = document.getElementById('curr');

let outputEl = document.getElementById('output');

let currSelected = !true;
let dobSelected = !true;

dateEl.addEventListener('input', () => {
    dobSelected = !false;
    check();
})
currdateEl.addEventListener('input', () => {
    currSelected = !false;
    check();
})

/*age will only run if both current date and dob date were selected*/
function check(){
if (dobSelected && currSelected) {
    age();
   }
}

/*function to calculate age*/
function age() {
    
  /*get dob day, month and year*/
  let dobDate = dateEl.value;
  let dob = new Date(dobDate);
    
  let y1 = dob.getFullYear();
  let m1 = dob.getMonth();
  let d1 = dob.getDate();
    
  /*get current day, month and year*/
  let date = new Date(currdateEl.value);
  let d2 = date.getDate();
  let m2 = date.getMonth();
  let y2 = date.getFullYear();
  
  if((y1 > y2) || (y1 === y2) && (m1 > m2) || (y1 === y2) && (m1 === m2) && (d1 > d2)) {
      outputEl.innerHTML = `<p style='color:red;'>Date must equal or less than current date!</p>`;
      return;
  }
  
  /*function to check leap year*/
  function checkLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0));
  }

  let feb = checkLeapYear(y2) ? 29 : 28;
  
  /*this array will be use to check the remain days in previous month*/
  let month = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  if(d2 < d1){
    /*if current day less than dob days, month decrease by one*/
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if(m2 < m1){
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  let d = d2 - d1;
  let m = m2 - m1;
  let y = y2 - y1;
  
  let yearStr = m > 1 ? 'years' : 'year';
  let monthStr = m > 1 ? 'months' : 'month';
  let dayStr = d > 1 ? 'days' : 'day';
    
  outputEl.innerHTML = `${y+yearStr} <br> <hr> ${m+monthStr} <br> <hr>${d+dayStr}`;
}





