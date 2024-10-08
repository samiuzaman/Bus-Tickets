const selectedSeat = document.getElementById("selected-seat");
const totalBooked = document.getElementById("total-booked");
const availableSeats = document.getElementById("available-seat");
const totalPriceEl = document.getElementById("total-price");
const couponField = document.getElementById("coupon-field");
const couponBtn = document.getElementById("coupon-btn");
const grandTotal = document.getElementById("grand-total");
const phoneNumberEl = document.getElementById("phone-number");
const nextBtn = document.getElementById("new-btn");

let selectedList = [];
let totalPrice = 0;

function handleSelectSeat(event) {
  const value = event.innerText;
  if (selectedList.includes(value)) {
    return alert("Seat Already Booked");
  } else if (selectedList.length < 4) {
    event.classList.add("bg-primary");
    event.classList.add("text-white");
    selectedList.push(event.innerText);
    totalBooked.innerText = selectedList.length;
    const availableSeatsValue = parseInt(availableSeats.innerText);
    const newAvailableSeats = availableSeatsValue - 1;
    availableSeats.innerText = newAvailableSeats;

    selectedSeat.innerHTML += `<li class="text-base font-normal flex justify-between">
  <span>${event.innerText}</span>
  <span>Economy</span>
  <span>550</span>
  </li>`;

    totalPrice += 550;
    totalPriceEl.innerText = totalPrice.toFixed(2);

    if (selectedList.length > 3) {
      couponField.removeAttribute("disabled");
      couponBtn.removeAttribute("disabled");
    }

    document.getElementById("worning-text").classList.add("hidden");
  } else {
    return alert("Maximum Seats Books");
  }
}

// Coupon Button Function
document.getElementById("coupon-btn").addEventListener("click", function () {
  const couponInputValue = couponField.value;
  let couponSave = 0;

  if (couponInputValue != "NEW15" && couponInputValue != "Couple 20") {
    alert("Your code is not valid!");
    return;
  }
  if (couponInputValue === "NEW15") {
    couponSave = totalPrice * 0.15;
  } else if (couponInputValue === "Couple 20") {
    couponSave = totalPrice * 0.2;
  }

  const showCouponPrice = document.getElementById("show-coupon-price");
  showCouponPrice.innerHTML = `
  <p>Discount:</p>
  <p>
    <span>- BDT: </span>
    <span>${couponSave.toFixed(2)}</span>
  </p>
  `;

  const grandTotalValue = totalPrice - couponSave;
  grandTotal.innerText = grandTotalValue.toFixed(2);
});

phoneNumberEl.addEventListener("input", function (event) {
  const inputValue = event.target.value;
  if (inputValue.length >= 11) {
    nextBtn.removeAttribute("disabled");
  }
});
document.getElementById("btn-continue").addEventListener("click", function(){
  window.location.reload();
})