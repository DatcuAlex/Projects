document.addEventListener('DOMContentLoaded', function () {
    showInfo();
  });
  window.onload = function() {
    document.getElementById("status-type").value = "active";
    statusInfo();  
};
document.addEventListener('scroll', () => {
    const events = document.querySelectorAll('.event');
    const triggerPoint = window.innerHeight * 0.75;

    events.forEach(event => {
        const eventTop = event.getBoundingClientRect().top;

        if (eventTop < triggerPoint) {
            event.classList.add('visible');
        }
    }); 
    });
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            includedLanguages: 'ro,en,pt,es,uk',
            autoDisplay: false,
        }, 'google_translate_element');
    }
        function changeLanguage(language) {
        if (language) {
            var selectField = document.querySelector(".goog-te-combo");
            if (selectField) {
                selectField.value = language;
                selectField.dispatchEvent(new Event('change'));
            }
        }
    }
function showInfo() {
    var select = document.getElementById("plangere-type");
    var value = select.value;
    var infoBox = document.getElementById("info-box");
    infoBox.style.display = 'none';
    if (value === "all") {
        var allComplaints = `
          <div class="complaint">
        <h3>Complaint 1:</h3>
        <p><b>Request Number:</b> #BW-001</p>
        <p><b>Date:</b> December 14, 2024</p>
        <p><b>Description:</b> One of the windows in apartment 2B, installed with Alumil profiles, was shattered during a storm. The frame is intact, but the glass needs to be replaced, and a detailed check-up of the installation is required.</p>
        <p><b>Location:</b> X Street, Block A, Apartment 2B</p>
        <p><b>Status:</b> Active</p>
        <p><b>Priority:</b> High</p>
      </div>
      <div class="complaint">
        <h3>Complaint 2:</h3>
        <p><b>Request Number:</b> #BW-002</p>
        <p><b>Date:</b> December 13, 2024</p>
        <p><b>Description:</b> The large window in the conference room on the 3rd floor, made using Alumil's advanced aluminum window system, has cracked. The glass needs to be replaced with energy-efficient glass.</p>
        <p><b>Location:</b> XYZ Office Building, Conference Room, 3rd Floor</p>
        <p><b>    Status:</b>Active</p>
        <p><b>Priority:</b> Medium</p>
      </div>
      <div class="complaint">
        <h3>Complaint 3:</h3>
        <p><b>Request Number:</b> #BW-003</p>
        <p><b>Date:</b> December 12, 2024</p>
        <p><b>Description:</b> The storefront window, made with Alumil's aluminum framing system, was broken during an accident. The glass is cracked and should be replaced urgently.</p>
        <p><b>Location:</b> Y Street, Shop Z</p>
        <p><b>Status:</b> Solved</p>
        <p><b>Priority:</b> Urgent</p>
        </div>
        <div class="complaint">
        <h3>Complaint 4:</h3>
        <p><b>Request Number:</b> #DE-001</p>
        <p><b>Date:</b> December 14, 2024</p>
        <p><b>Description:</b> The entrance door of apartment 5A, made with Alumil profiles, is not closing properly. The hinges seem to be misaligned, causing the door to stay ajar. The issue needs to be resolved to ensure safety and energy efficiency.</p>
        <p><b>Location:</b> X Street, Block B, Apartment 5A</p>
        <p><b>Status:</b>Solved</p>
        <p><b>Priority:</b> High</p>
        </div>
        <div class="complaint">
        <h3>Complaint 5:</h3>
        <p><b>Request Number:</b> #DE-002</p>
        <p><b>Date:</b> December 13, 2024</p>
        <p><b>Description:</b> The main entrance door of the office building, fitted with Alumil's aluminum profiles, is not locking correctly. The locking mechanism seems faulty, preventing the door from securing properly. Immediate repair is needed.</p>
        <p><b>Location:</b> XYZ Office Building, Main Entrance</p>
        <p><b>Status:</b>Solved</p>
        <p><b>Priority:</b> Urgent</p>
        </div>
        <div class="complaint">
        <h3>Complaint 6:</h3>
        <p><b>Request Number:</b> #DE-003</p>
        <p><b>Date:</b> December 12, 2024</p>
        <p><b>Description:</b> The entrance door of the retail store has a malfunctioning automatic closing mechanism. The door fails to close completely, leaving a gap that compromises security. It needs to be repaired or replaced as soon as possible.</p>
        <p><b>Location:</b> Y Street, Shop A</p>
        <p><b>Status:</b>Active</p>
        <p><b>Priority:</b> Medium</p>
        </div>
        <div class="complaint">
              <h3>Complaint 7:</h3>
              <p><b>Request Number:</b> #DWS-001</p>
              <p><b>Date:</b> December 14, 2024</p>
              <p><b>Description:</b> The shutter on the living room window of apartment 10B is malfunctioning. The mechanism is jammed, and it cannot be closed completely. This issue needs to be addressed as soon as possible to ensure privacy and security.</p>
              <p><b>Location:</b> X Street, Block A, Apartment 10B</p>
              <p><b>Status:</b>Active</p>
              <p><b>Priority:</b> High</p>
            </div>
            <div class="complaint">
              <h3>Complaint 8:</h3>
              <p><b>Request Number:</b> #DWS-002</p>
              <p><b>Date:</b> December 13, 2024</p>
              <p><b>Description:</b> One of the window shutters in the office building on the second floor is stuck. It appears to have been misaligned, causing it to be unable to open or close fully. Needs urgent repair.</p>
              <p><b>Location:</b> XYZ Office Building, 2nd Floor</p>
              <p><b>Status:</b>Active</p>
              <p><b>Priority:</b> Medium</p>
            </div>
            <div class="complaint">
              <h3>Complaint 9:</h3>
              <p><b>Request Number:</b> #DWS-003</p>
              <p><b>Date:</b> December 12, 2024</p>
              <p><b>Description:</b> The shutter on the kitchen window in apartment 8D is broken. The slats are damaged, and the mechanism is unable to function properly. This needs to be replaced immediately.</p>
              <p><b>Location:</b> Y Street, Block B, Apartment 8D</p>
              <p><b>Status:</b>Solved</p>
              <p><b>Priority:</b> Urgent</p>
            </div>
        <div class="complaint">    
        <h3>Complaint 10:</h3>
        <p><b>Request Number:</b> #DRS-001</p>
        <p><b>Date:</b> December 14, 2024</p>
        <p><b>Description:</b> The roof skylight in the office building has a leaking issue. During rain, water is dripping into the building, which could lead to further damage if not fixed.</p>
        <p><b>Location:</b> XYZ Office Building, Roof</p>
        <p><b>Status:</b>Active</p>
        <p><b>Priority:</b> High</p>
      </div>
      <div class="complaint">
        <h3>Complaint 11:</h3>
        <p><b>Request Number:</b> #DRS-002</p>
        <p><b>Date:</b> December 13, 2024</p>
        <p><b>Description:</b> The skylight in the living room of apartment 3C is broken. The glass is cracked, and it is letting in drafts. The skylight needs to be replaced.</p>
        <p><b>Location:</b> X Street, Block C, Apartment 3C</p>
        <p><b>Status:</b>Active</p>
        <p><b>Priority:</b> Medium</p>
      </div>
      <div class="complaint">
        <h3>Complaint 12:</h3>
        <p><b>Request Number:</b> #DRS-003</p>
        <p><b>Date:</b> December 12, 2024</p>
        <p><b>Description:</b> The roof skylight in the store has broken due to heavy winds. The glass is shattered, and it needs immediate replacement.</p>
        <p><b>Location:</b> Y Street, Shop B</p>
        <p><b>Status:</b>Active</p>
        <p><b>Priority:</b> Urgent</p>
      </div>
      <div class="complaint">
              <h3>Complaint 13:</h3>
              <p><b>Request Number:</b> #IM-001</p>
              <p><b>Date:</b> December 14, 2024</p>
              <p><b>Description:</b> The construction project was delayed due to insufficient delivery of building materials. Some essential materials were missing from the shipment, which has slowed down progress.</p>
              <p><b>Location:</b> XYZ Construction Site</p>
              <p><b>Status:</b>Solved</p>
              <p><b>Priority:</b> High</p>
            </div>
            <div class="complaint">
              <h3>Complaint 14:</h3>
              <p><b>Request Number:</b> #IM-002</p>
              <p><b>Date:</b> December 13, 2024</p>
              <p><b>Description:</b> The company has reported missing materials during the order for a residential project. Some specific types of insulation were not delivered as planned.</p>
              <p><b>Location:</b> ABC Construction Site</p>
              <p><b>Status:</b>Solved</p>
              <p><b>Priority:</b> Medium</p>
            </div>
            <div class="complaint">
              <h3>Complaint 15:</h3>
              <p><b>Request Number:</b> #IM-003</p>
              <p><b>Date:</b> December 12, 2024</p>
              <p><b>Description:</b> The delivery of materials for the project was incomplete. The team cannot continue working until the materials are restocked.</p>
              <p><b>Location:</b> Y Street Construction Site</p>
              <p><b>Status:</b>Active</p>
              <p><b>Priority:</b> Urgent</p>
            </div>
            <div class="complaint">
        <h3>Complaint 16:</h3>
        <p><b>Request Number:</b> #BGR-001</p>
        <p><b>Date:</b> December 14, 2024</p>
        <p><b>Description:</b> The glass railing system in the balcony has been broken during transportation. The railing needs to be replaced as soon as possible.</p>
        <p><b>Location:</b> XYZ Residence, Balcony</p>
        <p><b>Status:</b>Active</p>
        <p><b>Priority:</b> High</p>
      </div>
      <div class="complaint">
        <h3>Complaint 17:</h3>
        <p><b>Request Number:</b> #BGR-002</p>
        <p><b>Date:</b> December 13, 2024</p>
        <p><b>Description:</b> The glass railing on the staircase was damaged during installation. The glass needs to be replaced, and the system needs to be checked for safety standards.</p>
        <p><b>Location:</b> ABC Building, Staircase</p>
        <p><b>Status:</b>Solved</p>
        <p><b>Priority:</b> Medium</p>
      </div>
      <div class="complaint">
        <h3>Complaint 18:</h3>
        <p><b>Request Number:</b> #BGR-003</p>
        <p><b>Date:</b> December 12, 2024</p>
        <p><b>Description:</b> The glass railing on the terrace has shattered. The glass was weak and needs immediate replacement to avoid injury.</p>
        <p><b>Location:</b> Y Street, Terrace</p>
        <p><b>Status:</b>Active</p>
        <p><b>Priority:</b> Urgent</p>
      </div>
        `;
        infoBox.style.display = 'block';
        infoBox.innerHTML = allComplaints;
      }
    else
    if (value !== "all") {
      var infoText = "";
    
      switch (value) {
        case "broken-windows":
        var complaintInfo =`
         <div class="complaint">
        <h3>Complaint 1:</h3>
        <p><b>Request Number:</b> #BW-001</p>
        <p><b>Date:</b> December 14, 2024</p>
        <p><b>Description:</b> One of the windows in apartment 2B, installed with Alumil profiles, was shattered during a storm. The frame is intact, but the glass needs to be replaced, and a detailed check-up of the installation is required.</p>
        <p><b>Location:</b> X Street, Block A, Apartment 2B</p>
        <p><b>Status:</b>Active</p>
        <p><b>Priority:</b> High</p>
      </div>
      <div class="complaint">
        <h3>Complaint 2:</h3>
        <p><b>Request Number:</b> #BW-002</p>
        <p><b>Date:</b> December 13, 2024</p>
        <p><b>Description:</b> The large window in the conference room on the 3rd floor, made using Alumil's advanced aluminum window system, has cracked. The glass needs to be replaced with energy-efficient glass.</p>
        <p><b>Location:</b> XYZ Office Building, Conference Room, 3rd Floor</p>
        <p><b>    Status:</b>Active</p>
        <p><b>Priority:</b> Medium</p>
      </div>
      <div class="complaint">
        <h3>Complaint 3:</h3>
        <p><b>Request Number:</b> #BW-003</p>
        <p><b>Date:</b> December 12, 2024</p>
        <p><b>Description:</b> The storefront window, made with Alumil's aluminum framing system, was broken during an accident. The glass is cracked and should be replaced urgently.</p>
        <p><b>Location:</b> Y Street, Shop Z</p>
        <p><b>Status:</b>Solved</p>
        <p><b>Priority:</b> Urgent</p>
        </div>`;
          break;
        case "defective-entrance-doors":
            var complaintInfo =`
        <div class="complaint">
        <h3>Complaint 1:</h3>
        <p><b>Request Number:</b> #DE-001</p>
        <p><b>Date:</b> December 14, 2024</p>
        <p><b>Description:</b> The entrance door of apartment 5A, made with Alumil profiles, is not closing properly. The hinges seem to be misaligned, causing the door to stay ajar. The issue needs to be resolved to ensure safety and energy efficiency.</p>
        <p><b>Location:</b> X Street, Block B, Apartment 5A</p>
        <p><b>Status:</b> Solved</p>
        <p><b>Priority:</b> High</p>
        </div>
        <div class="complaint">
        <h3>Complaint 2:</h3>
        <p><b>Request Number:</b> #DE-002</p>
        <p><b>Date:</b> December 13, 2024</p>
        <p><b>Description:</b> The main entrance door of the office building, fitted with Alumil's aluminum profiles, is not locking correctly. The locking mechanism seems faulty, preventing the door from securing properly. Immediate repair is needed.</p>
        <p><b>Location:</b> XYZ Office Building, Main Entrance</p>
        <p><b>Status:</b>Solved</p>
        <p><b>Priority:</b> Urgent</p>
        </div>
        <div class="complaint">
        <h3>Complaint 3:</h3>
        <p><b>Request Number:</b> #DE-003</p>
        <p><b>Date:</b> December 12, 2024</p>
        <p><b>Description:</b> The entrance door of the retail store has a malfunctioning automatic closing mechanism. The door fails to close completely, leaving a gap that compromises security. It needs to be repaired or replaced as soon as possible.</p>
        <p><b>Location:</b> Y Street, Shop A</p>
        <p><b>Status:</b>Active</p>
        <p><b>Priority:</b> Medium</p>
        </div>
`;
          break;
        case "defective-window-shutters":
            var complaintInfo = `
            <div class="complaint">
              <h3>Complaint 1:</h3>
              <p><b>Request Number:</b> #DWS-001</p>
              <p><b>Date:</b> December 14, 2024</p>
              <p><b>Description:</b> The shutter on the living room window of apartment 10B is malfunctioning. The mechanism is jammed, and it cannot be closed completely. This issue needs to be addressed as soon as possible to ensure privacy and security.</p>
              <p><b>Location:</b> X Street, Block A, Apartment 10B</p>
              <p><b>Status:</b>Active</p>
              <p><b>Priority:</b> High</p>
            </div>
            <div class="complaint">
              <h3>Complaint 2:</h3>
              <p><b>Request Number:</b> #DWS-002</p>
              <p><b>Date:</b> December 13, 2024</p>
              <p><b>Description:</b> One of the window shutters in the office building on the second floor is stuck. It appears to have been misaligned, causing it to be unable to open or close fully. Needs urgent repair.</p>
              <p><b>Location:</b> XYZ Office Building, 2nd Floor</p>
              <p><b>Status:</b>Active</p>
              <p><b>Priority:</b> Medium</p>
            </div>
            <div class="complaint">
              <h3>Complaint 3:</h3>
              <p><b>Request Number:</b> #DWS-003</p>
              <p><b>Date:</b> December 12, 2024</p>
              <p><b>Description:</b> The shutter on the kitchen window in apartment 8D is broken. The slats are damaged, and the mechanism is unable to function properly. This needs to be replaced immediately.</p>
              <p><b>Location:</b> Y Street, Block B, Apartment 8D</p>
              <p><b>Status:</b>Solved</p>
              <p><b>Priority:</b> Urgent</p>
            </div>
          `;
          break;
        case "defective-roof-skylight":
          var complaintInfo=`<div class="complaint">
        <h3>Complaint 1:</h3>
        <p><b>Request Number:</b> #DRS-001</p>
        <p><b>Date:</b> December 14, 2024</p>
        <p><b>Description:</b> The roof skylight in the office building has a leaking issue. During rain, water is dripping into the building, which could lead to further damage if not fixed.</p>
        <p><b>Location:</b> XYZ Office Building, Roof</p>
        <p><b>Status:</b>Active</p>
        <p><b>Priority:</b> High</p>
      </div>
      <div class="complaint">
        <h3>Complaint 2:</h3>
        <p><b>Request Number:</b> #DRS-002</p>
        <p><b>Date:</b> December 13, 2024</p>
        <p><b>Description:</b> The skylight in the living room of apartment 3C is broken. The glass is cracked, and it is letting in drafts. The skylight needs to be replaced.</p>
        <p><b>Location:</b> X Street, Block C, Apartment 3C</p>
        <p><b>Status:</b>Active</p>
        <p><b>Priority:</b> Medium</p>
      </div>
      <div class="complaint">
        <h3>Complaint 3:</h3>
        <p><b>Request Number:</b> #DRS-003</p>
        <p><b>Date:</b> December 12, 2024</p>
        <p><b>Description:</b> The roof skylight in the store has broken due to heavy winds. The glass is shattered, and it needs immediate replacement.</p>
        <p><b>Location:</b> Y Street, Shop B</p>
        <p><b>Status:</b> Active</p>
        <p><b>Priority:</b> Urgent</p>
      </div>
    `;
          break;
        case "insufficient-materials":
            var complaintInfo = `
            <div class="complaint">
              <h3>Complaint 1:</h3>
              <p><b>Request Number:</b> #IM-001</p>
              <p><b>Date:</b> December 14, 2024</p>
              <p><b>Description:</b> The construction project was delayed due to insufficient delivery of building materials. Some essential materials were missing from the shipment, which has slowed down progress.</p>
              <p><b>Location:</b> XYZ Construction Site</p>
              <p><b>Status:</b>Solved</p>
              <p><b>Priority:</b> High</p>
            </div>
            <div class="complaint">
              <h3>Complaint 2:</h3>
              <p><b>Request Number:</b> #IM-002</p>
              <p><b>Date:</b> December 13, 2024</p>
              <p><b>Description:</b> The company has reported missing materials during the order for a residential project. Some specific types of insulation were not delivered as planned.</p>
              <p><b>Location:</b> ABC Construction Site</p>
              <p><b>Status:</b>Solved</p>
              <p><b>Priority:</b> Medium</p>
            </div>
            <div class="complaint">
              <h3>Complaint 3:</h3>
              <p><b>Request Number:</b> #IM-003</p>
              <p><b>Date:</b> December 12, 2024</p>
              <p><b>Description:</b> The delivery of materials for the project was incomplete. The team cannot continue working until the materials are restocked.</p>
              <p><b>Location:</b> Y Street Construction Site</p>
              <p><b>Status:</b>Active</p>
              <p><b>Priority:</b> Urgent</p>
            </div>
          `;
          break;
        case "broken-glass-railings":
            var complaintInfo = `
      <div class="complaint">
        <h3>Complaint 1:</h3>
        <p><b>Request Number:</b> #BGR-001</p>
        <p><b>Date:</b> December 14, 2024</p>
        <p><b>Description:</b> The glass railing system in the balcony has been broken during transportation. The railing needs to be replaced as soon as possible.</p>
        <p><b>Location:</b> XYZ Residence, Balcony</p>
        <p><b>Status:</b>Active</p>
        <p><b>Priority:</b> High</p>
      </div>
      <div class="complaint">
        <h3>Complaint 2:</h3>
        <p><b>Request Number:</b> #BGR-002</p>
        <p><b>Date:</b> December 13, 2024</p>
        <p><b>Description:</b> The glass railing on the staircase was damaged during installation. The glass needs to be replaced, and the system needs to be checked for safety standards.</p>
        <p><b>Location:</b> ABC Building, Staircase</p>
        <p><b>Status:</b>Solved</p>
        <p><b>Priority:</b> Medium</p>
      </div>
      <div class="complaint">
        <h3>Complaint 3:</h3>
        <p><b>Request Number:</b> #BGR-003</p>
        <p><b>Date:</b> December 12, 2024</p>
        <p><b>Description:</b> The glass railing on the terrace has shattered. The glass was weak and needs immediate replacement to avoid injury.</p>
        <p><b>Location:</b> Y Street, Terrace</p>
        <p><b>Status:</b>Active</p>
        <p><b>Priority:</b> Urgent</p>
      </div>
    `;
          break;
      }
        infoBox.style.display = 'block';
        infoBox.innerHTML = complaintInfo;
    }
  }
  function statusInfo() {
    var select = document.getElementById("status-type");
    var value = select.value;
    var infoBox = document.getElementById("info-box2");
    infoBox.style.display = 'none';
    if (value === "active") {
        var allComplaints = `
          <div class="complaint">
        <h3>Complaint 1:</h3>
        <p><b>Request Number:</b> #BW-001</p>
        <p><b>Date:</b> December 14, 2024</p>
        <p><b>Description:</b> One of the windows in apartment 2B, installed with Alumil profiles, was shattered during a storm. The frame is intact, but the glass needs to be replaced, and a detailed check-up of the installation is required.</p>
        <p><b>Location:</b> X Street, Block A, Apartment 2B</p>
        <p><b>Status:</b> Active</p>
        <p><b>Priority:</b> High</p>
      </div>
      <div class="complaint">
        <h3>Complaint 2:</h3>
        <p><b>Request Number:</b> #BW-002</p>
        <p><b>Date:</b> December 13, 2024</p>
        <p><b>Description:</b> The large window in the conference room on the 3rd floor, made using Alumil's advanced aluminum window system, has cracked. The glass needs to be replaced with energy-efficient glass.</p>
        <p><b>Location:</b> XYZ Office Building, Conference Room, 3rd Floor</p>
        <p><b>    Status:</b>Active</p>
        <p><b>Priority:</b> Medium</p>
      </div>
        <div class="complaint">
        <h3>Complaint 6:</h3>
        <p><b>Request Number:</b> #DE-003</p>
        <p><b>Date:</b> December 12, 2024</p>
        <p><b>Description:</b> The entrance door of the retail store has a malfunctioning automatic closing mechanism. The door fails to close completely, leaving a gap that compromises security. It needs to be repaired or replaced as soon as possible.</p>
        <p><b>Location:</b> Y Street, Shop A</p>
        <p><b>Status:</b>Active</p>
        <p><b>Priority:</b> Medium</p>
        </div>
        <div class="complaint">
              <h3>Complaint 7:</h3>
              <p><b>Request Number:</b> #DWS-001</p>
              <p><b>Date:</b> December 14, 2024</p>
              <p><b>Description:</b> The shutter on the living room window of apartment 10B is malfunctioning. The mechanism is jammed, and it cannot be closed completely. This issue needs to be addressed as soon as possible to ensure privacy and security.</p>
              <p><b>Location:</b> X Street, Block A, Apartment 10B</p>
              <p><b>Status:</b>Active</p>
              <p><b>Priority:</b> High</p>
            </div>
            <div class="complaint">
              <h3>Complaint 8:</h3>
              <p><b>Request Number:</b> #DWS-002</p>
              <p><b>Date:</b> December 13, 2024</p>
              <p><b>Description:</b> One of the window shutters in the office building on the second floor is stuck. It appears to have been misaligned, causing it to be unable to open or close fully. Needs urgent repair.</p>
              <p><b>Location:</b> XYZ Office Building, 2nd Floor</p>
              <p><b>Status:</b>Active</p>
              <p><b>Priority:</b> Medium</p>
            </div>
        <div class="complaint">    
        <h3>Complaint 10:</h3>
        <p><b>Request Number:</b> #DRS-001</p>
        <p><b>Date:</b> December 14, 2024</p>
        <p><b>Description:</b> The roof skylight in the office building has a leaking issue. During rain, water is dripping into the building, which could lead to further damage if not fixed.</p>
        <p><b>Location:</b> XYZ Office Building, Roof</p>
        <p><b>Status:</b>Active</p>
        <p><b>Priority:</b> High</p>
      </div>
      <div class="complaint">
        <h3>Complaint 11:</h3>
        <p><b>Request Number:</b> #DRS-002</p>
        <p><b>Date:</b> December 13, 2024</p>
        <p><b>Description:</b> The skylight in the living room of apartment 3C is broken. The glass is cracked, and it is letting in drafts. The skylight needs to be replaced.</p>
        <p><b>Location:</b> X Street, Block C, Apartment 3C</p>
        <p><b>Status:</b>Active</p>
        <p><b>Priority:</b> Medium</p>
      </div>
      <div class="complaint">
        <h3>Complaint 12:</h3>
        <p><b>Request Number:</b> #DRS-003</p>
        <p><b>Date:</b> December 12, 2024</p>
        <p><b>Description:</b> The roof skylight in the store has broken due to heavy winds. The glass is shattered, and it needs immediate replacement.</p>
        <p><b>Location:</b> Y Street, Shop B</p>
        <p><b>Status:</b>Active</p>
        <p><b>Priority:</b> Urgent</p>
      </div>
            <div class="complaint">
              <h3>Complaint 15:</h3>
              <p><b>Request Number:</b> #IM-003</p>
              <p><b>Date:</b> December 12, 2024</p>
              <p><b>Description:</b> The delivery of materials for the project was incomplete. The team cannot continue working until the materials are restocked.</p>
              <p><b>Location:</b> Y Street Construction Site</p>
              <p><b>Status:</b>Active</p>
              <p><b>Priority:</b> Urgent</p>
            </div>
            <div class="complaint">
        <h3>Complaint 16:</h3>
        <p><b>Request Number:</b> #BGR-001</p>
        <p><b>Date:</b> December 14, 2024</p>
        <p><b>Description:</b> The glass railing system in the balcony has been broken during transportation. The railing needs to be replaced as soon as possible.</p>
        <p><b>Location:</b> XYZ Residence, Balcony</p>
        <p><b>Status:</b>Active</p>
        <p><b>Priority:</b> High</p>
      </div>
      <div class="complaint">
        <h3>Complaint 18:</h3>
        <p><b>Request Number:</b> #BGR-003</p>
        <p><b>Date:</b> December 12, 2024</p>
        <p><b>Description:</b> The glass railing on the terrace has shattered. The glass was weak and needs immediate replacement to avoid injury.</p>
        <p><b>Location:</b> Y Street, Terrace</p>
        <p><b>Status:</b>Active</p>
        <p><b>Priority:</b> Urgent</p>
      </div>
        `;
        infoBox.style.display = 'block';
        infoBox.innerHTML = allComplaints;
      }
   else  {
        var infoText = "";
        var allComplaints = `
      <div class="complaint">
        <h3>Complaint 3:</h3>
        <p><b>Request Number:</b> #BW-003</p>
        <p><b>Date:</b> December 12, 2024</p>
        <p><b>Description:</b> The storefront window, made with Alumil's aluminum framing system, was broken during an accident. The glass is cracked and should be replaced urgently.</p>
        <p><b>Location:</b> Y Street, Shop Z</p>
        <p><b>Status:</b> Solved</p>
        <p><b>Priority:</b> Urgent</p>
        </div>
        <div class="complaint">
        <h3>Complaint 4:</h3>
        <p><b>Request Number:</b> #DE-001</p>
        <p><b>Date:</b> December 14, 2024</p>
        <p><b>Description:</b> The entrance door of apartment 5A, made with Alumil profiles, is not closing properly. The hinges seem to be misaligned, causing the door to stay ajar. The issue needs to be resolved to ensure safety and energy efficiency.</p>
        <p><b>Location:</b> X Street, Block B, Apartment 5A</p>
        <p><b>Status:</b>Solved</p>
        <p><b>Priority:</b> High</p>
        </div>
        <div class="complaint">
        <h3>Complaint 5:</h3>
        <p><b>Request Number:</b> #DE-002</p>
        <p><b>Date:</b> December 13, 2024</p>
        <p><b>Description:</b> The main entrance door of the office building, fitted with Alumil's aluminum profiles, is not locking correctly. The locking mechanism seems faulty, preventing the door from securing properly. Immediate repair is needed.</p>
        <p><b>Location:</b> XYZ Office Building, Main Entrance</p>
        <p><b>Status:</b>Solved</p>
        <p><b>Priority:</b> Urgent</p>
        </div>
            <div class="complaint">
              <h3>Complaint 9:</h3>
              <p><b>Request Number:</b> #DWS-003</p>
              <p><b>Date:</b> December 12, 2024</p>
              <p><b>Description:</b> The shutter on the kitchen window in apartment 8D is broken. The slats are damaged, and the mechanism is unable to function properly. This needs to be replaced immediately.</p>
              <p><b>Location:</b> Y Street, Block B, Apartment 8D</p>
              <p><b>Status:</b>Solved</p>
              <p><b>Priority:</b> Urgent</p>
            </div>
      <div class="complaint">
              <h3>Complaint 13:</h3>
              <p><b>Request Number:</b> #IM-001</p>
              <p><b>Date:</b> December 14, 2024</p>
              <p><b>Description:</b> The construction project was delayed due to insufficient delivery of building materials. Some essential materials were missing from the shipment, which has slowed down progress.</p>
              <p><b>Location:</b> XYZ Construction Site</p>
              <p><b>Status:</b>Solved</p>
              <p><b>Priority:</b> High</p>
            </div>
            <div class="complaint">
              <h3>Complaint 14:</h3>
              <p><b>Request Number:</b> #IM-002</p>
              <p><b>Date:</b> December 13, 2024</p>
              <p><b>Description:</b> The company has reported missing materials during the order for a residential project. Some specific types of insulation were not delivered as planned.</p>
              <p><b>Location:</b> ABC Construction Site</p>
              <p><b>Status:</b>Solved</p>
              <p><b>Priority:</b> Medium</p>
            </div>
      <div class="complaint">
        <h3>Complaint 17:</h3>
        <p><b>Request Number:</b> #BGR-002</p>
        <p><b>Date:</b> December 13, 2024</p>
        <p><b>Description:</b> The glass railing on the staircase was damaged during installation. The glass needs to be replaced, and the system needs to be checked for safety standards.</p>
        <p><b>Location:</b> ABC Building, Staircase</p>
        <p><b>Status:</b>Solved</p>
        <p><b>Priority:</b> Medium</p>
      </div>`;
        infoBox.style.display = 'block';
        infoBox.innerHTML = allComplaints;
        }
    if (value !== "active" && value !== "solved") {
        infoBox.style.display = 'none';
    }
}