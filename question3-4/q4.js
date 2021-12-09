amt = base
if (province == 'ONTARIO') {
   amt *= ONTARIO_RATE;
} else if (province == 'QUEBEC') {
   amt *= QUEBEC_RATE;
   points = 2;
}
else if (province == 'ALBERTA') {
   amt *= ALBERTA_RATE;
}

calc = 2 * basis(amt) + extra(amt) * 1.05;
