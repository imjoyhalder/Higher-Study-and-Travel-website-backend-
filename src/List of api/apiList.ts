/**
 * | Method   | Endpoint             | Description               |
| -------- | -------------------- | ------------------------- |
| **POST** | `/api/auth/register` | New User/Admin register  |
| **POST** | `/api/auth/login`    | Get token after login |


User APIs (Admin Only — Protected)
    | Method     | Endpoint         | Description                      
| ---------- | ---------------- | -------------------------------- |
| **GET**    | `/api/users`     | Get All users           
| **GET**    | `/api/users/:id` | get single user by id and jsonwebtoken
| **POST**   | `/api/users`     | admin can create new user 
| **PUT**    | `/api/users/:id` | update user by admin                    
| **DELETE** | `/api/users/:id` | user delete                    

 */





/**
 * 
PORT=5000
MONGO_URI=mongodb+srv://Admin2:0ZlJ8Gso9agiR6mm@cluster0.y8uksmr.mongodb.net/study_travel_portal?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=4a8029c141ee5bb0cf2950ddc7db8ed3
JWT_EXPIRES_IN=7d
BCRYPT_SALT_ROUNDS=10

 */