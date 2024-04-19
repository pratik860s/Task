
# TASK - 1
# Editable Table with React

This project demonstrates an editable table component built with React. Each column in the table is editable, and the data can be prepared for posting to an API.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
      git clone https://github.com/pratik860s/Task.git

   ```

2. Install dependencies:
   ```bash
   cd <Task 1>
   npm install
   ```

3. Run the project:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the editable table.

## Functionality

- The table displays a list of data items with editable fields.
- Each field can be edited, and the changes are reflected in the table.
- Clicking the "Prepare Data for API" button logs the data to the console in a format suitable for posting to an API.

## Technologies Used

- React
- JavaScript

# TASK - 2

Here's a basic `README.md` file for your React project:

```markdown
# React API Post Example

This project demonstrates how to send a POST request to an API endpoint and display the response headers using React.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/pratik860s/Task.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

## Usage

1. Start the development server
   ```sh
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`
3. Enter a phone number in the input field and click the "Send POST Request" button
4. The response headers will be displayed on the page


# TASK - 3
# Notes App

This is a simple notes app built with React for the frontend and a MySQL database for the backend.

## Getting Started

1. Clone the repository:

   ```sh
   git clone https://github.com/pratik860s/Task.git
   ```

2. Install dependencies:

   ```sh
   cd Task 3
   npm install
   ```

3. Start the development server:

   ```sh
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Database Connection

1. Make sure you have MySQL installed on your machine.

2. Create a new database called `notes_db`.

3. Update the database connection settings in `server.js`:

   ```js
   const connection = mysql.createConnection({
       host: 'localhost',
       user: 'your_username',
       password: 'your_password',
       database: 'notes_db'
   });
   ```

## Database Table Schema

Create a table called `notes` in your `notes_db` database with the following schema:

```sql
CREATE TABLE notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);
```