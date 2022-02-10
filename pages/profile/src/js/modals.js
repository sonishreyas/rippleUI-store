const handleCardButtons = (modal) => {
	const editAddressBtn = document.querySelectorAll(".edit-btn");
	const deleteAddressBtn = document.querySelectorAll(".delete-btn");
	editAddressBtn.forEach((item) => {
		item.addEventListener("click", () => {
			modal.style.display = "block";
		});
	});
	deleteAddressBtn.forEach((item) => {
		item.addEventListener("click", () => {
			item.parentElement.parentElement.parentElement.style.display = "none";
		});
	});
};

const handleModal = () => {
	const modal = document.querySelector(
		".profile-vertical-tabs-container .modal-container"
	);
	const addNewAddressBtn = document.querySelector(
		".profile-vertical-tabs-container .profile-header .address-btn"
	);
	const cancelBtn = document.querySelector(
		".profile-vertical-tabs-container .modal-container .cancel-btn"
	);
	const saveBtn = document.querySelector(
		".profile-vertical-tabs-container .modal-container .save-btn"
	);
	const addressForm = document.querySelector(
		".profile-vertical-tabs-container .input-form"
	);
	const addAddressPath = document.querySelector(
		".profile-vertical-tabs-container .address-container .profile-container ul"
	);

	addNewAddressBtn.addEventListener("click", () => {
		modal.style.display = "block";
	});

	cancelBtn.addEventListener("click", () => {
		modal.style.display = "none";
	});

	saveBtn.addEventListener("click", () => {
		const formData = new FormData(addressForm);
		addAddressPath.innerHTML += `<li class="no-list">
      <article class="card basic-card .flex-jc-ac card-shadow">
        <h2 class="name">${formData.get("name")}</h2>
        <p class="address">
        ${formData.get("address")}
        </p>
        <p class="city">${formData.get("city")}</p>
        <p class="state">${formData.get("state")}</p>
        <p class="country">${formData.get("country")}</p>
        <p class="pincode">${formData.get("pincode")}</p>
        <section class="card-footer">
          <button class="primary-btn edit-btn">Edit</button>
          <button class="primary-btn outline delete-btn">Delete</button>
        </section>
      </article>
    </li>`;
		handleCardButtons(modal);
		modal.style.display = "none";
	});
	handleCardButtons(modal);
};

export { handleModal };
