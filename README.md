# 13-Object-Relational-Mapping-ORM-E-Commerce-Back-End


## Table of Contents

1. [User story](#user-story)
2. [Acceptance criteria](#acceptance-criteria)
3. [Screenshots](#screenshots)
4. [Walkthrough Video's](#walkthrough-video's)
5. [Resources](#resources)
6. [Installation](#installation)
7. [Usage](#usage)
8. [Authors and Acknowledgements](#authors-and-acknowledgements)

## User story

As a manager at an internet retail company I want a back end for my e-commerce website that uses the latest technologies.  So that my company can compete with other e-commerce companies.

## Acceptance criteria

- Given a functional Express.js API
- I add my database name, MySQL username, and MySQL password to an environment variable file
- I am able to connect to a database using Sequelize when I enter schema and seed commands
- Then a development database is created and is seeded with test data
- I enter the command to invoke the application
- My server is started and the Sequelize models are synced to the MySQL database
- I open API GET routes in Insomnia for categories, products, or tags
- Then the data for each of these routes is displayed in a formatted JSON
- I test API POST, PUT, and DELETE routes in Insomnia
- I am able to successfully create, update, and delete data in my database


## Screenshots

** Catergory added
![CatergoryAdded](https://user-images.githubusercontent.com/105569378/197310707-18076835-4f03-4e2f-86b9-343e2ab3803b.png)

** Product added
![ProductAdded](https://user-images.githubusercontent.com/105569378/197310709-f48d65a4-60f5-4d63-a94b-f441f2e6191d.png)

** Tag added
![TagAdded](https://user-images.githubusercontent.com/105569378/197310712-1b0ee416-59f3-4ec1-a172-96a6f75d72af.png)

## Walkthrough Video's

- [E-Commerce-Back-End Video Link](https://drive.google.com/file/u/1/d/18WWQQKblRJP7qggZcz-lnyMHr0n5vKH6/view)

- [Create Schema Database Walkthrough](https://drive.google.com/file/d/1MkeP7Q4K6ajfa4BPDmyBKu25Y7Jqfr_1/view)

## Resources

- [Repository](https://github.com/Cinderbeast/13-Object-Relational-Mapping-ORM-E-Commerce-Back-End)

## Installation
- Download through GitHub
- Open Project Directory, then install the required dependencies

## Usage
- npm install
- mysql -u root -p 
- source db/schema.sql
- exit
- npm run seed
- npm start or nodemon

## Authors and Acknowledgements

Code created by University of Utah Bootcamp Coders, edited by student, Cindy Chynoweth and help from other Awesome developers out there!