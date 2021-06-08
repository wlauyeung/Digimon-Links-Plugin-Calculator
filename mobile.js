// Initialization
$(document).ready(function() {
    var current = 0;
    var status = false;


    $("#bt").click(function() {
        $("#test").slideToggle();
    });


    $("#0-show").click(function() {
        change(0);
    });
    $("#1-show").click(function() {
        change(1);
    });
    $("#2-show").click(function() {
        change(2);
    });
    $("#3-show").click(function() {
        change(3);
    });
    $("#4-show").click(function() {
        change(4);
    });

    $("#button_calculate").click(function() {
        switch(current) {
            case 0:
                change(1);
                break;
            case 1:
                change(2);
                break;
            case 2:
                change(3);
                break;
            case 3:
                change(4);
                break;
            case 4:
                submit();
        }
    });

    $("#dropdown_menu").append(createSelectMenu(0, 3));
    $("#dropdown_menu").append(createSelectMenu(1, 3));
    $("#dropdown_menu").append(createSelectMenu(2, 3));
    $("#dropdown_menu").append(createSelectMenu(3, 3));
    $("#dropdown_menu").append(createSelectMenu(4, 5));

    for (i = 1; i < 5; i++) {
        $("#dp" + i).hide();
    }

    $("select").material_select();

    function change(lvl) {
        if(current != lvl && status == false) {
            status = true;
            $("#awa_lvl").text("+" + lvl);

            $("#dp" + current).slideUp(function() {
                $("#dp" + lvl).slideDown(function() {
                    current = lvl;
                    status = false;
                });
            });

            if(lvl == 4) {
                $("#button_calculate").html("Calculate");
            }
            else {
                $("#button_calculate").html("Next");
            }
        }
    } 
    
    function createSelectMenu(awa_lvl, evo_lvl) {
        var str = `<div id="dp` + awa_lvl + `">`;
        var evo = "";
        for(j = 0; j < evo_lvl; j++) {
            if(j == 0) {
                evo = "Champion:";
            } 
            else if(j == 1) {
                evo = "Ultimate:";
            }
            else {
                evo = "Mega:";
            }
            str += `<div class="inline dropdown" >` + "<span>" + evo + "</span>" + `<select id="` + awa_lvl + j + `">` +
                `<option value="8">Select Attribute</option>
                <option value="0" data-icon="img/attrs/mirage.png" class="circle" selected>Mirage</option>
                <option value="1" data-icon="img/attrs/blazing.png" class="circle">Blazing</option>
                <option value="2" data-icon="img/attrs/glacier.png" class="circle">Glacier</option>
                <option value="3" data-icon="img/attrs/electric.png" class="circle">Electric</option>
                <option value="4" data-icon="img/attrs/earth.png" class="circle">Earth</option>
                <option value="5" data-icon="img/attrs/bright.png" class="circle">Bright</option>
                <option value="6" data-icon="img/attrs/abyss.png" class="circle">Abyss</option>
                <option value="7">Done</option></select></div>`;
        }
        return str;
    }
});


