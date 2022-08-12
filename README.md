## Welcome to HULKAMANIA Connect 4

Here is the classic connect 4 game with a nostalgic HULKAMANIA theme. There are 2 players and the goal is to get four of your color pieces in a row, either veritical, horizonatal or diagonal. Players take turns filling in the bottom row available until there is a connect 4 or the board is full and thre is a tie.

#### The Interface

The board will automatically open on loading.

![Blank Board](/screenshots/blank.png)

Player one (RedMania) starts by clicking on any of the circles on the lowest available row. Then Player 2 (YellowMania) does the same. 

![First moves](/screenshots/play.png)

The playrs alternate until there is a Yellow winner.

![YellowMania Wins](/screenshots/yellow-win.png)

Or there is a Red Winner.

![RedMania Wins](/screenshots/red-win.png)

Or there is a Tie Game.

![Tie Game](/screenshots/tie.png)

Then click on the Next Game button to refresh the screen.

![Refresh Button](/screenshots/next.png)

Then it's time to play again BROTHER!

#### Technologies Used

-HTML
-CSS
-JavaScript

#### Approach

- Wrote psuedo code and made a whimsical to ouline project
- Used Divs in the body to create the board.
- Defined players 1 and -1
- Created an array with objects that represent the board. 
- Created an array with the winning combinations
- Made and onclick function that referenced the next row down (i +7)
    - Only allows the onclick if object below has 'Taken' class
    - Onclick function changes colors and inputs class of taken and player color
    - Changes player by mutiplying by -1
- Made a winning combos function
    - forEach function that runs through winning combinations
    - checks is the sum of winning combo has an absolute value of 4
    - If sum is positive then player 1 wins if negative player 2 wins
    - Inserts image into HTML
- Made function to check tie
    - Looks at board array if it's full and there are no '0's then tie
- Made a reload button to refresk the page
- Used flexBox and Grid to style the board

#### What went well...

The ability to manipulate Grid and FlexBox was a big win. I was able to successfully style and manipulate my objects.

#### Hurdles

-My initial hurdle was the gravity aspect of the game. Having only the bottom untaken row be the only available object to manipulate was difficult and caused me to remake my board and arrays multiple times. 

-After finishing the game I struggled with many of my icebox additions. Only being able to successfully add 2 of a long list to my game. 

#### Future Features 

- Score Board
- Refresh Board Button/Function
- Audio when clicking on circle and restarting the game
- Removing the hover when circle is clicked

#### [Get Started Now](https://hulamanina-connect-4.netlify.app/)