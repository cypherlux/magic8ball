
var eight = document.getElementById("eight");
var answer = document.getElementById("answer");
var eightball = document.getElementById("eight-ball");
var question = document.getElementById("question");


button.addEventListener("click", function(){
    if (input.value.length < 1) {
      alert("The Magic 8 Ball isn't telepathic yet...please type out your question <3");
    }
    else {
        eight.innerText = "";
        var num = input.value.length % options.length;
        answer.innerText = options[num];
      }
    });


    var options = [
        "obviously", 
        "FUCK YEAH!!", 
        "Without a doubt", 
        "Yes - definitely",
        ";)", 
        "mos def", 
        "Most likely", 
        "I hope so", 
        "YES", 
        "I think so!",
        "ugh, no...sorry", 
        "NO :(",
        "the ethers say no", 
        "outlook not so good",
        "meh", 
        "wait what? sorry I wasn't listening", 
        "idfk", 
        "I know the answer but won't say ;P",
        "I'm hungover, ask later", 
        "Concentrate and ask again"
    ];
