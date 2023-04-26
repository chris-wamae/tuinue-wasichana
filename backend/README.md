# Tuinue Wasichana Rails API

This is the Ruby on Rails backend for the Tuinue Wasichana project, which is a platform that enables donors to donate to various charities focused on providing menstrual hygiene products and facilities for school-going girls

The backend provides RESTful APIs that handle user authentication, charity management, donation processing, and beneficiary management. It is built using Ruby on Rails and uses PostgreSQL as the database management system.


The application has been built with the MVC design pattern.

## Pre-Requisites
In order to use this repository you will need the following:

- Operating System **(Windows `10+`, Linux `3.8+`, or MacOS X `10.7+`)**
- RAM >= 4GB
- Free Space >= 2GB

## Built With
This application has been built with the following tools:

![ruby](https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white)


- **Ruby `v2.7.+`**
- **Rails `v7.0.+`**
- **activeRecord `v7.0.4`**
- **rake `v13.0.6`**
- **require_all ` 3.0`**
- **rspec `v3.12`**
- **postgresql `v12.14`**
- **devise `v4.9.4`**

## Setup
You can setup this repository by following this manual

1. Clone the repository
    ```{shell}
   git clone git@github.com:Rukorio-Vanessa/tuinue-wasichana.git
   ```
2. Navigate to the backend directory:
    ```{shell}
   cd backend 
   ```   
3. To install all the required gem for this project run:
    ```{shell}
   bundle install
   ```
4. Create the database
   ```{shell}
   rails db:create
   ```
4. Perform any pending database migrations
   ```{shell}
   rails db:migrate
   ```   
5. Seed the data
    ```{shell}
    rails db:seed
    ```
6. Run the application
    ```
     rails s
   ```
6. Open and view the application in your browser
    ```
     http://localhost:3000
   ```   
   

### DATABASE STRUCTURE

![Database Image](source_images/Tuinue-wasichana-db-structure (2).png)

### ENDPOINTS
### Users (Donors)

- POST /users: Create a new donor, charity, admin account
- POST /users/sign_in: Authenticate and login a donor, charity, admin

### Charities

- GET /charities: Get a list of all charities
- GET /charities/:id: Get charity information

### Donations

- POST /donations: Create a new donation
- PUT /donations/:id: Update a donation
- DELETE /donations/:id: Delete a donation
- GET /charities/:charity_id/anonymous_donations: Get anonymous donations for a specific charity

### Beneficiaries

- GET /beneficiaries: Get a list of all beneficiaries
- POST /beneficiaries: Create a new beneficiary
- PUT /beneficiaries/:id: Update beneficiary information
- DELETE /beneficiaries/:id: Delete a beneficiary

### Reminders

- POST /reminders: Create a new reminder
- PUT /reminders/:id: Update reminder information
- DELETE /reminders/:id: Delete a reminder

### Inventory

- POST /inventories: Add a new inventory item
- PUT /inventories/:id: Update inventory item information
- DELETE /inventories/:id: Delete an inventory item
- GET /inventories: Get a list of all inventory items

### Administrators

- GET /admin/pending_charities: Get a list of pending charity applications
- PUT /admin/charities/:id/approve: Approve a charity application
- PUT /admin/charities/:id/reject: Reject a charity application
- DELETE /admin/charities/:id: Delete a charity
- GET /admin/approved_charities: Get a list of approved charities

## LICENSE
This repository is distributed under the MIT License


## Author
This repository is created by:

- [Chris Wamae](https://github.com/chris-wamae) 

 and maintained by:
 - [Vanessa Rukorio](https://github.com/Rukorio-Vanessa)
 - [Sandra Chepkoech](https://github.com/Chepkoech1)
 - [Chris Wamae](https://github.com/chris-wamae)
 - [Hubert Jr](https://github.com/junior12341)
 - [Phylis Njeri](https://github.com/phylis13)
 - [Bernard Koech](https://github.com/Bernardkoech)



