// import React, { useEffect } from 'react';
// import './SignUp.css';

// function SignUp() {

//     useEffect(() => {
//         const form = document.getElementById('createAccountForm');
//         const genderButtons = document.getElementById('genderButtons');
//         const showMeButtons = document.getElementById('showMeButtons');
//         const imageUploadContainer = document.getElementById('imageUploadContainer');

//         function setActiveButton(buttonGroup, clickedButton) {
//             buttonGroup.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
//             clickedButton.classList.add('active');
//         }

//         genderButtons.addEventListener('click', function(e) {
//             if (e.target.tagName === 'BUTTON') {
//                 setActiveButton(genderButtons, e.target);
//             }
//         });

//         showMeButtons.addEventListener('click', function(e) {
//             if (e.target.tagName === 'BUTTON') {
//                 setActiveButton(showMeButtons, e.target);
//             }
//         });

//         imageUploadContainer.addEventListener('change', function(e) {
//             if (e.target.classList.contains('image-upload')) {
//                 const file = e.target.files[0];
//                 if (file) {
//                     const reader = new FileReader();
//                     reader.onload = function(e) {
//                         const img = document.createElement('img');
//                         img.src = e.target.result;
//                         const uploadBox = e.target.closest('.image-upload-box');
//                         uploadBox.innerHTML = '';
//                         uploadBox.appendChild(img);
//                         uploadBox.classList.add('has-image');

//                         // Create a new upload box if there's less than 6
//                         if (imageUploadContainer.children.length < 6) {
//                             const newUploadBox = document.createElement('div');
//                             newUploadBox.className = 'image-upload-box';
//                             newUploadBox.innerHTML = `<input type="file" accept="image/*" class="image-upload" data-index="${imageUploadContainer.children.length}">`;
//                             imageUploadContainer.appendChild(newUploadBox);
//                         }
//                     }
//                     reader.readAsDataURL(file);
//                 }
//             }
//         });

//         form.addEventListener('submit', function(e) {
//             e.preventDefault();
//             const formData = new FormData(form);
//             const data = Object.fromEntries(formData.entries());

//             // Add selected gender and showMe values
//             data.gender = genderButtons.querySelector('.active')?.dataset.value || '';
//             data.showMe = showMeButtons.querySelector('.active')?.dataset.value || '';

//             // Add uploaded images
//             data.images = [];
//             imageUploadContainer.querySelectorAll('img').forEach((img, index) => {
//                 data.images.push({ index, src: img.src });
//             });

//             console.log('Form submitted:', data);
//             // Here you would typically send the data to a server
//             alert('Form submitted successfully!');
//         });
//     }, []); // Add an empty dependency array to ensure it runs once after the component mounts

//     return (
//         <div className="signup">
//             <h1>CREATE ACCOUNT</h1>
//             <form id="createAccountForm">
//                 <div className="form-detail">
//                     <div className="left-column">
//                         <div className="form-group">
//                             <label htmlFor="firstName">First Name</label>
//                             <input type="text" id="firstName" name="firstName" required />
//                         </div>
//                         <div className="form-group">
//                             <label>Birthday</label>
//                             <div className="birthday-inputs">
//                                 <input type="number" id="birthDay" name="birthDay" placeholder="DD" min="1" max="31" required />
//                                 <input type="number" id="birthMonth" name="birthMonth" placeholder="MM" min="1" max="12" required />
//                                 <input type="number" id="birthYear" name="birthYear" placeholder="YYYY" min="1900" max="2006" required />
//                             </div>
//                         </div>
//                         <div className="form-group">
//                             <label>Gender</label>
//                             <div className="button-group" id="genderButtons">
//                                 <button type="button" data-value="Man">Man</button>
//                                 <button type="button" data-value="Woman">Woman</button>
//                                 <button type="button" data-value="More">More</button>
//                             </div>
//                         </div>
//                         <div className="form-group">
//                             <label>Show Me</label>
//                             <div className="button-group" id="showMeButtons">
//                                 <button type="button" data-value="Man">Man</button>
//                                 <button type="button" data-value="Woman">Woman</button>
//                                 <button type="button" data-value="Everyone">Everyone</button>
//                             </div>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="aboutMe">About me</label>
//                             <textarea id="aboutMe" name="aboutMe" rows="4"></textarea>
//                         </div>
//                     </div>
//                     <div className="right-column">
//                         <div className="form-group">
//                             <label>Profile Images</label>
//                             <div className="image-upload-container" id="imageUploadContainer">
//                                 <div className="image-upload-box">
//                                     <input type="file" accept="image/*" className="image-upload" data-index="0" />
//                                 </div>
//                                 <div className="image-upload-box">
//                                     <input type="file" accept="image/*" className="image-upload" data-index="1" />
//                                 </div>
//                                 <div className="image-upload-box">
//                                     <input type="file" accept="image/*" className="image-upload" data-index="2" />
//                                 </div>
//                                 <div className="image-upload-box">
//                                     <input type="file" accept="image/*" className="image-upload" data-index="3" />
//                                 </div>
//                                 <div className="image-upload-box">
//                                     <input type="file" accept="image/*" className="image-upload" data-index="4" />
//                                 </div>
//                                 <div className="image-upload-box">
//                                     <input type="file" accept="image/*" className="image-upload" data-index="5" />
//                                 </div>
//                                 <div className="image-upload-box">
//                                     <input type="file" accept="image/*" className="image-upload" data-index="6" />
//                                 </div>
//                                 <div className="image-upload-box">
//                                     <input type="file" accept="image/*" className="image-upload" data-index="7" />
//                                 </div>
//                                 <div className="image-upload-box">
//                                     <input type="file" accept="image/*" className="image-upload" data-index="8" />
//                                 </div>
//                                 <div className="image-upload-box">
//                                     <input type="file" accept="image/*" className="image-upload" data-index="9" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <button type="submit" id="submitBtn">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default SignUp;



import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import './SignUp.css';

function SignUp() {
    useEffect(() => {
        const form = document.getElementById('createAccountForm');
        const genderButtons = document.getElementById('genderButtons');
        const showMeButtons = document.getElementById('showMeButtons');
        const imageUploadContainer = document.getElementById('imageUploadContainer');

        function setActiveButton(buttonGroup, clickedButton) {
            buttonGroup.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
            clickedButton.classList.add('active');
        }

        // Event handler for gender and show-me buttons
        const handleButtonClick = (e, buttonGroup) => {
            if (e.target.tagName === 'BUTTON') {
                setActiveButton(buttonGroup, e.target);
            }
        };

        // Image preview and additional upload box logic
        const handleImageChange = (e) => {
            if (e.target.classList.contains('image-upload')) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        const img = document.createElement('img');
                        img.src = event.target.result;
                        const uploadBox = e.target.closest('.image-upload-box');
                        uploadBox.innerHTML = '<input type="file" accept="image/*" class="image-upload" data-index="${imageUploadContainer.children.length}">';
                        uploadBox.appendChild(img);
                        uploadBox.classList.add('has-image');

                        
                        const imageCount = imageUploadContainer.querySelectorAll('.has-image').length;
                        if (imageCount < 10 && imageUploadContainer.children.length < 10) {
                            const newUploadBox = document.createElement('div');
                            newUploadBox.className = 'image-upload-box';
                            newUploadBox.innerHTML = `<input type="file" accept="image/*" class="image-upload" data-index="${imageUploadContainer.children.length}">`;
                            imageUploadContainer.appendChild(newUploadBox);
                        }
                    };
                    reader.readAsDataURL(file);
                }
            }
        };

        // Form submission
        const handleFormSubmit = (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            data.gender = genderButtons.querySelector('.active')?.dataset.value || '';
            data.showMe = showMeButtons.querySelector('.active')?.dataset.value || '';
            data.images = Array.from(imageUploadContainer.querySelectorAll('img')).map((img, index) => ({
                index,
                src: img.src,
            }));

            console.log('Form submitted:', data);
            alert('Form submitted successfully!');
        };

        
        genderButtons.addEventListener('click', (e) => handleButtonClick(e, genderButtons));
        showMeButtons.addEventListener('click', (e) => handleButtonClick(e, showMeButtons));
        imageUploadContainer.addEventListener('change', handleImageChange);
        form.addEventListener('submit', handleFormSubmit);

        
        return () => {
            genderButtons.removeEventListener('click', (e) => handleButtonClick(e, genderButtons));
            showMeButtons.removeEventListener('click', (e) => handleButtonClick(e, showMeButtons));
            imageUploadContainer.removeEventListener('change', handleImageChange);
            form.removeEventListener('submit', handleFormSubmit);
        };
    }, []);

    return (
        <div className="signup">
            <h1>CREATE ACCOUNT</h1>
            <form id="createAccountForm">
                <div className="form-detail">
                    <div className="left-column">
                        
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" required />
                        </div>
                        <div className="form-group">
                            <label>Birthday</label>
                            <div className="birthday-inputs">
                                <input type="number" id="birthDay" name="birthDay" placeholder="DD" min="1" max="31" required />
                                <input type="number" id="birthMonth" name="birthMonth" placeholder="MM" min="1" max="12" required />
                                <input type="number" id="birthYear" name="birthYear" placeholder="YYYY" min="1900" max="2006" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Gender</label>
                            <div className="button-group" id="genderButtons">
                                <button type="button" data-value="Man">Male <FontAwesomeIcon icon={faMars} style={{ color: "#B197FC" }} /> </button>
                                <button type="button" data-value="Woman">Female <FontAwesomeIcon icon={faVenus} style={{ color: "#c8147d" }} />  </button>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Show Me</label>
                            <div className="button-group" id="showMeButtons">
                                <button type="button" data-value="Man">Man <FontAwesomeIcon icon={faMars} style={{ color: "#B197FC" }} /></button>
                                <button type="button" data-value="Woman">Woman <FontAwesomeIcon icon={faVenus} style={{ color: "#c8147d" }} /></button>
                                <button type="button" data-value="Everyone">Everyone <FontAwesomeIcon icon={faMars} style={{ color: "#B197FC" }} /> <FontAwesomeIcon icon={faVenus} style={{ color: "#c8147d" }} /></button>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="aboutMe">About me</label>
                            <textarea id="aboutMe" name="aboutMe" rows="4"></textarea>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="form-group">
                            <label>Profile Images</label>
                            <div className="image-upload-container" id="imageUploadContainer">
                                <div className="image-upload-box">
                                    <input type="file" accept="image/*" capture="user" className="image-upload" data-index="0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" id="submitBtn">Submit</button>
            </form>
        </div>
    );
}

export default SignUp;
