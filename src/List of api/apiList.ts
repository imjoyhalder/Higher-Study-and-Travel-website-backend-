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