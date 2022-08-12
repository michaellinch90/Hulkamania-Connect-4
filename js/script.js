let selections;
let winner = null;

document.addEventListener('DOMContentLoaded', () => { //starts the game
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
            return;
          }else if
            (nextRow.classList.contains('taken')) {
            selections[i] = player[currentPlayer.toString()].value;//click inserts index in selections array
            let color = currentPlayer === 1 ? 'red': 'yellow'
            chip[i].classList.add(color) //if current player 1 then 'red' if not 'yellow'
            chip[i].classList.add('taken')
            currentPlayer *= -1//changes player
            checkWinner();
            }
            }
        }
    })

    function checkWinner() {
        winningCombos.forEach(function(combo) {
            let comboSum = parseInt(selections[combo[0]]) + 
                            parseInt(selections[combo[1]]) + 
                            parseInt(selections[combo[2]]) +
                            parseInt(selections[combo[3]]);
                                  
            if (Math.abs(comboSum) === 4) {
                let myImageYellow = new Image();
                let myImageRed = new Image();
                let hogan = new Image(400, 400); 
                hogan.src = "https://i.imgur.com/dPOu4lD.png"; 

                if (comboSum > 0) {
                    myImageRed.src = "https://fontmeme.com/permalink/220810/5014fffd180dcf1452ce23093f492c11.png";
                    document.querySelector('h2').appendChild(myImageRed);
                    document.getElementById('redScore').appendChild(hogan);
                    winner = true
                } 
                else if (comboSum < 0){
                    myImageYellow.src = "https://fontmeme.com/permalink/220810/178370e20ac7455362c4467e594b5b76.png";
                        document.body.appendChild(myImageYellow);
                        document.querySelector('h2').appendChild(myImageYellow);
                        document.getElementById('yellowScore').appendChild(hogan);
                        winner = true     
                } 
            }    
            
        })
        if (!selections.includes(0) && winner == null) {
            let myImageTie = new Image();
            myImageTie.src = href="https://fontmeme.com/permalink/220811/0690f8d0714774064e5f6a48290417b2.png";
            document.querySelector('h2').appendChild(myImageTie);
        }
    }
    let refreshButton = document.getElementById("refresh");

    refreshButton.onclick = function (){
        location.reload();
    }
    

