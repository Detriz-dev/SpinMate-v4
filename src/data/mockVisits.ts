// src/data/mockVisits.ts

import { Visit, ServiceSubject, PredefinedService, PredefinedServicePart, CustomerInfo, Mechanic, Label } from './data/mockVisits.ts';

// Mock data for customers
export const mockCustomers: CustomerInfo[] = [
  {
    id: "cust-1",
    name: "John Smith",
    email: "john.smith@email.com",
    phoneNumber: "+1-555-0123"
  },
  {
    id: "cust-2", 
    name: "Maria Garcia",
    email: "maria.garcia@email.com",
    phoneNumber: "+1-555-0456"
  },
  {
    id: "cust-3",
    name: "David Johnson",
    email: "david.johnson@email.com", 
    phoneNumber: "+1-555-0789"
  },
  {
    id: "cust-4",
    name: "Sarah Wilson",
    email: "sarah.wilson@email.com",
    phoneNumber: "+1-555-0321"
  },
  {
    id: "cust-5",
    name: "Michael Brown",
    email: "michael.brown@email.com",
    phoneNumber: "+1-555-0654"
  }
];

// Mock data for mechanics
export const mockMechanics: Mechanic[] = [
  {
    id: "mech-1",
    name: "Alex Thompson",
    email: "alex.thompson@garage.com"
  },
  {
    id: "mech-2", 
    name: "Jessica Martinez",
    email: "jessica.martinez@garage.com"
  },
  {
    id: "mech-3",
    name: "Robert Davis",
    email: "robert.davis@garage.com"
  }
];

// Mock data for service subjects
export const mockServiceSubjects: ServiceSubject[] = [
  {
    id: "subj-1",
    name: "2018 Honda Civic",
    notes: "Blue sedan, license plate ABC-123",
    photoIds: ["photo-1", "photo-2"]
  },
  {
    id: "subj-2",
    name: "2020 Ford F-150",
    notes: "Red pickup truck, minor scratches on passenger side",
    photoIds: ["photo-3"]
  },
  {
    id: "subj-3", 
    name: "2019 Toyota Camry",
    notes: "Silver, well maintained",
    photoIds: []
  },
  {
    id: "subj-4",
    name: "2021 BMW X5",
    notes: "Black SUV, premium package",
    photoIds: ["photo-4", "photo-5"]
  },
  {
    id: "subj-5",
    name: "2017 Chevrolet Malibu",
    notes: "White, high mileage vehicle",
    photoIds: ["photo-6"]
  }
];

// Mock data for predefined services
export const mockPredefinedServices: PredefinedService[] = [
  {
    id: "serv-1",
    name: "Oil Change",
    price: 45.99
  },
  {
    id: "serv-2",
    name: "Brake Inspection",
    price: 89.99
  },
  {
    id: "serv-3",
    name: "Tire Rotation", 
    price: 29.99
  },
  {
    id: "serv-4",
    name: "Engine Diagnostic",
    price: 125.00
  },
  {
    id: "serv-5",
    name: "Transmission Service",
    price: 199.99
  }
];

// Mock data for predefined service parts
export const mockPredefinedServiceParts: PredefinedServicePart[] = [
  {
    id: "part-1",
    name: "Oil Filter",
    price: 12.99
  },
  {
    id: "part-2",
    name: "Brake Pads (Front)",
    price: 89.99
  },
  {
    id: "part-3",
    name: "Air Filter",
    price: 19.99
  },
  {
    id: "part-4",
    name: "Spark Plugs",
    price: 8.99
  },
  {
    id: "part-5",
    name: "Transmission Fluid",
    price: 24.99
  }
];

// Mock data for labels
export const mockLabels: Label[] = [
  {
    id: "label-1",
    name: "Urgent",
    color: "#FF4444"
  },
  {
    id: "label-2",
    name: "Warranty Work",
    color: "#4444FF"
  },
  {
    id: "label-3", 
    name: "Follow-up Required",
    color: "#FF8800"
  },
  {
    id: "label-4",
    name: "Customer Approved",
    color: "#44FF44"
  },
  {
    id: "label-5",
    name: "Waiting for Parts",
    color: "#FFFF44"
  }
];

// Mock data for visits
export const mockVisits: Visit[] = [
  {
    id: "visit-1",
    customerName: "John Smith",
    serviceObject: "2018 Honda Civic",
    phoneNumber: "+1-555-0123",
    email: "john.smith@email.com",
    intakeDate: "2024-01-15",
    releaseDate: "2024-01-16",
    status: "Completed",
    mechanic: "Alex Thompson",
    services: [
      { name: "Oil Change", price: 45.99 },
      { name: "Tire Rotation", price: 29.99 }
    ],
    parts: [
      { name: "Oil Filter", price: 12.99 }
    ],
    notes: "Regular maintenance visit. Customer requested tire rotation along with oil change.",
    recommendations: "Recommend brake inspection within next 3 months.",
    totalCost: 88.97,
    smsSent: {
      confirmation: {
        date: "2024-01-15T09:30:00Z",
        message: "Your Honda Civic service is scheduled for today at 10:00 AM"
      }
    }
  },
  {
    id: "visit-2", 
    customerName: "Maria Garcia",
    serviceObject: "2020 Ford F-150",
    phoneNumber: "+1-555-0456",
    email: "maria.garcia@email.com",
    intakeDate: "2024-01-18",
    releaseDate: "",
    status: "In Progress",
    mechanic: "Jessica Martinez",
    services: [
      { name: "Brake Inspection", price: 89.99 },
      { name: "Engine Diagnostic", price: 125.00 }
    ],
    parts: [
      { name: "Brake Pads (Front)", price: 89.99 }
    ],
    notes: "Customer reported squeaking noise when braking. Found worn brake pads.",
    recommendations: "Replace rear brake pads within 6 months.",
    totalCost: 304.98
  },
  {
    id: "visit-3",
    customerName: "David Johnson", 
    serviceObject: "2019 Toyota Camry",
    phoneNumber: "+1-555-0789",
    email: "david.johnson@email.com",
    intakeDate: "2024-01-20",
    releaseDate: "",
    status: "Waiting for Parts",
    mechanic: "Robert Davis",
    services: [
      { name: "Transmission Service", price: 199.99 }
    ],
    parts: [
      { name: "Transmission Fluid", price: 24.99 }
    ],
    notes: "Transmission fluid change required. Special transmission fluid needed for this model.",
    recommendations: "Schedule follow-up in 30,000 miles.",
    totalCost: 249.97
  },
  {
    id: "visit-4",
    customerName: "Sarah Wilson",
    serviceObject: "2021 BMW X5", 
    phoneNumber: "+1-555-0321",
    email: "sarah.wilson@email.com",
    intakeDate: "2024-01-22",
    releaseDate: "2024-01-23",
    status: "Completed",
    mechanic: "Alex Thompson",
    services: [
      { name: "Engine Diagnostic", price: 125.00 },
      { name: "Oil Change", price: 45.99 }
    ],
    parts: [
      { name: "Air Filter", price: 19.99 },
      { name: "Oil Filter", price: 12.99 }
    ],
    notes: "Check engine light diagnostic. Found dirty air filter causing issues.",
    recommendations: "Premium oil recommended for luxury vehicle.",
    totalCost: 203.97,
    smsSent: {
      confirmation: {
        date: "2024-01-23T16:00:00Z", 
        message: "Your BMW X5 is ready for pickup! Total cost: $203.97"
      }
    }
  },
  {
    id: "visit-5",
    customerName: "Michael Brown",
    serviceObject: "2017 Chevrolet Malibu",
    phoneNumber: "+1-555-0654", 
    email: "michael.brown@email.com",
    intakeDate: "2024-01-25",
    releaseDate: "",
    status: "Scheduled",
    mechanic: "Jessica Martinez",
    services: [
      { name: "Brake Inspection", price: 89.99 },
      { name: "Tire Rotation", price: 29.99 }
    ],
    parts: [],
    notes: "Scheduled maintenance appointment. Customer mentioned slight vibration when braking.",
    recommendations: "",
    totalCost: 119.98
  },
  {
    id: "visit-6",
    customerName: "John Smith",
    serviceObject: "2018 Honda Civic", 
    phoneNumber: "+1-555-0123",
    email: "john.smith@email.com",
    intakeDate: "2024-02-01",
    releaseDate: "",
    status: "In Progress",
    mechanic: "Robert Davis",
    services: [
      { name: "Brake Inspection", price: 89.99 }
    ],
    parts: [
      { name: "Spark Plugs", price: 8.99 }
    ],
    notes: "Follow-up visit from previous recommendation. Brake inspection and spark plug replacement.",
    recommendations: "",
    totalCost: 134.95
  }
];

// Helper functions to get data
export const getVisitById = (id: string): Visit | undefined => {
  return mockVisits.find(visit => visit.id === id);
};

export const getVisitsByCustomer = (customerName: string): Visit[] => {
  return mockVisits.filter(visit => 
    visit.customerName.toLowerCase().includes(customerName.toLowerCase())
  );
};

export const getVisitsByStatus = (status: string): Visit[] => {
  return mockVisits.filter(visit => visit.status === status);
};

export const getVisitsByMechanic = (mechanicName: string): Visit[] => {
  return mockVisits.filter(visit => visit.mechanic === mechanicName);
};

export const getVisitsByDateRange = (startDate: string, endDate: string): Visit[] => {
  return mockVisits.filter(visit => {
    const intakeDate = new Date(visit.intakeDate);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return intakeDate >= start && intakeDate <= end;
  });
};

// Statistics helpers
export const getVisitStats = () => {
  const totalVisits = mockVisits.length;
  const completedVisits = getVisitsByStatus("Completed").length;
  const inProgressVisits = getVisitsByStatus("In Progress").length;
  const scheduledVisits = getVisitsByStatus("Scheduled").length;
  const waitingForPartsVisits = getVisitsByStatus("Waiting for Parts").length;
  
  const totalRevenue = mockVisits
    .filter(visit => visit.status === "Completed")
    .reduce((sum, visit) => sum + visit.totalCost, 0);
  
  return {
    totalVisits,
    completedVisits,
    inProgressVisits,
    scheduledVisits,
    waitingForPartsVisits,
    totalRevenue
  };
};