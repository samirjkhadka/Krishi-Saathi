# Krishi-Saathi
A comprehensive agro focused banking product for banks and other financial institutions.


/src
  /config
    └── db.js
    └── jwt.js
    └── nodemailer.js
  /controllers
    └── authController.js
  /middlewares
    └── authMiddleware.js
    └── errorHandler.js
    └── validateRequest.js
  /models
    └── userModel.js
  /routes
    └── authRoutes.js
  /services
    └── authService.js
    └── jwtService.js
    └── mailService.js
  /utils
    └── constants.js
    └── responseFormatter.js
    └── logger.js
    └── encryption.js
  /validators
    └── authValidators.js
  /database
    └── storedProcedures.sql (for documentation purposes)

app.js (main entry point)
.env
package.json
README.md



Folder | Purpose
/config | Database connection, JWT config, Nodemailer config
/controllers | Receives request, calls service, sends formatted response
/middlewares | Authentication middleware (JWT verify), error handlers, request validators
/models | Database query methods (without ORM, using raw SQL/stored procedures)
/routes | Route definitions (API URL mappings)
/services | Core logic (e.g., login, register, password change)
/utils | Common helpers: formatting, logging, encrypting passwords
/validators | JOI or custom validation for incoming requests
/database | Documentation of database procedures/scripts used

🌟 Key Technologies/Concepts
No ORM — Only Raw SQL Queries / Stored Procedures
JWT for Authentication
Nodemailer for Emails
Validation before Controller via Middlewares
Global uniform Response Format
All Logs to Database
Modular, clean structure ready for production


