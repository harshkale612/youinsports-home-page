// This file contains dummy API functions that will be replaced with real API calls later

// Fetch athletes with optional filters
export async function fetchAthletes(filters = {}) {
  // DUMMY DATA - Replace with actual API call later
  // Example: const response = await fetch(`${process.env.REACT_APP_API_URL}/api/athletes?${queryParams}`)

  console.log("Fetching athletes with filters:", filters);

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: 1,
      name: "Emma Johnson",
      sport: "Swimming",
      gender: "Female",
      age: 19,
      location: "London",
      image: "/placeholder.svg?height=200&width=200&text=EJ",
    },
    {
      id: 2,
      name: "James Wilson",
      sport: "Athletics",
      gender: "Male",
      age: 22,
      location: "Manchester",
      image: "/placeholder.svg?height=200&width=200&text=JW",
    },
    {
      id: 3,
      name: "Sophia Martinez",
      sport: "Gymnastics",
      gender: "Female",
      age: 20,
      location: "Birmingham",
      image: "/placeholder.svg?height=200&width=200&text=SM",
    },
  ];
}

// Fetch sports communities data
export async function fetchCommunities() {
  // DUMMY DATA - Replace with actual API call later
  // Example: const response = await fetch(`${process.env.REACT_APP_API_URL}/api/communities`)

  console.log("Fetching communities data");

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    sports: [
      { name: "Football", value: 35, color: "#0088FE" },
      { name: "Basketball", value: 20, color: "#00C49F" },
      { name: "Swimming", value: 15, color: "#FFBB28" },
      { name: "Athletics", value: 10, color: "#FF8042" },
      { name: "Tennis", value: 8, color: "#8884D8" },
      { name: "Others", value: 12, color: "#82CA9D" },
    ],
    gender: [
      { name: "Male", value: 55, color: "#0088FE" },
      { name: "Female", value: 40, color: "#FF8042" },
      { name: "Para Athletes", value: 5, color: "#00C49F" },
    ],
  };
}

// Fetch support needs data
export async function fetchSupportNeeds() {
  // DUMMY DATA - Replace with actual API call later
  // Example: const response = await fetch(`${process.env.REACT_APP_API_URL}/api/support-needs`)

  console.log("Fetching support needs data");

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: 1,
      athlete: "Emma Johnson",
      sport: "Swimming",
      image: "/placeholder.svg?height=200&width=200&text=EJ",
      needs: [
        { type: "Coaching Fees", amount: 2000, raised: 1200 },
        { type: "Travel Expenses", amount: 1500, raised: 800 },
        { type: "Equipment", amount: 800, raised: 500 },
      ],
      story:
        "Emma is a promising swimmer who has qualified for the national championships. She needs support for coaching, travel, and equipment to compete at her best.",
      supporters: [
        { name: "John Smith", amount: 200 },
        { name: "Sarah Williams", amount: 150 },
        { name: "Anonymous", amount: 100 },
        { name: "Michael Brown", amount: 250 },
        { name: "Lisa Davis", amount: 300 },
      ],
    },
    {
      id: 2,
      athlete: "James Wilson",
      sport: "Athletics",
      image: "/placeholder.svg?height=200&width=200&text=JW",
      needs: [
        { type: "Coaching Fees", amount: 1800, raised: 900 },
        { type: "Supplements", amount: 600, raised: 400 },
        { type: "Competition Fees", amount: 1200, raised: 300 },
      ],
      story:
        "James is a talented sprinter with potential to compete internationally. He needs support for coaching, nutrition, and competition fees to reach his goals.",
      supporters: [
        { name: "Robert Johnson", amount: 150 },
        { name: "Emily White", amount: 200 },
        { name: "Anonymous", amount: 50 },
        { name: "David Miller", amount: 100 },
      ],
    },
    {
      id: 3,
      athlete: "Sophia Martinez",
      sport: "Gymnastics",
      image: "/placeholder.svg?height=200&width=200&text=SM",
      needs: [
        { type: "Training Facility", amount: 3000, raised: 1500 },
        { type: "Coaching Fees", amount: 2500, raised: 1000 },
        { type: "Competition Attire", amount: 800, raised: 600 },
      ],
      story:
        "Sophia is a gymnast with exceptional talent who dreams of representing her country. She needs support for training facilities, coaching, and competition attire.",
      supporters: [
        { name: "Jennifer Lopez", amount: 300 },
        { name: "Thomas Brown", amount: 250 },
        { name: "Anonymous", amount: 150 },
        { name: "Maria Garcia", amount: 200 },
        { name: "Anonymous", amount: 100 },
      ],
    },
  ];
}

// Fetch funds data for tracker
export async function fetchFundsData() {
  // DUMMY DATA - Replace with actual API call later
  // Example: const response = await fetch(`${process.env.REACT_APP_API_URL}/api/funds-data`)

  console.log("Fetching funds data");

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    monthly: [
      { name: "Jan", amount: 12000 },
      { name: "Feb", amount: 15000 },
      { name: "Mar", amount: 18000 },
      { name: "Apr", amount: 22000 },
      { name: "May", amount: 25000 },
      { name: "Jun", amount: 30000 },
      { name: "Jul", amount: 35000 },
      { name: "Aug", amount: 40000 },
      { name: "Sep", amount: 45000 },
      { name: "Oct", amount: 50000 },
      { name: "Nov", amount: 55000 },
      { name: "Dec", amount: 60000 },
    ],
    categories: [
      { name: "Coaching Fees", value: 35, color: "#0088FE" },
      { name: "Travel Expenses", value: 25, color: "#00C49F" },
      { name: "Equipment", value: 20, color: "#FFBB28" },
      { name: "Competition Fees", value: 15, color: "#FF8042" },
      { name: "Supplements", value: 5, color: "#8884D8" },
    ],
    sports: [
      { name: "Football", athletes: 120 },
      { name: "Basketball", athletes: 80 },
      { name: "Swimming", athletes: 60 },
      { name: "Athletics", athletes: 50 },
      { name: "Tennis", athletes: 40 },
      { name: "Gymnastics", athletes: 30 },
      { name: "Others", athletes: 70 },
    ],
    success: [
      {
        id: 1,
        athlete: "Emma Johnson",
        sport: "Swimming",
        achievement: "Qualified for National Championships",
        fundsRaised: 3500,
      },
      {
        id: 2,
        athlete: "James Wilson",
        sport: "Athletics",
        achievement: "Won Gold at Regional Competition",
        fundsRaised: 2800,
      },
      {
        id: 3,
        athlete: "Sophia Martinez",
        sport: "Gymnastics",
        achievement: "Selected for National Team",
        fundsRaised: 4200,
      },
      {
        id: 4,
        athlete: "Daniel Thompson",
        sport: "Tennis",
        achievement: "Reached Semi-finals in International Tournament",
        fundsRaised: 3200,
      },
    ],
  };
}

// Submit support for an athlete
export async function submitSupport(data) {
  // DUMMY FUNCTION - Replace with actual API call later
  // Example: const response = await fetch(`${process.env.REACT_APP_API_URL}/api/support`, { method: 'POST', ... })

  console.log("Submitting support data:", data);

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true, message: "Support submitted successfully!" };
}
