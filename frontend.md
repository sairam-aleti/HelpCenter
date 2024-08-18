1. How can you implement shared functionality across a component tree?

To implement shared functionality across a component tree, you can use React Context. React Context allows you to create a central place to store and share data or functions, so you don't need to pass them down through props manually to every component.

Example: If you want to share a theme across your app, you can create a ThemeContext, provide the theme value at the top level of your app, and then use the theme in any component below without passing it through props.

2. Why is the useState hook appropriate for handling state in a complex component?

The useState hook is useful for handling state in a complex component because it lets you manage and update component specific data easily. With useState, you can keep track of values like user inputs, or any other data that changes over time.

Example: If you have a form with multiple fields, you can use useState to store the current values of those fields and update them as the user types. It keeps the state local to the component, making it easier to manage without dealing with too much complexity.


Frontend Setup:

Overview:
The frontend of this project is built using React and styled with Tailwind CSS. It provides a user interface to interact with the backend API for submitting requests, searching for cards, and viewing card details.


1. Navigate to the `frontend` directory:
   cd frontend

2. npm install react react-dom [to install required packages]

3. Install tailwind [npm install -D tailwindcss
                    npx tailwindcss init]
                                          
After installing set up tailwind config.js and make necessary changes according to documentaion of tailwind.

4. Install axios [npm install axios]

5. Install heroicons for search icon in searchbar [npm install @heroicons/react]

6. To start the frontend use command [npm run start]
