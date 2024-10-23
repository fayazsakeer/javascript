
  let ar = []
  let form = document.getElementById('serviceForm');
  let detailsList = document.getElementById('detailsList');
  let generateBillButton = document.getElementById('generateBill');
  let billDiv = document.getElementById('bill');
  let serviceData = {};

  form.addEventListener('submit', (e) => {
    e.preventDefault();
   

    
    let brand = document.getElementById('brand').value;
    let model = document.getElementById('model').value;
    let year = document.getElementById('year').value;
    let issue = document.getElementById('issue').value;
    let owner = document.getElementById('owner').value;

    
    detailsList.innerHTML = `
      <li>Brand: ${brand}</li>
      <li>Model: ${model}</li>
      <li>Year: ${year}</li>
      <li>Issue: ${issue}</li>
      <li>Owner: ${owner}</li>
    `;

    
    serviceData = {
      brand,
      model,
      year,
      issue,
      owner
    };
      
    // ar.push(serviceData)
    // detailsList.innerHTML=
    // ar.map((data, index) =>{

    // })
    
    generateBillButton.style.display = 'block';
  });

  
  class Bill {
    constructor(data) {
      this.brand = data.brand;
      this.model = data.model;
      this.year = data.year;
      this.issue = data.issue;
      this.owner = data.owner;
    }

    generateDummyBill() {
      return `
        <h3>Garage Service Bill</h3>
        <p><strong>Owner:</strong> ${this.owner}</p>
        <p><strong>Car:</strong> ${this.year} ${this.brand} ${this.model}</p>
        <p><strong>Issue:</strong> ${this.issue}</p>
        <p><strong>Total Cost:</strong> Rs 10000 (Estimate)</p>
      `;
    }
  }


  generateBillButton.addEventListener('click', () => {
    let bill = new Bill(serviceData);
    billDiv.innerHTML = bill.generateDummyBill();
    billDiv.style.display = 'block';
  });
