// Project catalog.
// level: 'btech' (B.Tech / MCA / diploma) or 'mtech' (M.Tech / research-grade)
// stack: the default build. Most projects can be done in another stack on request.

export const domains = [
  { id: 'web', label: 'Web applications', short: 'Web apps' },
  { id: 'ai', label: 'AI & machine learning', short: 'AI & ML' },
  { id: 'iot', label: 'IoT & embedded', short: 'IoT' },
  { id: 'sec', label: 'Security & networks', short: 'Security' },
  { id: 'cloud', label: 'Cloud & DevOps', short: 'Cloud & DevOps' },
  { id: 'chain', label: 'Blockchain', short: 'Blockchain' },
];

export const levels = {
  btech: 'B.Tech',
  mtech: 'M.Tech',
};

const STACK = {
  mern: ['React', 'Node.js', 'Express', 'MongoDB'],
  django: ['Python', 'Django', 'MySQL'],
  spring: ['Java', 'Spring Boot', 'MySQL'],
  php: ['PHP', 'MySQL', 'Bootstrap'],
  flutter: ['Flutter', 'Firebase'],
  mlweb: ['Python', 'scikit-learn', 'Flask'],
  dl: ['Python', 'TensorFlow', 'Keras', 'Flask'],
  cv: ['Python', 'OpenCV', 'TensorFlow'],
  esp: ['ESP32', 'Arduino IDE', 'Firebase'],
  sol: ['Solidity', 'Ethereum', 'React', 'Web3.js'],
};

const p = (n, title, domain, level, stack, summary, features) => ({
  code: `DTL-${String(n).padStart(3, '0')}`,
  title,
  domain,
  level,
  stack,
  summary,
  features,
});

export const projects = [
  p(1, 'Employee Management System', 'web', 'btech', STACK.mern,
    'One place for employee records, leave requests, attendance and payslips.',
    ['Role-based logins for admin, HR and employees', 'Leave apply and approve flow with balances', 'Monthly payslip generation as PDF']),

  p(2, 'Face Recognition Attendance System', 'ai', 'btech', STACK.cv,
    'Marks attendance from a webcam by recognising registered faces.',
    ['Face registration with multiple samples per student', 'Live recognition with time-stamped entries', 'Daily and monthly attendance reports in Excel']),

  p(3, 'Hospital Management System', 'web', 'btech', STACK.spring,
    'Patient registration, doctor appointments, prescriptions and billing for a small hospital.',
    ['Appointment booking with doctor availability', 'Patient history and prescription records', 'Billing with printable invoices']),

  p(4, 'Online Examination Portal', 'web', 'btech', STACK.django,
    'Timed online tests with a question bank and automatic results.',
    ['Question bank with multiple-choice and true/false', 'Countdown timer and auto-submit', 'Result sheet and rank list per test']),

  p(5, 'Inventory Management System', 'web', 'btech', STACK.php,
    'Tracks stock, purchases and sales for a shop or warehouse.',
    ['Low-stock alerts', 'Purchase and sales entries with supplier details', 'Stock and profit reports by date range']),

  p(6, 'Student Performance Prediction', 'ai', 'btech', STACK.mlweb,
    'Predicts which students are at risk of failing from marks and attendance.',
    ['Trains and compares Random Forest, SVM and Logistic Regression', 'Dashboard listing at-risk students', 'Upload a CSV and get predictions']),

  p(7, 'IT Helpdesk Ticket System', 'web', 'btech', STACK.mern,
    'Users raise issues, support staff pick them up and close them.',
    ['Ticket priority and status workflow', 'Assignment to support staff', 'Email notification on every update']),

  p(8, 'Library Management System', 'web', 'btech', STACK.php,
    'Book catalogue, issue and return, and automatic fine calculation.',
    ['Search books by title, author or ISBN', 'Issue, return and renew', 'Fine calculation for late returns']),

  p(9, 'Smart Parking System', 'iot', 'btech', ['ESP32', 'IR sensors', 'Firebase', 'Android'],
    'Shows free parking slots on a phone using a sensor on each slot.',
    ['IR sensor per slot sends live status', 'Mobile view of free and occupied slots', 'Slot booking with entry time']),

  p(10, 'Event Management & Booking System', 'web', 'btech', STACK.django,
    'Create events, sell tickets and check attendees in with a QR code.',
    ['Event listing with seat limits', 'Ticket booking with QR code', 'QR check-in at the venue']),

  p(11, 'Online Complaint Management System', 'web', 'btech', STACK.php,
    'Citizens file complaints and track them until they are resolved.',
    ['Complaint with photo and location', 'Department-wise assignment', 'Status tracking for the complainant']),

  p(12, 'Blood Bank Management System', 'web', 'btech', STACK.mern,
    'Connects donors, blood banks and hospitals by blood group and city.',
    ['Donor registration with blood group and city', 'Blood stock per bank', 'Request a blood group and notify matching donors']),

  p(13, 'Resume Builder', 'web', 'btech', ['React', 'Node.js', 'MongoDB', 'jsPDF'],
    'Fill a form, pick a template and download a resume as PDF.',
    ['Multiple resume templates', 'Live preview while typing', 'PDF download']),

  p(14, 'AI Chat Assistant', 'ai', 'btech', ['Python', 'Flask', 'Transformers', 'React'],
    'A chatbot that answers questions in natural language through a web chat window.',
    ['Intent detection with a fine-tuned model', 'Chat history per user', 'Admin page to add new questions and answers']),

  p(15, 'Job Portal', 'web', 'btech', STACK.spring,
    'Companies post jobs and candidates apply with their resume.',
    ['Recruiter and candidate logins', 'Job search with filters', 'Application status tracking']),

  p(16, 'Personal Finance Tracker', 'web', 'btech', STACK.flutter,
    'Track income, expenses and monthly budgets on your phone.',
    ['Income and expense entries by category', 'Monthly budget with alerts', 'Charts of spending by category']),

  p(17, 'E-Commerce Website', 'web', 'btech', STACK.mern,
    'Online store with product catalogue, cart, payments and order tracking.',
    ['Product search and filters', 'Cart and Razorpay test-mode checkout', 'Order history and admin panel']),

  p(18, 'Women Safety SOS Device', 'iot', 'btech', ['ESP32', 'GPS module', 'GSM module'],
    'A wearable button that sends live location to emergency contacts.',
    ['One-press SOS with GPS location by SMS', 'Location updates every 30 seconds', 'Companion app showing the route']),

  p(19, 'Online Learning Platform', 'web', 'btech', STACK.django,
    'Courses with video lessons, quizzes and progress tracking.',
    ['Instructor and student roles', 'Video lessons with quizzes', 'Progress bar and completion certificate']),

  p(20, 'Career Recommendation System', 'ai', 'btech', STACK.mlweb,
    'Suggests career paths from a student\'s skills, interests and marks.',
    ['Questionnaire for interests and skills', 'Classification model for career fit', 'Top three suggestions with reasons']),

  p(21, 'Hostel Management System', 'web', 'btech', STACK.php,
    'Room allotment, fee payments and complaints for a college hostel.',
    ['Room allotment and vacancy view', 'Fee records and due alerts', 'Mess and maintenance complaints']),

  p(22, 'Disaster Alert & Notification System', 'web', 'btech', ['Python', 'Flask', 'Twilio', 'Leaflet'],
    'Sends SMS and web alerts to people in an affected area.',
    ['Admin marks an affected area on a map', 'SMS alerts to registered users in that area', 'Public page with shelters and helplines']),

  p(23, 'Smart Expense Categoriser', 'ai', 'btech', STACK.mlweb,
    'Reads bank SMS messages and sorts expenses into categories automatically.',
    ['Extracts amount and merchant from SMS text', 'NLP classifier for categories', 'Monthly spending summary']),

  p(24, 'Fitness Tracking App', 'web', 'btech', STACK.flutter,
    'Log workouts, water and sleep and see weekly progress.',
    ['Workout and step logs', 'Daily goals with reminders', 'Weekly progress charts']),

  p(25, 'Local Service Booking Platform', 'web', 'btech', STACK.mern,
    'Book electricians, plumbers and other local workers near you.',
    ['Worker profiles with services and rates', 'Booking with time slot', 'Ratings after the job']),

  p(26, 'Online Donation Platform', 'web', 'btech', STACK.django,
    'Lets NGOs run fundraising campaigns and donors give online.',
    ['Campaign pages with target and progress', 'Online donation with receipt', 'Donor history']),

  p(27, 'Travel Planner & Budget App', 'web', 'btech', STACK.mern,
    'Plan a trip day by day and track spending against a budget.',
    ['Day-wise itinerary builder', 'Budget with shared expenses', 'Map of planned places']),

  p(28, 'Personal Productivity App', 'web', 'btech', STACK.mern,
    'Tasks, notes and a calendar in one app.',
    ['Tasks with due dates and priorities', 'Notes with tags', 'Calendar view with reminders']),

  p(29, 'Movie Recommendation System', 'ai', 'btech', STACK.mlweb,
    'Recommends movies using collaborative and content-based filtering.',
    ['Trained on the MovieLens dataset', 'Compares two recommendation methods', 'Web page to rate movies and get suggestions']),

  p(30, 'Student Doubt Forum', 'web', 'btech', STACK.django,
    'Students post doubts and faculty or classmates answer them.',
    ['Questions by subject with tags', 'Upvotes and accepted answers', 'Faculty-verified answers']),

  p(31, 'Smart Agriculture Monitoring', 'iot', 'btech', ['ESP32', 'Soil moisture sensor', 'DHT11', 'Firebase'],
    'Monitors soil moisture and weather and switches the water pump automatically.',
    ['Live soil, temperature and humidity readings', 'Automatic pump control with relay', 'Mobile dashboard and alerts']),

  p(32, 'Disease Prediction from Symptoms', 'ai', 'btech', STACK.mlweb,
    'Predicts a likely disease from the symptoms a user selects.',
    ['Trained on a public symptoms dataset', 'Decision Tree, Naive Bayes and Random Forest compared', 'Suggests the type of doctor to consult']),

  p(33, 'Smart Waste Bin Monitoring', 'iot', 'btech', ['ESP32', 'Ultrasonic sensor', 'ThingSpeak'],
    'Bins report how full they are so collection can be planned.',
    ['Fill level from an ultrasonic sensor', 'Alert when a bin is 80% full', 'Map of bins for the collection team']),

  p(34, 'Adaptive Traffic Signal Control', 'ai', 'mtech', ['Python', 'YOLOv8', 'OpenCV', 'SUMO'],
    'Counts vehicles at a junction from video and adjusts green time per lane.',
    ['Vehicle detection and counting with YOLO', 'Signal timing based on lane density', 'Simulation comparison with fixed timing in SUMO']),

  p(35, 'Tourist Guide Website', 'web', 'btech', STACK.php,
    'Places to visit, hotels and local guides for a city or state.',
    ['Places with photos and maps', 'Guide booking', 'Reviews from visitors']),

  p(36, 'Internship Portal', 'web', 'btech', STACK.spring,
    'Companies list internships and students apply and track status.',
    ['Company and student logins', 'Internship search by skill and stipend', 'Certificate upload on completion']),

  p(37, 'Mood Tracker with Sentiment Analysis', 'ai', 'btech', ['Python', 'NLTK', 'Flask', 'Chart.js'],
    'A daily journal that detects mood from what you write and charts it over time.',
    ['Sentiment analysis on journal entries', 'Mood trend charts', 'Self-help resources by mood']),

  p(38, 'Pet Care Management App', 'web', 'btech', STACK.flutter,
    'Vaccination reminders, vet appointments and records for pets.',
    ['Pet profiles with vaccination history', 'Reminders for vaccines and medicines', 'Vet appointment booking']),

  p(39, 'Freelance Marketplace', 'web', 'btech', STACK.mern,
    'Clients post work, freelancers bid and payments are released on delivery.',
    ['Project posting and bidding', 'Chat between client and freelancer', 'Milestone-based payment flow']),

  p(40, 'Smart Home Automation', 'iot', 'btech', ['ESP32', 'Relay module', 'Blynk'],
    'Control lights and fans from a phone and by voice.',
    ['Mobile control of four appliances', 'Voice control through Google Assistant', 'Schedules and energy usage log']),

  p(41, 'Transparent NGO Donations on Blockchain', 'chain', 'btech', STACK.sol,
    'Every donation and every spend is recorded on-chain so donors can see where money went.',
    ['Smart contract for donations and withdrawals', 'Public ledger page for each campaign', 'MetaMask wallet integration']),

  p(42, 'Campus Placement Portal', 'web', 'btech', STACK.django,
    'Manages company drives, student eligibility and interview rounds.',
    ['Eligibility filter by CGPA and backlogs', 'Drive registration and round results', 'Placement statistics for the TPO']),

  p(43, 'Sign Language to Text & Speech', 'ai', 'mtech', ['Python', 'MediaPipe', 'TensorFlow', 'OpenCV'],
    'Recognises hand signs from a webcam and converts them to text and speech.',
    ['Hand landmark extraction with MediaPipe', 'LSTM model for gesture sequences', 'Text-to-speech output']),

  p(44, 'Blockchain Certificate Verification', 'chain', 'btech', [...STACK.sol, 'IPFS'],
    'Colleges issue certificates on-chain and employers verify them with a QR code.',
    ['Certificate hash stored on Ethereum', 'Files stored on IPFS', 'QR code verification page']),

  p(45, 'Fake News Detection', 'ai', 'btech', ['Python', 'scikit-learn', 'TF-IDF', 'Flask'],
    'Classifies a news article as real or fake from its text.',
    ['TF-IDF features with Passive Aggressive and LSTM models', 'Accuracy and confusion matrix comparison', 'Web page to paste and check an article']),

  p(46, 'Air Quality Monitoring Network', 'iot', 'btech', ['ESP32', 'MQ135', 'PM2.5 sensor', 'ThingSpeak'],
    'Low-cost sensor nodes that measure air quality and show it on a map.',
    ['PM2.5 and gas readings every minute', 'AQI calculation', 'Map of nodes with colour-coded AQI']),

  p(47, 'Decentralized Voting System', 'chain', 'btech', STACK.sol,
    'Election voting with a smart contract so votes cannot be changed or counted twice.',
    ['Voter registration by admin', 'One vote per wallet enforced on-chain', 'Live result count']),

  p(48, 'Cold Chain Temperature Monitoring', 'iot', 'btech', ['ESP32', 'DS18B20', 'GPS', 'Firebase'],
    'Tracks temperature and location of medicine or food during transport.',
    ['Temperature and GPS logging', 'SMS alert when temperature goes out of range', 'Trip report for each shipment']),

  // Added October 2026
  p(49, 'DDoS Attack Detection in SD-WAN', 'sec', 'mtech', ['Python', 'Mininet', 'Ryu controller', 'scikit-learn'],
    'Detects DDoS traffic in a software-defined WAN using flow statistics and machine learning.',
    ['SD-WAN topology simulated in Mininet with a Ryu controller', 'Flow features collected from the controller', 'Random Forest, SVM and KNN compared, with automatic flow blocking']),

  p(50, 'Network Intrusion Detection with Deep Learning', 'sec', 'mtech', ['Python', 'TensorFlow', 'CIC-IDS2017'],
    'Classifies network traffic as normal or one of several attack types.',
    ['Trained on the CIC-IDS2017 dataset', 'CNN-LSTM model compared with classical ML', 'Precision, recall and F1 per attack class']),

  p(51, 'Phishing Website Detection', 'sec', 'btech', ['Python', 'XGBoost', 'Flask', 'Chrome extension'],
    'Checks a URL and warns if it looks like a phishing site.',
    ['URL and page features extracted automatically', 'XGBoost classifier', 'Browser extension that flags pages']),

  p(52, 'Server Monitoring with Prometheus & Grafana', 'cloud', 'btech', ['Linux', 'Prometheus', 'Grafana', 'Node Exporter', 'Docker'],
    'Collects CPU, memory, disk and uptime metrics from servers and alerts on problems.',
    ['Exporters on multiple Linux machines', 'Grafana dashboards per server', 'Alerts to email or Telegram']),

  p(53, 'Log Anomaly Detection with LSTM', 'cloud', 'mtech', ['Python', 'PyTorch', 'ELK Stack'],
    'Learns normal patterns in system logs and flags unusual sequences.',
    ['Log parsing into event templates', 'LSTM model trained on the HDFS log dataset', 'Kibana view of flagged anomalies']),

  p(54, 'Predictive Autoscaling on Kubernetes', 'cloud', 'mtech', ['Kubernetes', 'Python', 'Prophet', 'Prometheus'],
    'Forecasts incoming load and scales pods before traffic arrives instead of after.',
    ['Load forecasting from Prometheus metrics', 'Custom scaler that adjusts replica count', 'Comparison with the default Horizontal Pod Autoscaler']),

  p(55, 'CI/CD Pipeline for a Microservices App', 'cloud', 'btech', ['GitHub Actions', 'Docker', 'Kubernetes', 'Node.js'],
    'Every code push is tested, built into a container and deployed automatically.',
    ['Three sample microservices', 'Automated test, build and push to a registry', 'Rolling deployment to a Kubernetes cluster']),

  p(56, 'Plant Disease Detection from Leaf Images', 'ai', 'btech', STACK.dl,
    'Upload a leaf photo and get the disease name and suggested treatment.',
    ['Trained on the PlantVillage dataset', 'Transfer learning with MobileNetV2', 'Treatment suggestions per disease']),

  p(57, 'Driver Drowsiness Detection', 'ai', 'btech', ['Python', 'OpenCV', 'dlib'],
    'Watches the driver\'s eyes through a camera and sounds an alarm if they start falling asleep.',
    ['Eye aspect ratio from facial landmarks', 'Yawn detection', 'Audio alarm after a set number of frames']),

  p(58, 'Brain Tumor Classification from MRI', 'ai', 'mtech', ['Python', 'TensorFlow', 'EfficientNet', 'Grad-CAM'],
    'Classifies MRI scans into tumor types and highlights the region the model used.',
    ['Four-class classification on a public MRI dataset', 'Transfer learning with EfficientNet', 'Grad-CAM heatmaps for explainability']),

  p(59, 'Credit Card Fraud Detection', 'ai', 'btech', STACK.mlweb,
    'Flags fraudulent transactions in a highly imbalanced dataset.',
    ['SMOTE for class imbalance', 'Logistic Regression, Random Forest and XGBoost compared', 'Precision-recall analysis']),

  p(60, 'Resume Screening with NLP', 'ai', 'btech', ['Python', 'spaCy', 'Flask'],
    'Ranks uploaded resumes against a job description.',
    ['Skill extraction from PDF resumes', 'Similarity scoring against the job description', 'Ranked shortlist for the recruiter']),

  p(61, 'College Document Q&A Chatbot (RAG)', 'ai', 'mtech', ['Python', 'LangChain', 'ChromaDB', 'Streamlit'],
    'Answers questions from college regulations, syllabus and circulars, with the source page cited.',
    ['PDF ingestion and chunking', 'Retrieval-augmented generation with an open-source LLM', 'Answers show the document and page they came from']),

  p(62, 'Deepfake Video Detection', 'ai', 'mtech', ['Python', 'PyTorch', 'ResNeXt', 'LSTM'],
    'Detects whether a face video has been manipulated.',
    ['Face extraction from video frames', 'ResNeXt features with an LSTM over time', 'Evaluated on the FaceForensics++ and Celeb-DF datasets']),

  p(63, 'Crop Yield Prediction', 'ai', 'btech', STACK.mlweb,
    'Predicts crop yield from rainfall, temperature, soil and area.',
    ['Trained on Indian state-level crop data', 'Regression models compared', 'Crop suggestion for a given district and season']),

  p(64, 'Stock Price Prediction with LSTM', 'ai', 'btech', ['Python', 'TensorFlow', 'yfinance', 'Streamlit'],
    'Forecasts the next days\' closing prices for NSE stocks.',
    ['Historical data from Yahoo Finance', 'LSTM model with sliding windows', 'Interactive charts of actual and predicted prices']),

  p(65, 'Malware Classification using Image Representation', 'sec', 'mtech', ['Python', 'TensorFlow', 'Malimg dataset'],
    'Converts malware binaries into grayscale images and classifies the malware family with a CNN.',
    ['Binary-to-image conversion', 'CNN trained on the Malimg dataset', 'Family-wise accuracy and confusion matrix']),

  p(66, 'Secure Cloud File Sharing with Attribute-Based Encryption', 'sec', 'mtech', ['Java', 'Spring Boot', 'CP-ABE', 'AWS S3'],
    'Files are encrypted so only users with the right attributes, such as department and role, can open them.',
    ['Ciphertext-policy attribute-based encryption', 'Encrypted storage on AWS S3', 'Attribute revocation for users who leave']),

  p(67, 'IoT Smart Energy Meter', 'iot', 'btech', ['ESP32', 'PZEM-004T', 'Firebase', 'Flutter'],
    'Measures household power use and shows the units and estimated bill on a phone.',
    ['Voltage, current and units consumed', 'Bill estimate by tariff slab', 'Alert when daily usage crosses a limit']),

  p(68, 'Fall Detection for Elderly People', 'iot', 'btech', ['ESP32', 'MPU6050', 'Firebase'],
    'A wearable that detects a fall and alerts family members.',
    ['Accelerometer and gyroscope fall detection', 'Cancel button for false alarms', 'Push notification with time and location']),

  p(69, 'Land Records on Blockchain', 'chain', 'mtech', [...STACK.sol, 'IPFS'],
    'Property ownership and transfers recorded on-chain to prevent forged documents.',
    ['Registration and transfer through a smart contract', 'Documents stored on IPFS', 'Ownership history for every survey number']),

  p(70, 'Federated Learning for Medical Diagnosis', 'ai', 'mtech', ['Python', 'PyTorch', 'Flower'],
    'Trains one diagnosis model across several hospitals without sharing patient data.',
    ['Federated training with the Flower framework', 'Simulated hospitals with uneven data', 'Comparison with centralised training']),

  p(71, 'Traffic Sign Recognition', 'ai', 'btech', ['Python', 'TensorFlow', 'OpenCV'],
    'Recognises road signs from a camera feed in real time.',
    ['CNN trained on the GTSRB dataset (43 classes)', 'Live detection from webcam', 'Voice announcement of the detected sign']),

  p(72, 'Vehicle Accident Detection & Alert', 'iot', 'btech', ['Arduino', 'Accelerometer', 'GPS', 'GSM'],
    'Detects a crash and sends the location to emergency contacts and the nearest hospital.',
    ['Impact detection from sudden acceleration change', 'SMS with Google Maps link', '10-second cancel window for false alarms']),
];

export const projectCount = projects.length;
