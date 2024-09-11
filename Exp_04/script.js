class Person {
  constructor(name, email, mobile) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
  }

  printDetails = () => {
    console.log(`Name: ${this.name}, Email: ${this.email}, Mobile: ${this.mobile}`);
  };
}

class Student extends Person {
  constructor(name, email, mobile, rollNo) {
    super(name, email, mobile);
    this.rollNo = rollNo;
    if (this.rollNo === 0) throw new Error("Roll number cannot be zero");
  }

  printDetails() {
    super.printDetails();
    console.log(`Roll Number: ${this.rollNo}`);
  }
}

document.getElementById("orderForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const size = document.getElementById("size").value;
  const color = document.getElementById("color").value;
  const quantity = document.getElementById("quantity").value;
  const message = document.getElementById("message").value;

  // Validation
  if (!validateMobile(mobile)) {
    alert("Mobile number must be 10 digits long.");
    return;
  }

  try {
    // Create and print Student object
    const rollNo = 1; // Example roll number
    const student = new Student(name, email, mobile, rollNo);
    student.printDetails();

    // Generate receipt
    generateReceipt(name, email, mobile, size, color, quantity, message);
  } catch (error) {
    alert(error.message);
  }
});

function validateMobile(mobile) {
  const mobilePattern = /^\d{10}$/;
  return mobilePattern.test(mobile);
}

function generateReceipt(name, email, mobile, size, color, quantity, message) {
  const receipt = document.getElementById("receipt");
  const date = new Date();
  const dateString = date.toLocaleDateString() + " " + date.toLocaleTimeString();

  receipt.innerHTML = `
    <h2>Order Receipt</h2>
    <p><strong>Date:</strong> ${dateString}</p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Mobile No:</strong> ${mobile}</p>
    <p><strong>T-Shirt Size:</strong> ${size}</p>
    <p><strong>T-Shirt Color:</strong> ${color}</p>
    <p><strong>Quantity:</strong> ${quantity}</p>
    <p><strong>Message on T-Shirt:</strong> ${message}</p>
  `;
  receipt.style.display = "block";
}
