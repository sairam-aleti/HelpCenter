Backend Setup:

Overview:
The backend of this project is built using Node.js with Express as the web application framework. It interacts with a MongoDB database to handle data related to cards, processes requests from the frontend, and sends appropriate responses.

Steps to Set Up the Backend:

1. Navigate to the `backend` directory:

   cd backend

2. Intialize node project [npm init -y]

3. Install the following packages : 
   express [npm install express]
   mongoose [npm install mongoose]
   body-parser [npm install body-parser]
   cors [npm install cors]
   nodemon [npm install --save-dev nodemon]
   dotenv [npm install dotenv]
  
4. In the env file 
   PORT=5000
   MONGO_URI=your_mongodb_connection_string_here[add your mongodb tring in here]

5. To start the backend server [npm run dev]

