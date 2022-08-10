let selections;
let winner = null;
let redScoreStart = 0;
let yellowScoreStart = 0;
document.addEventListener('DOMContentLoaded', () => {
    let chip = document.querySelectorAll(".circle")
    
    
    
    const player = {
        '1' : {
            name: 'p1',
            color: 'red',
            value: 1
        },
        '-1' : {
            name: 'p2',
            color: 'yellow',
            value: -1
        }
    }; 
    let currentPlayer = 1;
    
    selections = [0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0,
                ]
    
    winningCombos = [
        [[0], [1], [2], [3]],
        [[1], [2], [3], [4]],
        [[2], [3], [4], [5]],
        [[3], [4], [5], [6]],
        [[7], [8], [9], [10]],
        [[8], [9], [10], [11]],
        [[9], [10], [11], [12]],
        [[10], [11], [12], [13]],
        [[14], [15], [16], [17]],
        [[15], [16], [17], [18]],
        [[16], [17], [18], [19]],
        [[17], [18], [19], [20]],
        [[21], [22], [23], [24]],
        [[22], [23], [24], [25]],
        [[23], [24], [25], [26]],
        [[24], [25], [26], [27]],
        [[28], [29], [30], [31]],
        [[29], [30], [31], [32]],
        [[30], [31], [32], [33]],
        [[31], [32], [33], [34]],
        [[35], [36], [37], [38]],
        [[36], [37], [38], [39]],
        [[37], [38], [39], [40]],
        [[38], [39], [40], [41]],
        [[0], [7], [14], [21]],
        [[7], [14], [21], [28]],
        [[14], [21], [28], [35]],
        [[1], [8], [15], [22]],
        [[8], [15], [22], [29]],
        [[15], [22], [29], [36]],
        [[2], [9], [16], [23]],
        [[9], [16], [23], [30]],
        [[16], [23], [30], [37]],
        [[3], [10], [17], [24]],
        [[10], [17], [24], [31]],
        [[17], [24], [31], [38]],
        [[4], [11], [18], [25]],
        [[11], [18], [25], [32]],
        [[18], [25], [32], [39]],
        [[5], [12], [19], [26]],
        [[12], [19], [26], [33]],
        [[19], [26], [33], [40]],
        [[6], [13], [20], [27]],
        [[13], [20], [27], [34]],
        [[20], [27], [34], [41]],
        [[21], [15], [9], [3]],
        [[22], [16], [10], [4]],
        [[23], [17], [11], [5]],
        [[24], [18], [12], [6]],
        [[28], [22], [16], [10]],
        [[29], [23], [17], [11]],
        [[30], [24], [18], [12]],
        [[31], [25], [19], [13]],
        [[35], [29], [23], [17]],
        [[36], [30], [24], [18]],
        [[37], [31], [25], [19]],
        [[38], [32], [26], [20]],
        [[38], [30], [22], [14]],
        [[39], [31], [23], [15]],
        [[40], [32], [24], [16]],
        [[41], [33], [25], [17]],
        [[31], [23], [15], [18]],
        [[32], [24], [16], [19]],
        [[33], [25], [17], [20]],
        [[34], [26], [18], [21]],
        [[24], [16], [8], [0]],
        [[25], [17], [9], [1]],
        [[26], [18], [10], [2]],
        [[27], [19], [11], [3]],
    ]
    for (let i = 0; i < chip.length; i++) {
        chip[i].onclick = () => {
            let nextRow = chip[i + 7];
          if (winner != null) {
            return;  
          }if (chip[i].classList.contains('taken')) {
            // console.log('bye');
            return;
          }else if
            (nextRow.classList.contains('taken')) {
                // console.log('hello');
            selections[i] = player[currentPlayer.toString()].value;//click inserts index in selections array
            // console.log(selections)
            let color = currentPlayer === 1 ? 'red': 'yellow'
            chip[i].classList.add(color) //if current player 1 then 'red' if not 'yellow'
            chip[i].classList.add('taken')
            currentPlayer *= -1//changes player
            checkWinner();
            } else {
                return;
                }
            }
        }
    })

    function checkWinner() {
        winningCombos.forEach(function(combo) {
            console.log(selections);
            let redScore = 0;
            let comboSum = parseInt(selections[combo[0]]) + 
                            parseInt(selections[combo[1]]) + 
                            parseInt(selections[combo[2]]) +
                            parseInt(selections[combo[3]])
                            // console.log(comboSum);
            if (Math.abs(comboSum) === 4) {
                let myImageYellow = new Image();
                let myImageRed = new Image();
                // let redScore = redScoreStart;
                // let yellowScore = yellowScoreStart;
                if (comboSum > 0) {
                    myImageRed.src = "https://fontmeme.com/permalink/220810/5014fffd180dcf1452ce23093f492c11.png";
                    document.querySelector('h2').appendChild(myImageRed);
                    winner = true
                    // console.log('the comboSum', comboSum)
                    // redScore++
                    console.log('this is red' + redScore)
                    document.getElementById('redScore').innerHTML = redScore;
                } if (comboSum < 0)
                // let myImage = new Image();
                 myImageYellow.src = "https://fontmeme.com/permalink/220810/178370e20ac7455362c4467e594b5b76.png";
                 document.body.appendChild(myImageYellow);
                    document.querySelector('h2').appendChild(myImageYellow);
                    winner = true
                    // yellowScore++
                    console.log(yellowScore);
                    console.log(comboSum);
                    document.getElementById('yellowScore').innerHTML = yellowScore;
            } 
            // console.log(winner);
        })
        if (!selections.includes(0) && winner == null) {
            document.querySelector('h2').innerHTML = "Tie Game"
        }
    }

    let refreshButton = document.getElementById("refresh");

    refreshButton.onclick = function (){
        location.reload();
    }
    for (i = 0; i<chip.length; i++) {
        let nextButton = document.getElementById("next");
        chip.classList.remove('red');
        nextButton.onclick = function (){
        selections.splice('0');
        // console.log(selections);
        selections.push = [0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
          ]
        // console.log(selections);
        chip.classList.remove('red');
        
    }
    
    }
    // let nextButton = document.getElementById("next");
    // nextButton.onclick = function (){
    //     selections.splice('0');
    //     console.log(selections);

    // }
    
    document.getElementById('redScore').innerHTML = redScoreStart;
    document.getElementById('yellowScore').innerHTML = yellowScoreStart;

