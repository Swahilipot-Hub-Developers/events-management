// EventTicketingForm.js
import { useState } from 'react';

const Ticketing= () => {
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [selectedTicketType, setSelectedTicketType] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [mpesaNumber, setMpesaNumber] = useState('');
  const [bankDetails, setBankDetails] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [creditCardExpiry, setCreditCardExpiry] = useState('');
  const [creditCardCVC, setCreditCardCVC] = useState('');

  const handleTicketQuantityChange = (e) => {
    setTicketQuantity(parseInt(e.target.value, 10));
  };

  const handleTicketTypeChange = (e) => {
    setSelectedTicketType(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const handleMpesaNumberChange = (e) => {
    setMpesaNumber(e.target.value);
  };

  const handleBankDetailsChange = (e) => {
    setBankDetails(e.target.value);
  };

  const handleCreditCardNumberChange = (e) => {
    setCreditCardNumber(e.target.value);
  };

  const handleCreditCardExpiryChange = (e) => {
    setCreditCardExpiry(e.target.value);
  };

  const handleCreditCardCVCChange = (e) => {
    setCreditCardCVC(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions on form submission, including handling payment details
    console.log('Ticket Quantity:', ticketQuantity);
    console.log('Selected Ticket Type:', selectedTicketType);
    console.log('Selected Payment Method:', selectedPaymentMethod);

    if (selectedPaymentMethod === 'mpesa') {
      console.log('M-Pesa Number:', mpesaNumber);
    } else if (selectedPaymentMethod === 'bank') {
      console.log('Bank Details:', bankDetails);
    } else if (selectedPaymentMethod === 'creditCard') {
      console.log('Credit Card Number:', creditCardNumber);
      console.log('Credit Card Expiry:', creditCardExpiry);
      console.log('Credit Card CVC:', creditCardCVC);
    }

    // ... (other form data handling)
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="mb-3 text-primary">
        <label htmlFor="ticketQuantity" className="form-label">
          Number of Tickets
        </label>
        <input
          type="number"
          className="form-control"
          id="ticketQuantity"
          value={ticketQuantity}
          onChange={handleTicketQuantityChange}
        />
      </div>

      <div className="mb-3 text-primary">
        <label htmlFor="ticketType" className="form-label">
          Ticket Type
        </label>
        <select
          className="form-control"
          id="ticketType"
          value={selectedTicketType}
          onChange={handleTicketTypeChange}
        >
          <option value="">Select Ticket Type</option>
          <option value="vvip">VVIP</option>
          <option value="vip">VIP</option>
          <option value="regular">Regular</option>
        </select>
      </div>

      <div className="mb-3 text-primary">
        <label htmlFor="paymentMethod" className="form-label">
          Payment Method
        </label>
        <select
          className="form-control"
          id="paymentMethod"
          value={selectedPaymentMethod}
          onChange={handlePaymentMethodChange}
        >
          <option value="">Select Payment Method</option>
          <option value="mpesa">M-Pesa</option>
          <option value="bank">Bank Transfer</option>
          <option value="creditCard">Credit Card</option>
          <option value="visa">Visa</option>
        </select>
      </div>

      {selectedPaymentMethod === 'mpesa' && (
        <div className="mb-3 text-primary">
          <label htmlFor="mpesaNumber" className="form-label">
            M-Pesa Number
          </label>
          <input
            type="text"
            className="form-control"
            id="mpesaNumber"
            value={mpesaNumber}
            onChange={handleMpesaNumberChange}
          />
        </div>
      )}

      {selectedPaymentMethod === 'bank' && (
        <div className="mb-3 text-primary">
          <label htmlFor="bankDetails" className="form-label">
            Bank Details
          </label>
          <textarea
            className="form-control"
            id="bankDetails"
            rows="3"
            value={bankDetails}
            onChange={handleBankDetailsChange}
          />
        </div>
      )}

      {(selectedPaymentMethod === 'creditCard' || selectedPaymentMethod === 'visa') && (
        <div>
          <div className="mb-3 text-primary">
            <label htmlFor="creditCardNumber" className="form-label">
              Credit Card Number
            </label>
            <input
              type="text"
              className="form-control"
              id="creditCardNumber"
              value={creditCardNumber}
              onChange={handleCreditCardNumberChange}
            />
          </div>
          <div className="mb-3 text-primary">
            <label htmlFor="creditCardExpiry" className="form-label">
              Credit Card Expiry
            </label>
            <input
              type="text"
              className="form-control"
              id="creditCardExpiry"
              value={creditCardExpiry}
              onChange={handleCreditCardExpiryChange}
            />
          </div>
          <div className="mb-3 text-primary">
            <label htmlFor="creditCardCVC" className="form-label">
              Credit Card CVC
            </label>
            <input
              type="text"
              className="form-control"
              id="creditCardCVC"
              value={creditCardCVC}
              onChange={handleCreditCardCVCChange}
            />
          </div>
        </div>
      )}

      <button type="submit" className="btn btn-primary">
        Purchase Tickets
      </button>
    </form>
  );
};

export default Ticketing;
