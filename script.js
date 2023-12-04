//Event Listeners
document.getElementById("mad").addEventListener("click", mad1);
document.getElementById("second").addEventListener("click", mad2);

//Event functions
function mad1() {
   
    // Input
    let n1 = document.getElementById("noun1").value;
    let ad = document.getElementById("adject").value;
    let verb = document.getElementById("verb").value;
    let n2 = document.getElementById("noun2").value;
    
    // Prosses
    let result = `"There are too many ${n1} on this ${ad} airplane!", I screamed. "Somebody has to ${verb} on the ${n2} to solve this problem!"`;
    
    // Output
    document.getElementById("results").innerHTML = result;
};

function mad2() {
   
    // Input
    let n1 = document.getElementById("noun1").value;
    let ad = document.getElementById("adject").value;
    let verb = document.getElementById("verb").value;
    let n2 = document.getElementById("noun2").value;
    
    // Prosses
    let results = `After hiding the panting in his ${n2} for two years, he grew ${ad} and tried to sell it to some ${n1}, but was caught and had to ${verb}.`;
    
    // Output
    document.getElementById("results").innerHTML = results;
};