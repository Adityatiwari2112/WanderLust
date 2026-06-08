# WanderLust 

A full-stack travel listing web application inspired by Airbnb, where users can explore, create, edit, and review travel destinations and accommodations.

## 🚀 Features

* User Authentication & Authorization

  * Sign up, Login, Logout
  * Secure password hashing
  * Session-based authentication

* Listings Management

  * Create new listings
  * Edit existing listings
  * Delete listings
  * View listing details

* Reviews & Ratings

  * Add reviews to listings
  * Delete reviews
  * User-specific review management

* Image Upload Support

  * Upload listing images
  * Cloud-based image storage

* Responsive UI

  * Mobile-friendly design
  * Clean and intuitive user experience

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* Bootstrap
* EJS Templates

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* Passport.js
* Express Session

### Cloud Services

* Cloudinary (Image Storage)

## 📂 Project Structure

```bash
WanderLust/
│
├── models/
├── routes/
├── controllers/
├── middleware/
├── views/
├── public/
├── utils/
├── app.js
├── package.json
└── README.md
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/WanderLust.git
cd WanderLust
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### 4. Run the Application

```bash
node app.js
```

or

```bash
nodemon app.js
```

### 5. Open in Browser

```bash
http://localhost:8080
```

## 🎯 Future Enhancements

* Search and Filter Listings
* Wishlist/Favorites
* Booking System
* Payment Gateway Integration
* Interactive Maps
* User Profiles

## 🤝 Contributing

Contributions are welcome. Feel free to fork the repository and submit a pull request.

## 📜 License

This project is created for educational and learning purposes.

## 👨‍💻 Author

Aditya Tiwari

B.Tech Computer Science Engineering

Aspiring Software Engineer
