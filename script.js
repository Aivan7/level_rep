let milk = confirm('есть молоко дома?');
if (milk ==true){
  alert('Все ок, сиди дома тогда, пей молоко')

}
else {
  let iHavemoney = prompt('Тогда пошли в магаз, сколько денег возьмешь?');
  let milkPrise = prompt ('Сколько стоит молоко?');
  let cashBack = iHavemoney - milkPrise;
  alert("Не забудь молоко,чек, сдачу" + cashBack +"грн и иди домой)")
};