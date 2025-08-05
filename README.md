
Frontend URL : pp.netlify.com/projects/patient-portal-sand

Digital Patient portal
Digital Patient portal is a Mern Stack web application for booking medical lab tests. it has user registrations, test selection, booking and booking history.

*Approach*
    1. Frontend:
        It is built with React and it uses react router for navigation purpose and it communicates with backend via Axios (api.js) and it stored the JWT token in localStorage after registration. 
    2. Backend:
        The Backend part is built in Node js with Express and the data storage for all events are stored in MongoDB (patients,tests,bookings). The middleware part protects sensitive endpoints and the controllers handle the logic for registration, test listing, booking and history.


*SetUp Instructions:* 

    1. Clone the Repository
        git clone https://github.com/Mithunkrishh/Patient-Portal
        cd patient-portal

    2. Backend Setup
        cd backend
        npm install
        npm run dev

    3. Frontend Setup
        cd frontend
        npm install
        npm run dev

*API Endpoints*

    1. POST:
         Register a new Patient == /api/patients/register 
         body : {name, email, password}
         returns : {token,user}

         Book a test == /api/bookings/
         body: {testId}

    2. GET:

        Get all available test = /api/tests

        Get booking History = /api/bookings
