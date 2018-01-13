document.addEventListener("DOMContentLoaded", function () {

    // 1.Make a button appear on the page when it's first loaded. 
    // The button cannot already be in your html. When the button is 
    // clicked, you should display an Alert box with any (nice) message.
    function p1() {
        let button = document.createElement('button');
        let btnText = document.createTextNode("Click me for a fun fact");
        button.appendChild(btnText);
        document.body.prepend(button);

        button.addEventListener("click", function () {
            alert("echidnas lack nipples. Their babies drink from milk patches on their mother's stomach.");
        })

    }

    // 2.Make a button and text box (you can just put them in your HTML). 
    // When the button is clicked, display an alert with the message that 
    // is typed in the text box.


    function p2() {
        let inputBtn = document.getElementById('get-text');

        inputBtn.addEventListener("click", function () {

            let input = document.getElementById('text').value;
            alert(input);
        })
    }

    // 3.Create a div in HTML. Without using CSS :hover, 
    // make the div change to a different background color 
    // when your mouse hovers over it. The div should return
    //  to its original color when the mouse exits the div.

    function p3() {
        let hoverDiv = document.getElementById('hoverDiv');
        hoverDiv.style.backgroundColor = "black";
        hoverDiv.style.height = "50px";
        hoverDiv.style.width = "50px";

        hoverDiv.addEventListener("mouseover", function () {
            hoverDiv.style.backgroundColor = "red";
            hoverDiv.addEventListener("mouseout", function () {
                hoverDiv.style.backgroundColor = "black";


            })


        })
    }

    // 4.Put some text in a paragraph. Make it where when you 
    // click on the paragraph, the color of the text switches 
    // to red. Once you get that working, try to rewrite your 
    // code to make it switch to a random color each click 
    // (you don't have to show the code for just red once you 
    // get random working).


    function p4() {
        let rainbowText = document.getElementById('rainbowText');
        rainbowText.addEventListener("click", function () {
            let ranColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);    //// I cheated and copied this from online
            rainbowText.style.color = ranColor;
        })

        //     function giveColor () {              //////// my attempt at color generator
        //             let r = genNums();            
        //             let g = genNums();
        //             let b = genNums();
        //             let colorGen = "rgb(" + r + "," + g + "," + b + ");";
        //             return colorGen;
        //         }


        //     function genNums (){
        //         return Math.floor(Math.random()* 256)
        //     }


    }


    // 5.Add a button and an empty div. When the button is clicked, 
    // add a span that contains your name to the empty div.
    // Create a button and a ul in your HTML. In JavaScript, create 
    // an array containing the names of your friends (at least 10. If 
    // you don't have that many, include your imaginary ones). 
    // When the button is clicked, add each friend's name as an 
    // li to the ul on the page.



    function p5() {
        let bruceBtn = document.getElementById('bruceBtn');


        bruceBtn.addEventListener("click", function () {
            let myName = document.createTextNode('Bruce ')
            let bruceDiv = document.getElementById('bruceDiv');
            let nameSpan = document.createElement('span');
            nameSpan.appendChild(myName);
            bruceDiv.appendChild(nameSpan);
            // nameSpan.setAttribute('id', 'nameSpan');
        })


        let friendArr = ["Andy", "Antonia", "Dante", "Ernest", "Jarad", "Jen", "Joab", "Kana", "kuvvat", "Malawo", "Sari", "Sayra", "Travis"];

        let friendBtn = document.getElementById('nameBtn');
        let count = 0;

        friendBtn.addEventListener("click", function () {
            let friendUl = document.getElementById('nameUl');
            let makeLi = document.createElement('li');
            let getName = document.createTextNode(friendArr[count]);
            makeLi.appendChild(getName);
            friendUl.appendChild(makeLi);
            count++;
            if (count >= friendArr.length) {
                count = 0;
            }

        })
    }

    p1();
    p2();
    p3();
    p4();
    p5();
    



})