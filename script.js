var btnHeight = 40;
var btnWidth = 110;
var fontwg = 18;


function no() {
    btnHeight += 55;
    btnWidth += 70;
    fontwg += 15;

    if (btnHeight === 95) {
       $(".prg").text("Think one more time 🥹🥹");
    } else if (btnHeight === 150) {
       $ (".prg").text("Think last Time 😠😭🤯");
    } else if (btnHeight === 205) {
        $ (".prg").text("plzz 🙏😭🥹");
    } else {
        $ (".prg").text("Go In hell ☠️☠️☠️ 😡😡 ");
        setTimeout(function() {
        location.reload();
         }, 3000);
    }
    $(".yes").css("height", btnHeight + "px");
    $(".yes").css("width", btnWidth + "px");
    $(".yes").css("fontSize", fontwg + "px");
    console.log(btnHeight);
}

function yes() {
    
    $("h1").text("Thanks !! Love You too 🥳🚩🥰🎊")
    $("p").text("You are no longer my crush now 🥰😍")
    $("img").attr("src", "./giphy (1).gif");
    $(".yes").css("display", "none");
    $(".no").css("display", "none");
    $("a").css("display" , "block")
}

