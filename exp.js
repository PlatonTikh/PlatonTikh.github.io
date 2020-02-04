'use strict'
var conds = 'aabacus$1$Images/aabacus/e1_s1.jpg$Images/aabacus/e1_s2.jpg%accordion$1$Images/accordion/e1_s1.jpg$Images/accordion/e1_s2.jpg%altoid$1$Images/altoid/e1_s1.jpg$Images/altoid/e1_s2.jpg%apple$1$Images/apple/e1_s1.jpg$Images/apple/e1_s2.jpg%backpack$1$Images/backpack/e1_s1.jpg$Images/backpack/e1_s2.jpg%baseball_glove$1$Images/baseball_glove/e1_s1.jpg$Images/baseball_glove/e1_s2.jpg%bills$1$Images/bills/e1_s1.jpg$Images/bills/e1_s2.jpg%book$1$Images/book/e1_s1.jpg$Images/book/e1_s2.jpg%book_object$1$Images/book_object/e1_s1.jpg$Images/book_object/e1_s2.jpg%bottle_liquid$1$Images/bottle_liquid/e1_s1.jpg$Images/bottle_liquid/e1_s2.jpg%bottle_perfume$1$Images/bottle_perfume/e1_s1.jpg$Images/bottle_perfume/e1_s2.jpg%breadbox$1$Images/breadbox/e1_s1.jpg$Images/breadbox/e1_s2.jpg%cabbage$1$Images/cabbage/e1_s1.jpg$Images/cabbage/e1_s2.jpg%cabinet$1$Images/cabinet/e1_s1.jpg$Images/cabinet/e1_s2.jpg%canopener$1$Images/canopener/e1_s1.jpg$Images/canopener/e1_s2.jpg%car$1$Images/car/e1_s1.jpg$Images/car/e1_s2.jpg%cardbox$1$Images/cardbox/e1_s1.jpg$Images/cardbox/e1_s2.jpg%cell$1$Images/cell/e1_s1.jpg$Images/cell/e1_s2.jpg%cereal$1$Images/cereal/e1_s1.jpg$Images/cereal/e1_s2.jpg%chair_recliner$1$Images/chair_recliner/e1_s1.jpg$Images/chair_recliner/e1_s2.jpg%chapstick$1$Images/chapstick/e1_s1.jpg$Images/chapstick/e1_s2.jpg%chip$1$Images/chip/e1_s1.jpg$Images/chip/e1_s2.jpg%chips$1$Images/chips/e1_s1.jpg$Images/chips/e1_s2.jpg%chocolate$1$Images/chocolate/e1_s1.jpg$Images/chocolate/e1_s2.jpg%chocolate_bar$1$Images/chocolate_bar/e1_s1.jpg$Images/chocolate_bar/e1_s2.jpg%clocks$1$Images/clocks/e1_s1.jpg$Images/clocks/e1_s2.jpg%cocktail_umbrella$1$Images/cocktail_umbrella/e1_s1.jpg$Images/cocktail_umbrella/e1_s2.jpg%coffeemug$1$Images/coffeemug/e1_s1.jpg$Images/coffeemug/e1_s2.jpg%coins$1$Images/coins/e1_s1.jpg$Images/coins/e1_s2.jpg%container_open$1$Images/container_open/e1_s1.jpg$Images/container_open/e1_s2.jpg%cookie$1$Images/cookie/e1_s1.jpg$Images/cookie/e1_s2.jpg%cooking_pot$1$Images/cooking_pot/e1_s1.jpg$Images/cooking_pot/e1_s2.jpg%corkscrew$1$Images/corkscrew/e1_s1.jpg$Images/corkscrew/e1_s2.jpg%donut$1$Images/donut/e1_s1.jpg$Images/donut/e1_s2.jpg%dresser$1$Images/dresser/e1_s1.jpg$Images/dresser/e1_s2.jpg%drink$1$Images/drink/e1_s1.jpg$Images/drink/e1_s2.jpg%dryer$1$Images/dryer/e1_s1.jpg$Images/dryer/e1_s2.jpg%file_box$1$Images/file_box/e1_s1.jpg$Images/file_box/e1_s2.jpg%file_folder$1$Images/file_folder/e1_s1.jpg$Images/file_folder/e1_s2.jpg%flask$1$Images/flask/e1_s1.jpg$Images/flask/e1_s2.jpg%fridge$1$Images/fridge/e1_s1.jpg$Images/fridge/e1_s2.jpg%garlic_press$1$Images/garlic_press/e1_s1.jpg$Images/garlic_press/e1_s2.jpg%gift_box$1$Images/gift_box/e1_s1.jpg$Images/gift_box/e1_s2.jpg%glass_orange$1$Images/glass_orange/e1_s1.jpg$Images/glass_orange/e1_s2.jpg%gummy$1$Images/gummy/e1_s1.jpg$Images/gummy/e1_s2.jpg%hand_puppet$1$Images/hand_puppet/e1_s1.jpg$Images/hand_puppet/e1_s2.jpg%headphone_small$1$Images/headphone_small/e1_s1.jpg$Images/headphone_small/e1_s2.jpg%hourglass$1$Images/hourglass/e1_s1.jpg$Images/hourglass/e1_s2.jpg%kettle$1$Images/kettle/e1_s1.jpg$Images/kettle/e1_s2.jpg%keys$1$Images/keys/e1_s1.jpg$Images/keys/e1_s2.jpg%laptop$1$Images/laptop/e1_s1.jpg$Images/laptop/e1_s2.jpg%leather_bag$1$Images/leather_bag/e1_s1.jpg$Images/leather_bag/e1_s2.jpg%lemon$1$Images/lemon/e1_s1.jpg$Images/lemon/e1_s2.jpg%locks$1$Images/locks/e1_s1.jpg$Images/locks/e1_s2.jpg%lotion$1$Images/lotion/e1_s1.jpg$Images/lotion/e1_s2.jpg%lottery_ticket$1$Images/lottery_ticket/e1_s1.jpg$Images/lottery_ticket/e1_s2.jpg%lunchbox$1$Images/lunchbox/e1_s1.jpg$Images/lunchbox/e1_s2.jpg%mailbox$1$Images/mailbox/e1_s1.jpg$Images/mailbox/e1_s2.jpg%menorah$1$Images/menorah/e1_s1.jpg$Images/menorah/e1_s2.jpg%menus$1$Images/menus/e1_s1.jpg$Images/menus/e1_s2.jpg%metronome$1$Images/metronome/e1_s1.jpg$Images/metronome/e1_s2.jpg%microwave$1$Images/microwave/e1_s1.jpg$Images/microwave/e1_s2.jpg%mixer$1$Images/mixer/e1_s1.jpg$Images/mixer/e1_s2.jpg%mustard$1$Images/mustard/e1_s1.jpg$Images/mustard/e1_s2.jpg%notebook$1$Images/notebook/e1_s1.jpg$Images/notebook/e1_s2.jpg%oj$1$Images/oj/e1_s1.jpg$Images/oj/e1_s2.jpg%pail$1$Images/pail/e1_s1.jpg$Images/pail/e1_s2.jpg%paper_cup$1$Images/paper_cup/e1_s1.jpg$Images/paper_cup/e1_s2.jpg%peanut_butter$1$Images/peanut_butter/e1_s1.jpg$Images/peanut_butter/e1_s2.jpg%pen$1$Images/pen/e1_s1.jpg$Images/pen/e1_s2.jpg%phone$1$Images/phone/e1_s1.jpg$Images/phone/e1_s2.jpg%phone_antique$1$Images/phone_antique/e1_s1.jpg$Images/phone_antique/e1_s2.jpg%pie$1$Images/pie/e1_s1.jpg$Images/pie/e1_s2.jpg%plastic_bottle$1$Images/plastic_bottle/e1_s1.jpg$Images/plastic_bottle/e1_s2.jpg%poker_chips$1$Images/poker_chips/e1_s1.jpg$Images/poker_chips/e1_s2.jpg%reeses$1$Images/reeses/e1_s1.jpg$Images/reeses/e1_s2.jpg%scanner$1$Images/scanner/e1_s1.jpg$Images/scanner/e1_s2.jpg%scissors$1$Images/scissors/e1_s1.jpg$Images/scissors/e1_s2.jpg%sharpie_pens$1$Images/sharpie_pens/e1_s1.jpg$Images/sharpie_pens/e1_s2.jpg%shoe$1$Images/shoe/e1_s1.jpg$Images/shoe/e1_s2.jpg%small_box$1$Images/small_box/e1_s1.jpg$Images/small_box/e1_s2.jpg%soap$1$Images/soap/e1_s1.jpg$Images/soap/e1_s2.jpg%sponge$1$Images/sponge/e1_s1.jpg$Images/sponge/e1_s2.jpg%sugar_bowl$1$Images/sugar_bowl/e1_s1.jpg$Images/sugar_bowl/e1_s2.jpg%sugar_paper$1$Images/sugar_paper/e1_s1.jpg$Images/sugar_paper/e1_s2.jpg%tape_dispenser$1$Images/tape_dispenser/e1_s1.jpg$Images/tape_dispenser/e1_s2.jpg%tea_pot$1$Images/tea_pot/e1_s1.jpg$Images/tea_pot/e1_s2.jpg%theater_seats$1$Images/theater_seats/e1_s1.jpg$Images/theater_seats/e1_s2.jpg%tictac$1$Images/tictac/e1_s1.jpg$Images/tictac/e1_s2.jpg%tissues$1$Images/tissues/e1_s1.jpg$Images/tissues/e1_s2.jpg%toilet$1$Images/toilet/e1_s1.jpg$Images/toilet/e1_s2.jpg%tool_box$1$Images/tool_box/e1_s1.jpg$Images/tool_box/e1_s2.jpg%toy_truck$1$Images/toy_truck/e1_s1.jpg$Images/toy_truck/e1_s2.jpg%tricycle$1$Images/tricycle/e1_s1.jpg$Images/tricycle/e1_s2.jpg%typewriter$1$Images/typewriter/e1_s1.jpg$Images/typewriter/e1_s2.jpg%umbrella$1$Images/umbrella/e1_s1.jpg$Images/umbrella/e1_s2.jpg%usb_key$1$Images/usb_key/e1_s1.jpg$Images/usb_key/e1_s2.jpg%wallet$1$Images/wallet/e1_s1.jpg$Images/wallet/e1_s2.jpg%watch$1$Images/watch/e1_s1.jpg$Images/watch/e1_s2.jpg%yarn$1$Images/yarn/e1_s1.jpg$Images/yarn/e1_s2.jpg%aabacus$2$Images/aabacus/e2_s1.jpg$Images/aabacus/e2_s2.jpg%accordion$2$Images/accordion/e2_s1.jpg$Images/accordion/e2_s2.jpg%altoid$2$Images/altoid/e2_s1.jpg$Images/altoid/e2_s2.jpg%apple$2$Images/apple/e2_s1.jpg$Images/apple/e2_s2.jpg%backpack$2$Images/backpack/e2_s1.jpg$Images/backpack/e2_s2.jpg%baseball_glove$2$Images/baseball_glove/e2_s1.jpg$Images/baseball_glove/e2_s2.jpg%bills$2$Images/bills/e2_s1.jpg$Images/bills/e2_s2.jpg%book$2$Images/book/e2_s1.jpg$Images/book/e2_s2.jpg%book_object$2$Images/book_object/e2_s1.jpg$Images/book_object/e2_s2.jpg%bottle_liquid$2$Images/bottle_liquid/e2_s1.jpg$Images/bottle_liquid/e2_s2.jpg%bottle_perfume$2$Images/bottle_perfume/e2_s1.jpg$Images/bottle_perfume/e2_s2.jpg%breadbox$2$Images/breadbox/e2_s1.jpg$Images/breadbox/e2_s2.jpg%cabbage$2$Images/cabbage/e2_s1.jpg$Images/cabbage/e2_s2.jpg%cabinet$2$Images/cabinet/e2_s1.jpg$Images/cabinet/e2_s2.jpg%canopener$2$Images/canopener/e2_s1.jpg$Images/canopener/e2_s2.jpg%car$2$Images/car/e2_s1.jpg$Images/car/e2_s2.jpg%cardbox$2$Images/cardbox/e2_s1.jpg$Images/cardbox/e2_s2.jpg%cell$2$Images/cell/e2_s1.jpg$Images/cell/e2_s2.jpg%cereal$2$Images/cereal/e2_s1.jpg$Images/cereal/e2_s2.jpg%chair_recliner$2$Images/chair_recliner/e2_s1.jpg$Images/chair_recliner/e2_s2.jpg%chapstick$2$Images/chapstick/e2_s1.jpg$Images/chapstick/e2_s2.jpg%chip$2$Images/chip/e2_s1.jpg$Images/chip/e2_s2.jpg%chips$2$Images/chips/e2_s1.jpg$Images/chips/e2_s2.jpg%chocolate$2$Images/chocolate/e2_s1.jpg$Images/chocolate/e2_s2.jpg%chocolate_bar$2$Images/chocolate_bar/e2_s1.jpg$Images/chocolate_bar/e2_s2.jpg%clocks$2$Images/clocks/e2_s1.jpg$Images/clocks/e2_s2.jpg%cocktail_umbrella$2$Images/cocktail_umbrella/e2_s1.jpg$Images/cocktail_umbrella/e2_s2.jpg%coffeemug$2$Images/coffeemug/e2_s1.jpg$Images/coffeemug/e2_s2.jpg%coins$2$Images/coins/e2_s1.jpg$Images/coins/e2_s2.jpg%container_open$2$Images/container_open/e2_s1.jpg$Images/container_open/e2_s2.jpg%cookie$2$Images/cookie/e2_s1.jpg$Images/cookie/e2_s2.jpg%cooking_pot$2$Images/cooking_pot/e2_s1.jpg$Images/cooking_pot/e2_s2.jpg%corkscrew$2$Images/corkscrew/e2_s1.jpg$Images/corkscrew/e2_s2.jpg%donut$2$Images/donut/e2_s1.jpg$Images/donut/e2_s2.jpg%dresser$2$Images/dresser/e2_s1.jpg$Images/dresser/e2_s2.jpg%drink$2$Images/drink/e2_s1.jpg$Images/drink/e2_s2.jpg%dryer$2$Images/dryer/e2_s1.jpg$Images/dryer/e2_s2.jpg%file_box$2$Images/file_box/e2_s1.jpg$Images/file_box/e2_s2.jpg%file_folder$2$Images/file_folder/e2_s1.jpg$Images/file_folder/e2_s2.jpg%flask$2$Images/flask/e2_s1.jpg$Images/flask/e2_s2.jpg%fridge$2$Images/fridge/e2_s1.jpg$Images/fridge/e2_s2.jpg%garlic_press$2$Images/garlic_press/e2_s1.jpg$Images/garlic_press/e2_s2.jpg%gift_box$2$Images/gift_box/e2_s1.jpg$Images/gift_box/e2_s2.jpg%glass_orange$2$Images/glass_orange/e2_s1.jpg$Images/glass_orange/e2_s2.jpg%gummy$2$Images/gummy/e2_s1.jpg$Images/gummy/e2_s2.jpg%hand_puppet$2$Images/hand_puppet/e2_s1.jpg$Images/hand_puppet/e2_s2.jpg%headphone_small$2$Images/headphone_small/e2_s1.jpg$Images/headphone_small/e2_s2.jpg%hourglass$2$Images/hourglass/e2_s1.jpg$Images/hourglass/e2_s2.jpg%kettle$2$Images/kettle/e2_s1.jpg$Images/kettle/e2_s2.jpg%keys$2$Images/keys/e2_s1.jpg$Images/keys/e2_s2.jpg%laptop$2$Images/laptop/e2_s1.jpg$Images/laptop/e2_s2.jpg%leather_bag$2$Images/leather_bag/e2_s1.jpg$Images/leather_bag/e2_s2.jpg%lemon$2$Images/lemon/e2_s1.jpg$Images/lemon/e2_s2.jpg%locks$2$Images/locks/e2_s1.jpg$Images/locks/e2_s2.jpg%lotion$2$Images/lotion/e2_s1.jpg$Images/lotion/e2_s2.jpg%lottery_ticket$2$Images/lottery_ticket/e2_s1.jpg$Images/lottery_ticket/e2_s2.jpg%lunchbox$2$Images/lunchbox/e2_s1.jpg$Images/lunchbox/e2_s2.jpg%mailbox$2$Images/mailbox/e2_s1.jpg$Images/mailbox/e2_s2.jpg%menorah$2$Images/menorah/e2_s1.jpg$Images/menorah/e2_s2.jpg%menus$2$Images/menus/e2_s1.jpg$Images/menus/e2_s2.jpg%metronome$2$Images/metronome/e2_s1.jpg$Images/metronome/e2_s2.jpg%microwave$2$Images/microwave/e2_s1.jpg$Images/microwave/e2_s2.jpg%mixer$2$Images/mixer/e2_s1.jpg$Images/mixer/e2_s2.jpg%mustard$2$Images/mustard/e2_s1.jpg$Images/mustard/e2_s2.jpg%notebook$2$Images/notebook/e2_s1.jpg$Images/notebook/e2_s2.jpg%oj$2$Images/oj/e2_s1.jpg$Images/oj/e2_s2.jpg%pail$2$Images/pail/e2_s1.jpg$Images/pail/e2_s2.jpg%paper_cup$2$Images/paper_cup/e2_s1.jpg$Images/paper_cup/e2_s2.jpg%peanut_butter$2$Images/peanut_butter/e2_s1.jpg$Images/peanut_butter/e2_s2.jpg%pen$2$Images/pen/e2_s1.jpg$Images/pen/e2_s2.jpg%phone$2$Images/phone/e2_s1.jpg$Images/phone/e2_s2.jpg%phone_antique$2$Images/phone_antique/e2_s1.jpg$Images/phone_antique/e2_s2.jpg%pie$2$Images/pie/e2_s1.jpg$Images/pie/e2_s2.jpg%plastic_bottle$2$Images/plastic_bottle/e2_s1.jpg$Images/plastic_bottle/e2_s2.jpg%poker_chips$2$Images/poker_chips/e2_s1.jpg$Images/poker_chips/e2_s2.jpg%reeses$2$Images/reeses/e2_s1.jpg$Images/reeses/e2_s2.jpg%scanner$2$Images/scanner/e2_s1.jpg$Images/scanner/e2_s2.jpg%scissors$2$Images/scissors/e2_s1.jpg$Images/scissors/e2_s2.jpg%sharpie_pens$2$Images/sharpie_pens/e2_s1.jpg$Images/sharpie_pens/e2_s2.jpg%shoe$2$Images/shoe/e2_s1.jpg$Images/shoe/e2_s2.jpg%small_box$2$Images/small_box/e2_s1.jpg$Images/small_box/e2_s2.jpg%soap$2$Images/soap/e2_s1.jpg$Images/soap/e2_s2.jpg%sponge$2$Images/sponge/e2_s1.jpg$Images/sponge/e2_s2.jpg%sugar_bowl$2$Images/sugar_bowl/e2_s1.jpg$Images/sugar_bowl/e2_s2.jpg%sugar_paper$2$Images/sugar_paper/e2_s1.jpg$Images/sugar_paper/e2_s2.jpg%tape_dispenser$2$Images/tape_dispenser/e2_s1.jpg$Images/tape_dispenser/e2_s2.jpg%tea_pot$2$Images/tea_pot/e2_s1.jpg$Images/tea_pot/e2_s2.jpg%theater_seats$2$Images/theater_seats/e2_s1.jpg$Images/theater_seats/e2_s2.jpg%tictac$2$Images/tictac/e2_s1.jpg$Images/tictac/e2_s2.jpg%tissues$2$Images/tissues/e2_s1.jpg$Images/tissues/e2_s2.jpg%toilet$2$Images/toilet/e2_s1.jpg$Images/toilet/e2_s2.jpg%tool_box$2$Images/tool_box/e2_s1.jpg$Images/tool_box/e2_s2.jpg%toy_truck$2$Images/toy_truck/e2_s1.jpg$Images/toy_truck/e2_s2.jpg%tricycle$2$Images/tricycle/e2_s1.jpg$Images/tricycle/e2_s2.jpg%typewriter$2$Images/typewriter/e2_s1.jpg$Images/typewriter/e2_s2.jpg%umbrella$2$Images/umbrella/e2_s1.jpg$Images/umbrella/e2_s2.jpg%usb_key$2$Images/usb_key/e2_s1.jpg$Images/usb_key/e2_s2.jpg%wallet$2$Images/wallet/e2_s1.jpg$Images/wallet/e2_s2.jpg%watch$2$Images/watch/e2_s1.jpg$Images/watch/e2_s2.jpg%yarn$2$Images/yarn/e2_s1.jpg$Images/yarn/e2_s2.jpg%';
var rows = conds.split('%');
var allar = [];
for (var row = 0; row < rows.length; row++) {
  var currArr = rows[row].split('$');
  allar.push(currArr);
}
allar.pop();

// shuffle array
function shuffle(array) {
    var ctr = array.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = array[ctr];
        array[ctr] = array[index];
        array[index] = temp;
    }
    return array;
}
shuffle(allar);

var saveFile = function (data) {
  var textToBLOB = new Blob([data], { type: 'text/plain' });
  var sFileName = 'formData.txt';	   // The file to save the data.
  var newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  }
  else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
  }

  newLink.click();
}







var counter=0;
var frstField = document.querySelector('.firField');
var scndField = document.querySelector('.secField');
var butt = document.querySelector('.butt');
var img1 = document.querySelector('.first');
var img2 = document.querySelector('.second');
var form = document.getElementById("forma");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);
var dataStr = '';
butt.addEventListener('click', function () {
  dataStr = dataStr + allar[counter][0] + ';' + allar[counter][1] + ';' + img1.src + ';' + img2.src + ';' + frstField.value + ';' + scndField.value + '&';
  counter += 1;
  img1.src = allar[counter][2];
  img2.src = allar[counter][3];
  //alert(dataStr);
  frstField.value = '';
  scndField.value = '';
  //
  if (counter === allar.length - 1) {
    var finishButton = document.createElement("button" ); // создаем новый элемент <button>
	  var text = document.createTextNode("Завершить" ); // создаем текстовое содержимое
	  finishButton.appendChild(text); // добавляем текстовое содержимое элементу <button>
	  document.body.appendChild(finishButton);
    finishButton.classList.add('.finishing');
    finishButton.addEventListener('click', function() {
      saveFile(dataStr);
    })

  }

})
