function pattern1() {
  for (let i = 0; i < 6; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
      row += '*';
    }
    console.log(row);
  }
}

pattern1();

function pattern2() {
  for (let i = 6; i > 0 ; i--) {
    let row = '';
    for (let j = i; j > 0; j--) {
      row += '*';
    }
    console.log(row);
  }
}

pattern2();

function pattern3() {
  for (let i = 0; i <6 ; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
      row += ' ';
    }
    for (let j = i; j < 6; j++) {
      row += '*';
    }
    console.log(row);
  }
}

console.log('\n');
pattern3();

function pattern4() {
  for (let i = 0; i < 6 ; i++) {
    let row = '';
    for (let j = i; j < 5; j++) {
      row += ' ';
    }
    for (let j = 0; j <=i; j++) {
      row += '*';
    }
    console.log(row);
  }
}

console.log('\n');
pattern4();

