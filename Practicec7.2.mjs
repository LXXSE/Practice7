function cart(Amount, Products, promo = null) {
    let GeneralAmount = Amount;
   
    if (promo === 'ДАРИМ300' && Amount < 300) {
      GeneralAmount = 0;
      console.log('По промокоду ДАРИМ300 ваша общая сумма: ' + GeneralAmount);
    } else if (promo === 'ДАРИМ300') {
        GeneralAmount -= 300;
      console.log('По промокоду ДАРИМ300 ваша общая сумма: ' + GeneralAmount);
    }
    
    if (Products >= 10) {
      const FivePercent = Amount/100*5;
      GeneralAmount -= FivePercent;
      console.log('У вас больше 10 товаров, применяется промокод на 5% к общей сумме. Ваша общая сумма: ' + GeneralAmount);
    }
    
    if (Amount > 50000) {
      const TwentyPercent = GeneralAmount/100*20;
      const Difference = GeneralAmount - 50000;
      GeneralAmount = Difference - TwentyPercent;
      console.log('Ваша общая сумма выше 50 000₽, применяется промокод на 20% к сумме превышения. Ваша общая сумма: ' + GeneralAmount);
    }
    
    if (promo === 'СКИДКА15' && Amount >= 20000) {
      const FifteenPercent = GeneralAmount/100*15;
      GeneralAmount -= FifteenPercent;
      console.log('По промокоду СКИДКА15 ваша общая сумма: ' + GeneralAmount); 
    }
    console.log('Стоимость товаров: ' + GeneralAmount);
  };