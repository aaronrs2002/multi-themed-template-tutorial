const designOptions = ["option-1", "option-2"];


/*START GRAB URL PARAMETERS*/
let url = window.location.toString();
let urlLength = url.length;
if ("#" === url[urlLength - 1]) {/* get rid of hashtag at end of url otherwise the data will not import*/
    url = url.substring(0, url.length - 1);
}

console.log("url: " + url);

let whichClient = "";
console.log("ARE YOU AWAKE? ");
(url + "?")
    .split("?")[1]
    .split("&")
    .forEach(function (pair) {
        pair = (pair + "=").split("=").map(decodeURIComponent);
        if (pair[0].length) {
            whichClient[pair[0]] = pair[1];
            if (pair[0] === "client") {
                whichClient = pair[1];
            }
        }
    });

document.getElementById("bannerTxt").innerHTML = data[designOptions.indexOf(whichClient)].bannerTxt;
document.getElementById("teaseOne").innerHTML = data[designOptions.indexOf(whichClient)].teaseOne;
document.getElementById("teaseTwo").innerHTML = data[designOptions.indexOf(whichClient)].teaseTwo;
document.querySelector("body").setAttribute("data-design", whichClient);



/*let design = "";

if (!localStorage.getItem("design")) {
    design = designOptions[0];
} else {
    design = localStorage.getItem("design");
}

document.querySelector("body").setAttribute("data-design", design);
document.querySelector("input[value='" + design + "']").setAttribute("checked", true);

function updateDesign() {
    let tempDesign = document.querySelector("input[name='theme']:checked").value;
    console.log("tempDesign: " + tempDesign);
    localStorage.setItem("design", tempDesign);
    document.querySelector("body").setAttribute("data-design", tempDesign);
}*/