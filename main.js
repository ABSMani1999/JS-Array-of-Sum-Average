//sum & Avarage
var n=[1,2,3,4,5,6];

function sum (n){
var total=0;
var count=0;
	for (i=0;i<n.length;i++) {
		total=total+n[i];
		count++;
				}
	return total/count;
} 
document.write(sum(n));