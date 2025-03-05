let n = 10;
for (let i = 1; i <= n; i++) { 
  let a = '';
  for (let j = 1; j <= i; j++) { 
    a += '*';
  }
  document.write('<br>')
  document.write(a);
}
document.write('<br>')
n = 10;
for (let i = n; i > 0; i--) { 
   a = '';
  for (let j = 1; j <= i; j++) { 
    a += '*';
  }
  document.write('<br>')
  document.write(a); 
}
document.write('<br>');
n=10;
for (let i = 1; i <= n; i++) { 
     a = '';
    for (let j = 1; j <= n - i; j++) { 
      a += ' ';
    }
    for (let k = 1; k <= i; k++) {
      a += '*';
    }
    document.write('<br>')
    document.write(a);
  }
  document.write('<br>');

   n = 10;
  for (let i = n; i > 0; i--) {
    a = '';
    for (let j = 1; j <= n - i; j++) {
      a += ' ';
    }
    for (let k = 1; k <= i; k++) { 
      a += '*';
    }
    document.write('<br>');
    document.write(a); 
  }