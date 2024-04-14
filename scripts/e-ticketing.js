function buyTickets(){
    const paribahanSection = document.getElementById('paribahan-section');
    paribahanSection.scrollIntoView();
  }
  
  
  const seats = document.getElementsByClassName('seat-no');
  let count = 0;
  let remainSeat = 40;
  
  for(const seat of seats){
    seat.addEventListener('click', function(event){
        count += 1;
      remainSeat -= 1;
    
      //seat count
      setInnerText('seat-count', count);
  
      // remain seat
      if(remainSeat >= 0){
        setInnerText('remain-seat', remainSeat);
      }
  
      
      setBackgroundColor(event.currentTarget);
      const currentSeat = event.currentTarget.id;
  
  
      const selectedSeatContainer = document.getElementById('selected-seat-container');
      const li = document.createElement('li');
      li.className = 'flex justify-between items-center gap-4 lg:gap-32 text-xl font-semibold';
      const p = document.createElement('p');
      p.innerText = currentSeat;
      const p2 = document.createElement('p');
      p2.innerText = 'Economy';
  
      setInnerText('seat-price', 550);
      const p3 = document.createElement('p');
      const p3Text = document.getElementById('seat-price').innerText;
      p3.innerText = p3Text;
      
      li.appendChild(p);
      li.appendChild(p2);
      li.appendChild(p3);
     selectedSeatContainer.appendChild(li);
  
     //calculate total price
    const totalPriceText = document.getElementById('total-price').innerText;
    let totalPrice = parseInt(totalPriceText);
    totalPrice = totalPrice + parseInt(p3Text);
    setInnerText('total-price', totalPrice);
  
    // calculate grand total price
    const grandTotalPriceText = document.getElementById('grand-total-price').innerText;
    let grandTotalPrice = parseInt(grandTotalPriceText);
    grandTotalPrice += parseInt(p3Text);
    setInnerText('grand-total-price', grandTotalPrice);
  
     
    //  calculateTotalPrice();
    //  calculateGrandTotal();
     applyCoupon();
    })
  }
  
  
  
  
  
  
  
  // //total price
  // function calculateTotalPrice(){
  //   //calculate total price
  //   const totalPriceText = document.getElementById('total-price').innerText;
  //   let totalPrice = parseInt(totalPriceText);
  //   totalPrice = totalPrice + parseInt(p3Text);
  //   setInnerText('total-price', totalPrice);
  // }
  
  // //grand total
  // function calculateGrandTotal(){
  //   // calculate grand total price
  //   const grandTotalPriceText = document.getElementById('grand-total-price').innerText;
  //   let grandTotalPrice = parseInt(grandTotalPriceText);
  //   grandTotalPrice += parseInt(p3Text);
  //   setInnerText('grand-total-price', grandTotalPrice);
  // }
  
  
  //coupon apply
  function applyCoupon(){
    const couponInput = document.getElementById('coupon-input');
    const applyButton = document.getElementById('apply-button');
  
    couponInput.addEventListener('keyup', function(event){
      const couponValue = event.target.value;
      
      if(couponValue === 'NEW15' || couponValue === 'Couple 20'){
        applyButton.classList.remove('pointer-events-none', 'disabled');
        applyButton.classList.add('bg-lime-400', 'text-white');
        applyButton.disabled = false;
      }
      else {
        applyButton.classList.remove('bg-lime-400', 'text-white');
        applyButton.classList.add('pointer-events-none', 'disabled');
        applyButton.disabled = true;
      }
    })
  }