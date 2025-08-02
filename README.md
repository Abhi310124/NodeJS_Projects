# Node.js Foundational Projects 🚀

This repository contains a collection of basic Node.js projects designed to demonstrate fundamental backend concepts. Each project is self-contained and focuses on a specific piece of Node.js functionality.

---

## Projects Included

### 📂 File Handling System

This project demonstrates how to perform **CRUD (Create, Read, Update, Delete)** operations on files using Node.js's built-in `fs` module. It's a practical example of handling file I/O asynchronously.

**Features:**
* **Create & Write**: Creates a new file and writes content to it.
* **Read**: Reads and displays content from an existing file.
* **Update**: Appends new data to a file.
* **Delete**: Removes a file from the system.

### 📝 Custom Logger

This is a simple but effective logging utility. It captures incoming request details and saves them to a log file, which is essential for debugging and monitoring any web application.

**Features:**
* Records the request method, URL, and timestamp.
* Writes log entries to a `logs.txt` file for persistence.
* Can be used as simple middleware in a server.

### 🌐 Basic HTTP Server

This project showcases how to create a simple web server from scratch using only the native `http` module in Node.js. It listens for incoming requests and sends back a basic response.

**Features:**
* Creates a server instance that listens on a specified port.
* Handles incoming HTTP requests.
* Sends a "Hello, World!" or simple HTML response to the client.

---

## How to Run

To get any of these projects running locally, you'll need [Node.js](https://nodejs.org/) installed on your machine.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```

2.  **Navigate into the project directory:**
    ```bash
    cd your-repo-name
    ```

3.  **Run the desired project file:**
    * For the server: `node server.js`
    * For the file handler: `node file-handler.js`
    * For the logger (if integrated with the server): `node server.js`

*Replace `server.js` and `file-handler.js` with the actual names of your files.*
