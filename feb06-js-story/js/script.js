var gender = confirm('are you a male?'),
    iteamChoice = ['pillow', 'bacon'],
    floatTime = 12.5,
    floatTime2 = 10.5;
    if(gender){
    var  userName = prompt('what is your name sir');
      alert(userName + ', you have been chosen to embark in a very important journey...');
      var response = confirm('will you answer your calling?');
      if(response){
        alert('so you\'ll accept without knowing the details?');
        alert('such a naive boy ' + userName);
        alert('clearly you are not ready...');
        alert('farewell ' + userName);
        alert('for now...')
      }else{
        alert('well you have no choice in the matter cause you are the chosen one');
        var weaponChoice = prompt('chose between weapon 0 or weapon 1. This shall be your lifeline on your journey Enter the number only below');
        if(parseInt(weaponChoice) === 0){
          alert('a ' + iteamChoice[0] + ', a very comfy choice there, you\'ll have plenty of rest with that.');
          alert('by the way your journey starts at ' + floatTime + ' and its already ' + floatTime2 + ' so you have approximately ' + (floatTime - floatTime2) + ' hours left');
          alert('I\'d get moving if I were you. Farewell and good luck.')
        }else{
          alert(iteamChoice[1] + ' a very tasty choice if I do say so myself. I bid you farewell and may the odds be weighed in your favor.')
        }


      }

    }else{
      alert('then I appologize for assuming your gender');
      var  userName = prompt('what is your name gal');
      alert('I am sorry to inform you ' + userName + ' but you aren\'t qualified to embark on this journey, farewell');
    }
// console.log(gender);
