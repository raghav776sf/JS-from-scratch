// Immediately Invoked Function Expression (IIFE)


(function learning(){                 // named-IIFE
    console.log('Use case of IIFE.')
})();                // to stop or end IIFE we use ; at then end of IIFE.

// from global scope variable sometime function is getting poluted so to avoid that we are ussing IIFE.

( () => {                  // unnamed-IIFE
    console.log('Using IIFE with arrow')
})();

(iifeArrow = (name) => {
    console.log(`working with IIFE concepts ${name}`)
})('Anurag');