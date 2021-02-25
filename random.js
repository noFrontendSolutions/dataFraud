// Uniform 1-9 integer valued random variable

function uni_int() {
    return Math.floor(Math.random() * 9  + 1)
}

// creates a 100-sample from the Uniform-distributed random variable

var arr_uni = []
for (var i = 0; i < 100; i++) {
    arr_uni[i] = uni_int()
}

// counts absolute frequency of 1-9

var arr_abs = [0, 0, 0, 0, 0, 0, 0, 0, 0]

for (var i = 0; i < 100; i++) {
    switch (arr_uni[i]) {
        case 1:
            arr_abs[0] += 1
            break 
        case 2:
            arr_abs[1] += 1
            break
        case 3:
            arr_abs[2] += 1
            break
        case 4:
            arr_abs[3] += 1
            break
        case 5:
            arr_abs[4] += 1
            break
        case 6:
            arr_abs[5] += 1
            break
        case 7:
            arr_abs[6] += 1
            break
        case 8:
            arr_abs[7] += 1
            break 
        case 9:
            arr_abs[8] += 1
            break         
    }
}

//relative frequency of 1-9

var arr_rel = []
for (var i = 0; i < 9; i++){
    arr_rel[i] = arr_abs[i] / 100
}

// actual unifor probabilities on 1-9

var arr_prob_uni = [0.11, 0.11, 0.11, 0.11, 0.11, 0.11, 0.11, 0.11, 0.11]

console.log(arr_uni)
console.log(arr_abs)
console.log(arr_rel)
console.log(arr_prob_uni)


/*    
(Cotinuous Benford Ransom Variable) function benford_c() {
    return Math.exp(Math.random() * Math.log(10))
    }
console.log(benford_c()) 
*/



// Benford integer valued random variable

function benford() {
    return Math.floor(Math.exp(Math.random() * Math.log(10)))
}

// creates a 100-sample from a Benford-distributed random variable

var arr_ben = []
for (var i = 0; i < 100; i++) {
    arr_ben[i] = benford()
}

// counts absolute frequency of 1-9

var arr_abs_ben = [0, 0, 0, 0, 0, 0, 0, 0, 0]

for (var i = 0; i < 100; i++) {
    switch (arr_ben[i]) {
        case 1:
            arr_abs_ben[0] += 1
            break 
        case 2:
            arr_abs_ben[1] += 1
            break
        case 3:
            arr_abs_ben[2] += 1
            break
        case 4:
            arr_abs_ben[3] += 1
            break
        case 5:
            arr_abs_ben[4] += 1
            break
        case 6:
            arr_abs_ben[5] += 1
            break
        case 7:
            arr_abs_ben[6] += 1
            break
        case 8:
            arr_abs_ben[7] += 1
            break 
        case 9:
            arr_abs_ben[8] += 1
            break         
    }
}

// relative freqeuncy for Benford

var arr_rel_ben = []
for (var i = 0; i < 9; i++) {
    arr_rel_ben[i] = arr_abs_ben[i] / 100
}

// actual Benford distribution

var arr_prob_ben = []
for (var i = 0; i < 9; i++) {
    arr_prob_ben[i] = Math.log10(1 + (1 / (i + 1)))
    arr_prob_ben[i] = arr_prob_ben[i].toFixed(3)
}


console.log(arr_ben)
console.log(arr_abs_ben)
console.log(arr_rel_ben)
console.log(arr_prob_ben)