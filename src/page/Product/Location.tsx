import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";

const locations = [
  {
    division: "Dhaka",
    districts: [
      { name: "Dhaka City North", areas: ["Turag", "Mirpur", "Uttara"] },
      { name: "Dhaka City South", areas: ["Kotwali", "Lalbagh", "Dhanmondi"] },
      { name: "Dhaka District", areas: ["Savar", "Keraniganj", "Nawabganj"] },
      { name: "Faridpur", areas: ["Faridpur Sadar", "Boalmari", "Madhukhali"] },
      { name: "Gazipur", areas: ["Tongi", "Kaliganj", "Sreepur"] },
      {
        name: "Gopalganj",
        areas: ["Gopalganj Sadar", "Kashiani", "Tungipara"],
      },
      {
        name: "Kishoreganj",
        areas: ["Kishoreganj Sadar", "Bhairab", "Kuliarchar"],
      },
      { name: "Madaripur", areas: ["Madaripur Sadar", "Rajoir", "Kalkini"] },
      { name: "Manikganj", areas: ["Manikganj Sadar", "Saturia", "Singair"] },
      {
        name: "Munshiganj",
        areas: ["Munshiganj Sadar", "Sreenagar", "Lohajang"],
      },
      {
        name: "Narayanganj",
        areas: ["Narayanganj Sadar", "Sonargaon", "Rupganj"],
      },
      { name: "Narsingdi", areas: ["Narsingdi Sadar", "Palash", "Shibpur"] },
      { name: "Rajbari", areas: ["Rajbari Sadar", "Pangsha", "Baliakandi"] },
      {
        name: "Shariatpur",
        areas: ["Shariatpur Sadar", "Damudya", "Gosairhat"],
      },
      { name: "Tangail", areas: ["Tangail Sadar", "Sakhipur", "Mirzapur"] },
    ],
  },
  {
    division: "Chittagong",
    districts: [
      {
        name: "Chittagong City",
        areas: ["Pahartali", "Panchlaish", "Double Mooring"],
      },
      {
        name: "Chittagong District",
        areas: ["Hathazari", "Raozan", "Fatikchhari"],
      },
      { name: "Cox's Bazar", areas: ["Cox's Bazar Sadar", "Teknaf", "Ramu"] },
      { name: "Bandarban", areas: ["Bandarban Sadar", "Thanchi", "Ruma"] },
      {
        name: "Brahmanbaria",
        areas: ["Brahmanbaria Sadar", "Sarail", "Ashuganj"],
      },
      { name: "Chandpur", areas: ["Chandpur Sadar", "Haimchar", "Shahrasti"] },
      { name: "Cumilla", areas: ["Cumilla Sadar", "Daudkandi", "Laksam"] },
      { name: "Feni", areas: ["Feni Sadar", "Daganbhuiyan", "Sonagazi"] },
      {
        name: "Khagrachari",
        areas: ["Khagrachari Sadar", "Dighinala", "Ramgarh"],
      },
      { name: "Lakshmipur", areas: ["Lakshmipur Sadar", "Ramganj", "Raipur"] },
      { name: "Noakhali", areas: ["Noakhali Sadar", "Begumganj", "Hatiya"] },
      {
        name: "Rangamati",
        areas: ["Rangamati Sadar", "Kaptai", "Bagaichhari"],
      },
    ],
  },
  {
    division: "Rajshahi",
    districts: [
      { name: "Rajshahi", areas: ["Rajshahi Sadar", "Paba", "Godagari"] },
      { name: "Bogra", areas: ["Bogra Sadar", "Shibganj", "Sonatala"] },
      {
        name: "Chapainawabganj",
        areas: ["Chapainawabganj Sadar", "Gomostapur", "Shibganj"],
      },
      { name: "Joypurhat", areas: ["Joypurhat Sadar", "Kalai", "Panchbibi"] },
      { name: "Naogaon", areas: ["Naogaon Sadar", "Badalgachhi", "Patnitala"] },
      { name: "Natore", areas: ["Natore Sadar", "Baraigram", "Gurudaspur"] },
      { name: "Pabna", areas: ["Pabna Sadar", "Bera", "Sujanagar"] },
      { name: "Sirajganj", areas: ["Sirajganj Sadar", "Belkuchi", "Raiganj"] },
    ],
  },
  {
    division: "Barisal",
    districts: [
      { name: "Barisal", areas: ["Barisal Sadar", "Bakerganj", "Babuganj"] },
      { name: "Barguna", areas: ["Barguna Sadar", "Patharghata", "Betagi"] },
      { name: "Bhola", areas: ["Bhola Sadar", "Lalmohan", "Char Fasson"] },
      {
        name: "Jhalokathi",
        areas: ["Jhalokathi Sadar", "Kathalia", "Nalchity"],
      },
      {
        name: "Patuakhali",
        areas: ["Patuakhali Sadar", "Kalapara", "Rangabali"],
      },
      { name: "Pirojpur", areas: ["Pirojpur Sadar", "Bhandaria", "Mathbaria"] },
    ],
  },
  {
    division: "Sylhet",
    districts: [
      { name: "Sylhet", areas: ["Sylhet Sadar", "Beanibazar", "Golapganj"] },
      {
        name: "Habiganj",
        areas: ["Habiganj Sadar", "Chunarughat", "Nabiganj"],
      },
      {
        name: "Moulvibazar",
        areas: ["Moulvibazar Sadar", "Srimangal", "Kulaura"],
      },
      {
        name: "Sunamganj",
        areas: ["Sunamganj Sadar", "Tahirpur", "Jamalganj"],
      },
    ],
  },
  {
    division: "Rangpur",
    districts: [
      { name: "Rangpur", areas: ["Rangpur Sadar", "Mithapukur", "Pirgacha"] },
      { name: "Dinajpur", areas: ["Dinajpur Sadar", "Birampur", "Birganj"] },
      {
        name: "Gaibandha",
        areas: ["Gaibandha Sadar", "Palashbari", "Sundarganj"],
      },
      { name: "Kurigram", areas: ["Kurigram Sadar", "Nageshwari", "Ulipur"] },
      {
        name: "Lalmonirhat",
        areas: ["Lalmonirhat Sadar", "Aditmari", "Kaliganj"],
      },
      { name: "Nilphamari", areas: ["Nilphamari Sadar", "Saidpur", "Domar"] },
      { name: "Panchagarh", areas: ["Panchagarh Sadar", "Boda", "Debiganj"] },
      {
        name: "Thakurgaon",
        areas: ["Thakurgaon Sadar", "Pirganj", "Ranisankail"],
      },
    ],
  },
  {
    division: "Mymensingh",
    districts: [
      {
        name: "Mymensingh",
        areas: ["Mymensingh Sadar", "Muktagacha", "Gouripur"],
      },
      { name: "Netrokona", areas: ["Netrokona Sadar", "Kendua", "Mohanganj"] },
      { name: "Sherpur", areas: ["Sherpur Sadar", "Nalitabari", "Sreebardi"] },
      {
        name: "Jamalpur",
        areas: ["Jamalpur Sadar", "Dewanganj", "Sarishabari"],
      },
    ],
  },
];


const ShippingPopup: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState<string | null>('Dhaka');
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>('Dhaka City North');
  const [selectedArea, setSelectedArea] = useState<string | null>('Turag');
  const [storedLocation, setStoredLocation] = useState<string | null>(null);

  // Load stored location on component mount
  useEffect(() => {
    const location = localStorage.getItem("shippingLocation");
    if (location) {
      setStoredLocation(location);
    }
  }, []);

  const selectDivision = (divisionName: string) => {
    setSelectedDivision(divisionName);
    setSelectedDistrict(null); // Reset district when division changes
    setSelectedArea(null); // Reset area when division changes
  };

  const selectDistrict = (districtName: string) => {
    setSelectedDistrict(districtName);
    setSelectedArea(null); // Reset area when district changes
  };

  const selectArea = (areaName: string) => {
    setSelectedArea(areaName);
  };

  const handleOpenPopup = () => setIsPopupVisible(true);
  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setSelectedDivision(null); // Reset the selection when closing the popup
    setSelectedDistrict(null);
    setSelectedArea(null);
  };

  const handleSubmit = () => {
    // Create a combined location string
    const locationString = `${selectedDivision} >> ${selectedDistrict} >> ${selectedArea}`;
    // Save to local storage
    localStorage.setItem("shippingLocation", locationString);
    setStoredLocation(locationString); // Update the displayed location
    handleClosePopup(); // Close the popup after submission
  };

  return (
    <div>
      {/* Location Display Section */}
      <div className="flex gap-4 items-center">
        <FaLocationDot className="text-xl" />
        <div className="flex gap-1">
          <p className="text-[18px] leading-[22.5px]  text-left text-black opensans font-bold">
            {storedLocation || "No location selected"}
          </p>
          <p
            onClick={handleOpenPopup}
            className="text-blue-500 cursor-pointer font-semibold"
          >
            Change
          </p>
        </div>
      </div>

      {/* Popup for selecting locations */}
      {isPopupVisible && (
        <motion.div
          className="popup-content fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
          >
            {/* Header Section */}
            <div className="bg-[#D4A762] p-2 rounded-lg text-center">
              <h1 className="text-white text-lg font-semibold">
                {`Selected Area: ${
                  selectedDivision || "Select a division"
                } >> ${selectedDistrict || "Select a district"} >> ${
                  selectedArea || "Select an area"
                }`}
              </h1>
            </div>

            {/* Division Selection */}
            {!selectedDivision && (
              <div className="mt-4 ">
                {locations.map((division, idx) => (
                  <div
                    key={idx}
                    className="cursor-pointer font-semibold mt-2 hover:bg-slate-300 py-2 rounded-[8px] px-2 border-b"
                    onClick={() => selectDivision(division.division)}
                  >
                    {division.division}
                  </div>
                ))}
              </div>
            )}

            {/* District Selection */}
            {selectedDivision && !selectedDistrict && (
              <div className="mt-4">
                {locations
                  .find((loc) => loc.division === selectedDivision)
                  ?.districts.map((district, distIdx) => (
                    <div
                      key={distIdx}
                      className="cursor-pointer font-semibold mt-2 hover:bg-slate-300 py-2 rounded-[8px] px-2 border-b"
                      onClick={() => selectDistrict(district.name)}
                    >
                      {district.name}
                    </div>
                  ))}
              </div>
            )}

            {/* Area Selection */}
            {selectedDistrict && !selectedArea && (
              <div className="mt-4">
                {locations
                  .find((loc) => loc.division === selectedDivision)
                  ?.districts.find(
                    (district) => district.name === selectedDistrict
                  )
                  ?.areas.map((area, areaIdx) => (
                    <div
                      key={areaIdx}
                      className="cursor-pointer font-semibold mt-2 hover:bg-slate-300 py-2 rounded-[8px] px-2 border-b"
                      onClick={() => selectArea(area)}
                    >
                      {area}
                    </div>
                  ))}
              </div>
            )}

            {/* Close and Submit Buttons */}
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={handleClosePopup}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
              <button
                onClick={handleSubmit}
                className="bg-[#D4A762] text-white px-4 py-2 rounded"
                disabled={
                  !selectedDivision || !selectedDistrict || !selectedArea
                } // Disable if any selection is missing
              >
                Submit
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ShippingPopup;
